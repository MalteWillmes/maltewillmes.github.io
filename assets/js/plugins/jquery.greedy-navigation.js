/*
 * Greedy Navigation
 *
 * Modified so that on mobile (<= 768 px)
 * ALL navigation links except persistent items
 * collapse into the hamburger menu.
 */

var $nav = $("#site-nav");
var $btn = $("#site-nav button");
var $vlinks = $("#site-nav .visible-links");
var $hlinks = $("#site-nav .hidden-links");

var $vlinksPersistTail =
  $vlinks.children(".persist.tail");

var breaks = [];

var mobileBreakpoint = 768;
var mobileMode = false;


/* =========================================
   MOVE ONE HIDDEN ITEM BACK TO VISIBLE
   ========================================= */

function moveHiddenItemToVisible() {

  var $item =
    $hlinks.children().first();


  if ($item.length === 0) {
    return;
  }


  /*
   * If a persistent item exists at the
   * end of the navigation, insert normal
   * navigation links before it.
   */

  if ($vlinksPersistTail.length > 0) {

    $item.insertBefore(
      $vlinksPersistTail.first()
    );

  } else {

    $item.appendTo(
      $vlinks
    );

  }

}


/* =========================================
   RESTORE ALL NAV ITEMS
   ========================================= */

function restoreAllLinks() {

  while (
    $hlinks.children().length > 0
  ) {

    moveHiddenItemToVisible();

  }


  breaks = [];

}


/* =========================================
   MOBILE NAVIGATION
   ========================================= */

function setMobileNavigation() {


  /*
   * When entering mobile mode, first
   * restore the navigation to its original
   * order.
   */

  if (!mobileMode) {

    restoreAllLinks();

  }


  /*
   * Move every normal navigation item
   * into the hamburger menu.
   *
   * Items with class .persist remain
   * visible. In this theme that means
   * the site title stays visible.
   */

  while (
    $vlinks.children("*:not(.persist)").length > 0
  ) {

    $vlinks
      .children("*:not(.persist)")
      .last()
      .prependTo(
        $hlinks
      );

  }


  /*
   * Always show hamburger button.
   */

  $btn.removeClass(
    "hidden"
  );


  /*
   * Number of items inside menu.
   */

  $btn.attr(
    "count",
    $hlinks.children().length
  );


  mobileMode = true;

}


/* =========================================
   DESKTOP GREEDY NAVIGATION
   ========================================= */

function setDesktopNavigation() {


  /*
   * If coming from mobile mode,
   * restore all links first.
   */

  if (mobileMode) {

    restoreAllLinks();

    mobileMode = false;

  }


  var availableSpace =
    $btn.hasClass("hidden")

      ? $nav.width()

      : $nav.width() -
        $btn.width() -
        30;



  /*
   * ---------------------------------------
   * Navigation is overflowing
   * ---------------------------------------
   */

  if (
    $vlinks.width() >
    availableSpace
  ) {


    while (

      $vlinks.width() >
        availableSpace &&

      $vlinks
        .children("*:not(.persist)")
        .length > 0

    ) {


      /*
       * Remember width at which
       * this item disappeared.
       */

      breaks.push(
        $vlinks.width()
      );


      /*
       * Move last normal item
       * into dropdown.
       */

      $vlinks
        .children("*:not(.persist)")
        .last()
        .prependTo(
          $hlinks
        );


      /*
       * Show hamburger.
       */

      $btn.removeClass(
        "hidden"
      );


      /*
       * Recalculate available width.
       */

      availableSpace =
        $nav.width() -
        $btn.width() -
        30;

    }


  }


  /*
   * ---------------------------------------
   * Space is available
   * ---------------------------------------
   */

  else {


    while (

      breaks.length > 0 &&

      availableSpace >
        breaks[
          breaks.length - 1
        ]

    ) {


      /*
       * Move first hidden item
       * back into visible navigation.
       */

      moveHiddenItemToVisible();


      breaks.pop();


      /*
       * Recalculate space because
       * visible navigation changed.
       */

      availableSpace =
        $nav.width() -
        $btn.width() -
        30;

    }



    /*
     * Hide hamburger if nothing
     * remains inside the dropdown.
     */

    if (
      $hlinks.children().length === 0
    ) {

      $btn.addClass(
        "hidden"
      );

      $btn.removeClass(
        "close"
      );

      $hlinks.addClass(
        "hidden"
      );

    }

  }


  $btn.attr(
    "count",
    $hlinks.children().length
  );

}


/* =========================================
   UPDATE NAVIGATION
   ========================================= */

function updateNav() {


  var isMobile =
    window.innerWidth <=
    mobileBreakpoint;



  if (isMobile) {

    setMobileNavigation();

  } else {

    setDesktopNavigation();

  }



  /* =======================================
     UPDATE PAGE POSITION
     ======================================= */

  var mastheadHeight =
    $(".masthead").height();


  $("body").css(
    "padding-top",
    mastheadHeight + "px"
  );


  if (
    $(".author__urls-wrapper button")
      .is(":visible")
  ) {

    $(".sidebar").css(
      "padding-top",
      ""
    );

  } else {

    $(".sidebar").css(
      "padding-top",
      mastheadHeight + "px"
    );

  }

}


/* =========================================
   WINDOW RESIZE
   ========================================= */

$(window).on(
  "resize",
  function () {

    updateNav();

  }
);


/* =========================================
   ORIENTATION CHANGE
   ========================================= */

if (
  screen.orientation &&
  screen.orientation.addEventListener
) {

  screen.orientation.addEventListener(
    "change",
    function () {

      updateNav();

    }
  );

}


/* =========================================
   HAMBURGER BUTTON
   ========================================= */

$btn.on(
  "click",
  function () {

    $hlinks.toggleClass(
      "hidden"
    );

    $(this).toggleClass(
      "close"
    );

  }
);


/* =========================================
   INITIALIZE
   ========================================= */

updateNav();