---
permalink: /
title: "Malte Willmes"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<style>

  /* =========================================
     1. STATIC LIGHT THEME VARIABLES
     ========================================= */

  :root {
    --port-primary: #2c3e50;
    --port-text: #3b3b3b;
    --port-muted: #64748b;
    --port-bg: #fdfdfd;
    --port-border: #eaeaea;
    --accent-color: #f0f7ff;
  }


  /* =========================================
     2. GLOBAL HEADER
     ========================================= */

  .masthead,
  .masthead__inner-wrap,
  .masthead__menu,
  .masthead__menu ul,
  .greedy-nav {
    background-color: #ffffff !important;
    background: #ffffff !important;
  }

  .masthead {
    border-bottom: 1px solid var(--port-border) !important;
  }

  .masthead a,
  .masthead__menu-item,
  .masthead__menu-item a,
  .greedy-nav a,
  .greedy-nav .visible-links,
  .greedy-nav .visible-links li,
  .greedy-nav .visible-links a {
    background-color: transparent !important;
    background: transparent !important;
    color: var(--port-text) !important;
  }

  .masthead a:hover,
  .greedy-nav a:hover,
  .greedy-nav .visible-links a:hover,
  .greedy-nav .visible-links li.masthead__menu-item--current a,
  .greedy-nav .visible-links li.masthead__menu-item--current a:hover {
    background-color: transparent !important;
    background: transparent !important;
    color: var(--port-primary) !important;
  }

  h1.page__title,
  .page__title {
    color: var(--port-primary) !important;
    font-weight: 700 !important;
  }


  /* =========================================
     3. GENERAL HOMEPAGE STYLES
     ========================================= */

  .section-title {
    margin-top: 45px;
    margin-bottom: 18px;

    border-bottom: 1px solid var(--port-border);

    padding-bottom: 8px;

    text-transform: uppercase;

    color: var(--port-primary) !important;

    font-size: 1.15em !important;
    letter-spacing: 0.1em;
    font-weight: 700;
  }

  .content-text {
    text-align: justify !important;
    text-justify: inter-word !important;

    font-size: 0.95em;
    line-height: 1.7;

    margin-bottom: 20px;

    color: var(--port-text);
  }


  /* =========================================
     4. COLLABORATION BOX
     ========================================= */

  .collab-box {
    background-color: var(--accent-color);

    border-left: 4px solid var(--port-primary);

    padding: 14px 18px;

    font-size: 0.95em;

    color: var(--port-primary);

    font-weight: 500;

    margin: 30px 0;

    border-radius: 0 4px 4px 0;

    box-shadow: 0 1px 3px rgba(0,0,0,0.03);

    line-height: 1.6;
  }


  /* =========================================
     5. RESEARCH INTERESTS
     ========================================= */

  .interest-pills {
    display: flex;
    flex-wrap: wrap;

    gap: 10px;

    margin-top: 15px;
    margin-bottom: 30px;
  }

  .pill {
    background-color: var(--port-primary);

    color: #ffffff;

    font-size: 0.85em;
    font-weight: 600;

    padding: 6px 14px;

    border-radius: 4px;

    letter-spacing: 0.03em;

    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }


  /* =========================================
     6. DATA & TOOLS
     ========================================= */

  .tools-grid {
    display: grid;

    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 14px;

    margin-top: 20px;
    margin-bottom: 35px;
  }

  .tool-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 145px;

    padding: 18px 20px;

    border: 1px solid var(--port-border);
    border-radius: 6px;

    background: var(--port-bg);

    transition:
      border-color 0.15s ease,
      transform 0.15s ease,
      box-shadow 0.15s ease;
  }

  .tool-card:hover {
    border-color: #cbd5e1;

    transform: translateY(-2px);

    box-shadow:
      0 4px 14px rgba(0,0,0,0.04);
  }

  .tool-title {
    margin: 0 0 6px 0;

    color: var(--port-primary);

    font-size: 1em;
    font-weight: 700;
  }

  .tool-description {
    margin: 0 0 14px 0;

    color: var(--port-text);

    font-size: 0.86em;
    line-height: 1.5;
  }

  .tool-links {
    display: flex;
    flex-wrap: wrap;

    gap: 6px;

    margin-top: auto;
  }

  .tool-link {
    display: inline-block;

    padding: 3px 8px;

    border: 1px solid #d0e3f7;
    border-radius: 3px;

    background: #f0f7ff;

    color: #3172b4 !important;

    font-size: 0.70em;
    font-weight: 600;

    text-decoration: none !important;

    transition: all 0.15s ease;
  }

  .tool-link:hover {
    background: #3172b4;
    border-color: #3172b4;

    color: #ffffff !important;
  }


  /* =========================================
     7. NEWS TIMELINE
     ========================================= */

  .news-scroll-container {
    max-height: 500px;

    overflow-y: auto;

    margin-top: 20px;

    padding-right: 15px;
  }

  .news-scroll-container::-webkit-scrollbar {
    width: 5px;
  }

  .news-scroll-container::-webkit-scrollbar-track {
    background: var(--port-bg);
  }

  .news-scroll-container::-webkit-scrollbar-thumb {
    background: #d1d5db;

    border-radius: 10px;
  }

  .news-scroll-container::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
  }

  .timeline-item {
    display: flex;

    margin-bottom: 14px;

    font-size: 0.9em;
    line-height: 1.5;

    padding: 4px 0;

    align-items: baseline;
  }

  .timeline-date {
    min-width: 95px;

    font-weight: 700;

    color: var(--port-muted);
  }

  .timeline-content {
    flex: 1;

    color: var(--port-text);

    word-wrap: break-word;
  }

  .timeline-item.milestone {
    background-color: var(--accent-color);

    border-radius: 4px;

    padding: 8px 12px;

    margin-left: -12px;
    margin-top: 2px;
    margin-bottom: 12px;
  }


  /* =========================================
     8. MOBILE
     ========================================= */

  @media (max-width: 768px) {

    .timeline-item {
      flex-direction: column;

      margin-bottom: 18px;
    }

    .timeline-date {
      margin-bottom: 4px;

      font-size: 0.85em;

      color: var(--port-primary);
    }

    .timeline-item.milestone {
      margin-left: 0;

      padding: 10px 12px;
    }

  }

  @media (max-width: 650px) {

    .tools-grid {
      grid-template-columns: 1fr;
    }

    .tool-card {
      min-height: auto;
    }

  }

