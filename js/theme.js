var gst = (function ($) {
    'use strict';

    /**
     * Empty placholder function.
     *
     * @since 1.0.0
     */
    var humStart = function () {
            // Empty function, do all the things.

        },

        /**
         * Fire events on document ready, and bind other events.
         *
         * @since 1.0.0
         */
        ready = function () {
            humStart();

            /*
             priorityNav.init({
                mainNavWrapper: ".nav-primary .wrap",
                mainNav: ".menu-primary"
            });
            */

            // Examples binding to events.
            $(window).on('resize.gst', humStart);
            $(window).on('scroll.gst resize.gst', humStart);
        };

    // Only expose the ready function to the world
    return {
        ready: ready
    };

})(jQuery);

jQuery(gst.ready);
