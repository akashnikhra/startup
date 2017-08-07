(function ($) {
    'use strict';

    $('#slidea').slidea({
        autoplay: true,
        layout: "fluid",
        layoutSettings: {
            anchor: 'center',
            size: 'fullscreen'
        },
        contentScaling: {
            enabled: true, // Default: false
            mode: 'responsive', // Modes: responsive, native
            factor: {
                xs: 1,
                sm: 1,
                md: 1,
                lg: 1,
                xlg: 1
            }
        },
        overlap: 0,
        progress: {
            enabled: false
        },
        controls: {
            enabled: true,
            thumbnail: true
        },
        duration: 6000,
        canvas_parallax: true,
        content_parallax: true,
        content_scaling: true,
        slide: {
            '#default_slidea_slide_one': {
                object: {
                    '#title-one': {
                        start: 1500,
                        initial: "opacity 0, x 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, x 50, easing easeOutQuad, duration 500"
                    },
                    '#description-one': {
                        start: 1750,
                        initial: 'opacity 0, x 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-one-1': {
                        start: 2000,
                        initial: 'opacity 0, x 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-one-2': {
                        start: 2250,
                        initial: 'opacity 0, x 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x 50, easing easeOutQuad, duration 500'
                    }
                }
            },
            '#default_slidea_slide_two': {
                object: {
                    '#title-two': {
                        start: 1500,
                        initial: "opacity 0, y 50, easing easeOutQuad, duration 500",
                        out: "opacity 0, y 50, easing easeOutQuad, duration 500"
                    },
                    '#description-two': {
                        start: 1750,
                        initial: 'opacity 0, y 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, y 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-two-1': {
                        start: 2000,
                        initial: 'opacity 0, y 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, y 50, easing easeOutQuad, duration 500'
                    },
                    '#btn-two-2': {
                        start: 2250,
                        initial: 'opacity 0, y 50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, y 50, easing easeOutQuad, duration 500'
                    }
                }
            },
            '#default_slidea_slide_three': {
                object: {
                    '#title-three': {
                        start: 1500,
                        initial: "opacity 0, x -50, easing easeOutQuad, duration 500",
                        out: "opacity 0, x -50, easing easeOutQuad, duration 500"
                    },
                    '#description-three': {
                        start: 1750,
                        initial: 'opacity 0, x -50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x -50, easing easeOutQuad, duration 500'
                    },
                    '#btn-three-1': {
                        start: 2250,
                        initial: 'opacity 0, x -50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x -50, easing easeOutQuad, duration 500'
                    },
                    '#btn-three-2': {
                        start: 2000,
                        initial: 'opacity 0, x -50, easing easeOutQuad, duration 500',
                        out: 'opacity 0, x -50, easing easeOutQuad, duration 500'
                    }
                }
            }
        }
    });

})(jQuery);