</style>


<div class="content-text">
  I am a researcher in ecology, geochemistry, and archaeology at the
  <a href="https://www.nina.no/"
     target="_blank"
     rel="noopener noreferrer">
    Norwegian Institute for Nature Research
  </a>
  and affiliated with the
  <a href="https://ims.ucsc.edu/"
     target="_blank"
     rel="noopener noreferrer">
    Institute of Marine Science at UC Santa Cruz
  </a>.
</div>


<div class="content-text">
  At the core of my research is the development and application of
  geochemical tracers to reconstruct wildlife migrations, life histories,
  and population connectivity. My current work focuses on otoliths and
  scales to study Atlantic and Pacific salmonids, Delta and Longfin smelt,
  and sturgeon. By integrating fieldwork, laboratory analyses, and
  statistical modeling, I aim to advance wildlife management and
  conservation.
</div>


<div class="content-text">
  I collaborate with research groups at UC Santa Cruz (IMS, NOAA),
  UC Davis (WFCB, CWS, EPS), and ANU (RSES). In addition, I work
  directly with many state and federal agencies to translate our
  scientific findings into management actions.
</div>



<h2 class="section-title">
  Data &amp; Tools
</h2>


<div class="tools-grid">


  <!-- IRHUM -->

  <div class="tool-card">

    <div>

      <div class="tool-title">
        IRHUM Database
      </div>

      <p class="tool-description">
        Baseline strontium isotope data for archaeological
        and ecological provenance studies.
      </p>

    </div>


    <div class="tool-links">

      <a
        href="{{ '/irhum/' | relative_url }}"
        class="tool-link"
      >
        Database
      </a>

    </div>

  </div>



  <!-- IsoFishR -->

  <div class="tool-card">

    <div>

      <div class="tool-title">
        IsoFishR
      </div>

      <p class="tool-description">
        Data reduction and analysis of laser-ablation
        <sup>87</sup>Sr/<sup>86</sup>Sr isotope profiles in R.
      </p>

    </div>


    <div class="tool-links">

      <a
        href="https://github.com/MalteWillmes/IsoFishR"
        target="_blank"
        rel="noopener noreferrer"
        class="tool-link"
      >
        GitHub
      </a>

      <a
        href="https://doi.org/10.1371/journal.pone.0204519"
        target="_blank"
        rel="noopener noreferrer"
        class="tool-link"
      >
        Paper
      </a>

    </div>

  </div>



  <!-- OGFLtools -->

  <div class="tool-card">

    <div>

      <div class="tool-title">
        OGFLtools
      </div>

      <p class="tool-description">
        R package by Christian Denney containing utility
        functions used in the Otolith Geochemistry and Fish
        Ecology Laboratory at UC Davis.
      </p>

    </div>


    <div class="tool-links">

      <a
        href="https://github.com/ctdenney/OGFLtools"
        target="_blank"
        rel="noopener noreferrer"
        class="tool-link"
      >
        GitHub
      </a>

    </div>

  </div>



  <!-- SFEcol -->

  <div class="tool-card">

    <div>

      <div class="tool-title">
        SFEcol
      </div>

      <p class="tool-description">
        R color palettes derived from landscapes and wildlife
        of the San Francisco Estuary.
      </p>

    </div>


    <div class="tool-links">

      <a
        href="https://maltewillmes.github.io/sfecol/"
        target="_blank"
        rel="noopener noreferrer"
        class="tool-link"
      >
        Package
      </a>

    </div>

  </div>

<!-- BandTracer -->

<div class="tool-card">

  <div>

    <div class="tool-title">
      BandTracer
    </div>

    <p class="tool-description">
      Fiji plugin for tracing and measuring growth bands
      in otoliths, scales, and fin spines.
    </p>

  </div>


  <div class="tool-links">

    <a
      href="https://github.com/MalteWillmes/BandTracer"
      target="_blank"
      rel="noopener noreferrer"
      class="tool-link"
    >
      GitHub
    </a>

  </div>

</div>
</div>