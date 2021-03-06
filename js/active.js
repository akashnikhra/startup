(function ($) {
    'use strict';

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="pe-7s-angle-left" aria-hidden="true"></i>', '<i class="pe-7s-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000
        });
    }

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".twitter_feed_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            smartSpeed: 700,
            autoplayTimeout: 5000
        });
    }

    // Partner Company Slider Active Code
    if ($.fn.owlCarousel) {
        $(".partner_slides").owlCarousel({
            items: 5,
            margin: 50,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // Meanmenu Active Code
    if ($.fn.meanmenu) {
        $('.main_menu_area .mainmenu nav').meanmenu({
            onePage: true
        });
    }

    // Menu Active Code
    $('.menu_open_close').on('click', function () {
        $('body').toggleClass('menu-open');
    })
    $('.sidebar_menu_close').on('click', function () {
        $('body').removeClass('menu-open');
    })

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav, #fullscreen-menu').onePageNav({
            currentClass: 'current_page_item',
            scrollSpeed: 1500,
            easing: 'easeInOutQuart'
        });
    }

    // Parallax active js
    if ($.fn.jarallax) {
        $('.parallax').jarallax({
            speed: 0.2
        });
    }
    
    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }

    // Gallery Menu Style Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn.btn-md').removeClass('active');
        $(this).addClass('active');
    })

    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Rain Drops Active Code
    if ($.fn.raindrops) {
        $('#special-raindrops').raindrops({
            color: '#f6f6f6',
            canvasHeight: 100
        });
        $('#about-raindrops, #cta-raindrops, #skill-raindrops, #tes-raindrops, #twitter-raindrops').raindrops({
            color: '#ffffff',
            canvasHeight: 100
        });
        $('#service-raindrops, #work-raindrops, #price-raindrops, #blog-raindrops').raindrops({
            color: '#009688',
            canvasHeight: 100
        });
        $('#advisor-raindrops').raindrops({
            color: '#000000',
            canvasHeight: 100
        });
    }
    // Barfiller Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
    }


    // Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.gallery_full_width_images_area').imagesLoaded(function () {
            // Filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // Init Isotope
            var $grid = $('.gallery_full_width_images_area').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true
            });
        });
    }

    // YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    var $window = $(window);

    // Fullscreen Active Code    
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });
    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // Sticky Active Code
    $window.on('scroll', function () {
        // Fadeout text code
        $(".welcome_fade_text").css("opacity", 1 - $(window).scrollTop() / $('.welcome_fade_text').height());        
        
        if ($window.scrollTop() > 90) {
            $('.main_header_area').addClass('sticky fadeIn');
            $('body').addClass('mobile_menu_on fullmenu-on');
        } else {
            $('.main_header_area').removeClass('sticky fadeIn');
            $('body').removeClass('mobile_menu_on fullmenu-on');
        }
    });

    // Preloader active code
    $window.on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);