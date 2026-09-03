/*
 * Greedy navigation
 *
 * Desktop:
 *   Show the full navigation whenever it fits.
 *   Move overflowing links into the dropdown.
 *
 * Mobile (<= 768 px):
 *   Keep only persistent items visible and move all
 *   navigation links into the hamburger menu.
 */

(function ($) {
  "use strict";

  $(function () {

    $(".greedy-nav").each(function () {

      var $nav = $(this);
      var $vlinks = $nav.children(".visible-links");
      var $hlinks = $nav.children(".hidden-links");

      /*
       * Select the actual greedy-navigation button.
       * Do not simply select the first button in the masthead,
       * because other controls may also be present.
       */
      var $btn = $nav.children(".greedy-nav__toggle");

      if (!$btn.length) {
        $btn = $nav.children("button").filter(function () {
          return $(this).find(".navicon").length > 0;
        }).first();
      }

      if (!$btn.length) {
        $btn = $nav.children("button").last();
      }


      var mobileBreakpoint = 768;


      function hideMenu() {
        $hlinks.addClass("hidden");
        $btn.attr("aria-expanded", "false");
      }


      function showButton() {
        $btn.removeClass("hidden");
      }


      function hideButton() {
        $btn.addClass("hidden");
        hideMenu();
      }


      function restoreAllLinks() {

        while ($hlinks.children().length > 0) {
          $hlinks.children().first().appendTo($vlinks);
        }

      }


      function updateMobileNav() {

        /*
         * Start from a known state.
         */
        restoreAllLinks();


        /*
         * Move every navigation item except persistent
         * items such as the site title into the dropdown.
         */
        while ($vlinks.children(":not(.persist)").length > 0) {

          $vlinks
            .children(":not(.persist)")
            .last()
            .prependTo($hlinks);

        }


        /*
         * Mobile always gets the hamburger button when
         * navigation links exist.
         */
        if ($hlinks.children().length > 0) {
          showButton();
          hideMenu();
        } else {
          hideButton();
        }


        $btn.attr("count", $hlinks.children().length);

      }


      function updateDesktopNav() {

        /*
         * Return everything to the visible navigation first.
         */
        restoreAllLinks();

        hideButton();


        var navWidth = $nav.innerWidth();
        var visibleWidth = $vlinks.outerWidth(true);


        /*
         * If everything fits, leave the full desktop
         * navigation visible and keep the hamburger hidden.
         */
        if (visibleWidth <= navWidth) {
          return;
        }


        /*
         * The links do not fit, so make room for the
         * hamburger button and progressively move links.
         */
        showButton();

        var availableWidth =
          navWidth -
          $btn.outerWidth(true) -
          20;


        while (
          $vlinks.outerWidth(true) > availableWidth &&
          $vlinks.children(":not(.persist)").length > 0
        ) {

          $vlinks
            .children(":not(.persist)")
            .last()
            .prependTo($hlinks);

        }


        /*
         * If no items ultimately needed hiding,
         * hide the button again.
         */
        if ($hlinks.children().length === 0) {
          hideButton();
        } else {
          showButton();
          hideMenu();
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


      /*
       * Hamburger click.
       */
      $btn.off("click.greedyNav");

      $btn.on("click.greedyNav", function (event) {

        event.preventDefault();
        event.stopPropagation();

        $hlinks.toggleClass("hidden");

        var expanded =
          !$hlinks.hasClass("hidden");

        $btn.attr(
          "aria-expanded",
          expanded ? "true" : "false"
        );

      });


      /*
       * Close dropdown if the user clicks elsewhere.
       */
      $(document).off(
        "click.greedyNav-" + $nav.index()
      );

      $(document).on(
        "click.greedyNav-" + $nav.index(),
        function (event) {

          if (!$(event.target).closest($nav).length) {
            hideMenu();
          }

        }
      );


      /*
       * Recalculate after resizing.
       */
      var resizeTimer;

      $(window).on("resize.greedyNav", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(
          updateNav,
          100
        );

      });


      /*
       * Initial layout.
       */
      updateNav();

    });

  });

})(jQuery);