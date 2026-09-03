/*
 * Greedy navigation with explicit mobile behavior.
 *
 * Desktop:
 *   Moves navigation items into the dropdown only when space is limited.
 *
 * Mobile (<= 768 px):
 *   Moves every non-persistent navigation item into the dropdown so that
 *   only the persistent site title remains visible beside the menu button.
 */

(function ($) {
  "use strict";

  var $nav = $(".greedy-nav");
  var $btn = $(".greedy-nav button").first();
  var $vlinks = $(".greedy-nav .visible-links");
  var $hlinks = $(".greedy-nav .hidden-links");

  var mobileBreakpoint = 768;

  if (!$nav.length || !$btn.length || !$vlinks.length || !$hlinks.length) {
    return;
  }

  function moveHiddenToVisible() {
    while ($hlinks.children().length > 0) {
      $hlinks.children().first().appendTo($vlinks);
    }
  }

  function updateMobileNav() {
    while ($vlinks.children("*:not(.persist)").length > 0) {
      $vlinks
        .children("*:not(.persist)")
        .last()
        .prependTo($hlinks);
    }

    if ($hlinks.children().length > 0) {
      $btn.removeClass("hidden");
    } else {
      $btn.addClass("hidden");
      $hlinks.addClass("hidden");
    }

    $btn.attr("count", $hlinks.children().length);
  }

  function updateDesktopNav() {
    moveHiddenToVisible();

    $hlinks.addClass("hidden");
    $btn.addClass("hidden");

    var availableSpace = $nav.width();

    while (
      $vlinks.width() > availableSpace &&
      $vlinks.children("*:not(.persist)").length > 0
    ) {
      $vlinks
        .children("*:not(.persist)")
        .last()
        .prependTo($hlinks);

      $btn.removeClass("hidden");

      availableSpace =
        $nav.width() -
        $btn.outerWidth(true) -
        30;
    }

    if ($hlinks.children().length === 0) {
      $btn.addClass("hidden");
      $hlinks.addClass("hidden");
    }

    $btn.attr("count", $hlinks.children().length);
  }

  function updateNav() {
    if (window.innerWidth <= mobileBreakpoint) {
      updateMobileNav();
    } else {
      updateDesktopNav();
    }
  }

  $btn.on("click", function (event) {
    event.preventDefault();
    $hlinks.toggleClass("hidden");
  });

  $(window).on("resize", updateNav);

  updateNav();
})(jQuery);