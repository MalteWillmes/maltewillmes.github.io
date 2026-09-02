#!/usr/bin/env python3

import html
import json
import os
import re
import urllib.parse
import urllib.request
from datetime import datetime, timezone


ZOTERO_USER_ID = "10108379"

API_URL = (
    f"https://api.zotero.org/users/"
    f"{ZOTERO_USER_ID}/publications/items"
)

OUTPUT_FILE = "_data/zotero_publications.json"

ITEMS_PER_REQUEST = 100


def fetch_zotero_items():
    """Fetch all items from Zotero My Publications."""

    all_items = []
    start = 0

    while True:

        params = urllib.parse.urlencode({
            "format": "json",
            "sort": "date",
            "direction": "desc",
            "limit": ITEMS_PER_REQUEST,
            "start": start,
            "v": 3,
        })

        url = f"{API_URL}?{params}"

        request = urllib.request.Request(
            url,
            headers={
                "Zotero-API-Version": "3",
                "User-Agent": "maltewillmes.github.io publication sync",
            },
        )

        print(f"Fetching Zotero items starting at {start}...")

        with urllib.request.urlopen(
            request,
            timeout=30
        ) as response:

            batch = json.load(response)

        if not batch:
            break

        all_items.extend(batch)

        if len(batch) < ITEMS_PER_REQUEST:
            break

        start += ITEMS_PER_REQUEST

    return all_items


def get_year(date_string):
    """Extract a four-digit year from Zotero's date field."""

    if not date_string:
        return "Undated"

    match = re.search(
        r"\b(18|19|20|21)\d{2}\b",
        str(date_string)
    )

    if match:
        return match.group(0)

    return "Undated"


def format_creator(creator):
    """Format a Zotero creator as Lastname, I. and bold Willmes."""

    if creator.get("name"):
        return html.escape(
            creator["name"],
            quote=True
        )

    last_name = creator.get("lastName", "")
    first_name = creator.get("firstName", "")

    parts = re.split(
        r"[\s-]+",
        first_name.strip()
    )

    initials = " ".join(
        f"{part[0].upper()}."
        for part in parts
        if part
    )

    if initials:
        formatted = f"{last_name}, {initials}"
    else:
        formatted = last_name

    formatted = html.escape(
        formatted,
        quote=True
    )

    if last_name.lower() == "willmes":
        formatted = f"<strong>{formatted}</strong>"

    return formatted


def format_authors(creators):
    """Return formatted author string."""

    if not creators:
        return ""

    accepted_types = {
        "author",
        "editor",
        "bookAuthor",
    }

    authors = []

    for creator in creators:

        creator_type = creator.get(
            "creatorType"
        )

        if (
            creator_type is None
            or creator_type in accepted_types
        ):
            authors.append(
                format_creator(creator)
            )

    return ", ".join(authors)


def get_venue(item):

    return (
        item.get("publicationTitle")
        or item.get("proceedingsTitle")
        or item.get("bookTitle")
        or item.get("university")
        or item.get("institution")
        or item.get("publisher")
        or ""
    )


def get_venue_details(item):

    parts = []

    venue = get_venue(item)

    if venue:
        parts.append(venue)

    volume = item.get("volume", "")
    issue = item.get("issue", "")

    if volume:

        if issue:
            parts.append(
                f"{volume}({issue})"
            )
        else:
            parts.append(volume)

    pages = item.get("pages", "")

    if pages:
        parts.append(pages)

    return ", ".join(parts)


def get_type_label(item_type):

    labels = {
        "journalArticle": "Article",
        "conferencePaper": "Conference",
        "bookSection": "Book chapter",
        "book": "Book",
        "report": "Report",
        "thesis": "Thesis",
        "preprint": "Preprint",
        "webpage": "Web",
    }

    return labels.get(
        item_type,
        "Publication"
    )


def clean_items(results):
    """Reduce Zotero data to fields needed by the site."""

    cleaned = []

    excluded_types = {
        "attachment",
        "note",
        "annotation",
    }

    for result in results:

        item = result.get(
            "data",
            result
        )

        item_type = item.get(
            "itemType",
            ""
        )

        if item_type in excluded_types:
            continue

        doi = (
            item.get("DOI", "")
            or ""
        ).strip()

        doi_url = ""

        if doi:
            doi_url = (
                "https://doi.org/"
                + doi
            )

        cleaned.append({
            "item_type":
                item_type,

            "type_label":
                get_type_label(item_type),

            "title":
                item.get("title", "")
                or "Untitled",

            "authors_html":
                format_authors(
                    item.get(
                        "creators",
                        []
                    )
                ),

            "date":
                item.get("date", "")
                or "",

            "year":
                get_year(
                    item.get(
                        "date",
                        ""
                    )
                ),

            "venue":
                get_venue(item),

            "venue_details":
                get_venue_details(item),

            "abstract":
                item.get(
                    "abstractNote",
                    ""
                )
                or "",

            "doi":
                doi,

            "doi_url":
                doi_url,

            "url":
                item.get("url", "")
                or "",
        })

    return cleaned


def number_publications(items):
    """
    Items arrive newest -> oldest.

    Highest number = newest paper.
    Number 1 = oldest paper.
    """

    total = len(items)

    for index, item in enumerate(items):

        item["number"] = (
            total - index
        )


def group_by_year(items):
    """Create year groups while retaining newest-first display."""

    groups = []

    current_year = None
    current_group = None

    for item in items:

        year = item["year"]

        if year != current_year:

            current_group = {
                "year": year,
                "items": [],
            }

            groups.append(
                current_group
            )

            current_year = year

        current_group[
            "items"
        ].append(item)

    return groups


def main():

    results = fetch_zotero_items()

    items = clean_items(results)

    if not items:
        raise RuntimeError(
            "No publications found in Zotero My Publications."
        )

    number_publications(items)

    groups = group_by_year(items)

    output = {
        "updated":
            datetime.now(
                timezone.utc
            ).isoformat(),

        "count":
            len(items),

        "years":
            groups,
    }

    os.makedirs(
        os.path.dirname(
            OUTPUT_FILE
        ),
        exist_ok=True
    )

    with open(
        OUTPUT_FILE,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            output,
            file,
            ensure_ascii=False,
            indent=2
        )

    print(
        f"Wrote {len(items)} publications "
        f"to {OUTPUT_FILE}"
    )


if __name__ == "__main__":
    main()
