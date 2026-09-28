(function ($) {
    "use strict";

    /*--
       wow Animation
   -----------------------------------*/
    $(window).on('load', function () {
        wowAnimation();
    });

    /*--
        preloader
    -----------------------------------*/
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    });


    /*--
       Offcanvas/Collapsible Menu
    -----------------------------------*/
    function offCanvasMenu(selector) {
        var $offCanvasNav = $(selector);

        $offCanvasNav.find('.menu-expand').on('click', function (e) {
            e.preventDefault();

            var $parent = $(this).parent().parent();

            if ($parent.hasClass('active')) {
                // If already open, close it and its children
                $parent.removeClass('active');
                $parent.find('.sub-menu, .mega-menu, .children').each(function () {
                    $(this).parent().removeClass('active');
                    $(this).slideUp(200);
                });
            } else {
                // Open this item
                $parent.addClass('active');
                $(this).parent().next().slideDown(200);

                // Close all sibling items
                $parent.siblings().removeClass('active').each(function () {
                    $(this).find('.sub-menu, .mega-menu, .children').each(function () {
                        $(this).parent().removeClass('active');
                        $(this).slideUp(200);
                    });
                });
            }
        });
    }
    $(document).ready(function () {
        // Initialize
        offCanvasMenu('.navbar-mobile-menu');
    });


    /*--
        Hero Slider
    -----------------------------------*/
    var swiperHero = new Swiper(".hero-swiper", {
        loop: true,

        // Autoplay
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },

        // Pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /*--
        Our Featured Products Slider
    -----------------------------------*/
    var ourFeatureSwiper = new Swiper(".our-featured-products-swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".our-featured-products-section .swiper-button-next",
            prevEl: ".our-featured-products-section .swiper-button-prev",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            470: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        },
    })


    /*--
        Tab Product Slider
    -----------------------------------*/
    var tabProductSwiper = new Swiper(".tab-product-swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3800,
            disableOnInteraction: false,
        },

        // Navigation arrows
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        },
    })


    /*--
        Today's Flash Sale Slider
    -----------------------------------*/
    var todayFlashSaleSwiper = new Swiper(".today-flash-sale-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    })

    /*--
        Category Slider
    -----------------------------------*/
    var categorySwiper = new Swiper(".category-swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // Navigation arrows
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
            1600: {
                slidesPerView: 4
            },
        },
    })

    /*--
        Testimonial Slider
    -----------------------------------*/
    var testimonialSwiper = new Swiper(".testimonial-swiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".testimonial-wrapper .swiper-button-next",
            prevEl: ".testimonial-wrapper .swiper-button-prev",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            1200: {
                slidesPerView: 2
            },
            1600: {
                slidesPerView: 2
            },
        },
    })


    /*--
        Price Range Slider
    -----------------------------------*/
    const priceRange = (selector) => {
        const $priceRange = $(selector);

        if ($priceRange.length) {
            const $rangeInput = $(".filter-range-input input");
            const $priceInput = $(".filter-price-value input");
            const $range = $(".filter-slider .filter-progress");
            let priceGap = 10;

            // Set initial slider progress on page load
            $(window).on("load", function () {
                let minVal = parseInt($rangeInput.eq(0).val());
                let maxVal = parseInt($rangeInput.eq(1).val());

                $range.css({
                    left: (minVal / $rangeInput.eq(0).attr("max")) * 100 + "%",
                    right: 100 - (maxVal / $rangeInput.eq(1).attr("max")) * 100 + "%"
                });
            });

            // Handle price input field changes
            $priceInput.on("input", function (e) {
                let minPrice = parseInt($priceInput.eq(0).val());
                let maxPrice = parseInt($priceInput.eq(1).val());

                if (maxPrice - minPrice >= priceGap && maxPrice <= parseInt($rangeInput.eq(1).attr("max"))) {
                    if ($(this).hasClass("input-min")) {
                        $rangeInput.eq(0).val(minPrice);
                        $range.css("left", (minPrice / $rangeInput.eq(0).attr("max")) * 100 + "%");
                    } else {
                        $rangeInput.eq(1).val(maxPrice);
                        $range.css("right", 100 - (maxPrice / $rangeInput.eq(1).attr("max")) * 100 + "%");
                    }
                }
            });

            // Handle range slider changes
            $rangeInput.on("input", function () {
                let minVal = parseInt($rangeInput.eq(0).val());
                let maxVal = parseInt($rangeInput.eq(1).val());

                if (maxVal - minVal < priceGap) {
                    if ($(this).hasClass("range-min")) {
                        $rangeInput.eq(0).val(maxVal - priceGap);
                    } else {
                        $rangeInput.eq(1).val(minVal + priceGap);
                    }
                } else {
                    $priceInput.eq(0).val("$" + minVal);
                    $priceInput.eq(1).val("$" + maxVal);

                    $range.css({
                        left: (minVal / $rangeInput.eq(0).attr("max")) * 100 + "%",
                        right: 100 - (maxVal / $rangeInput.eq(1).attr("max")) * 100 + "%"
                    });
                }
            });
        }
    };
    $(document).ready(function () {
        // Initialize
        priceRange(".price-range-filter");
    });


    /*--
        Explore Similar Product Slider
    -----------------------------------*/
    var exploreProductSwiper = new Swiper(".explore-similar-product-swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        // Navigation arrows
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        },
    })

    /*--
        Recently Viewed Products Slider
    -----------------------------------*/
    var recentlySwiper = new Swiper(".recently-viewed-products-swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3200,
            disableOnInteraction: false,
        },

        // Navigation arrows
        navigation: {
            nextEl: ".recently-viewed-section .swiper-button-next",
            prevEl: ".recently-viewed-section .swiper-button-prev",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            470: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        },
    })


    /*--
        Product Single
    -----------------------------------*/

    var galleryThumbs = new Swiper(".swiper-single-thumb-slide", {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,

        // Navigation arrows
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        // Breakpoints
        breakpoints: {
            768: {
                direction: "vertical",
                slidesPerView: 3
            }
        }
    });

    var galleryTop = new Swiper(".swiper-single-slide", {
        zoom: true,
        direction: "horizontal",
        spaceBetween: 10,

        a11y: {
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
        },
        keyboard: {
            enabled: true,
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });


    /*--
        Explore Similar Product Slider
    -----------------------------------*/
    var addonProductSwiper = new Swiper(".addon-product-swiper", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,

        // Autoplay
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },

        // Navigation arrows
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        // Breakpoints
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1600: {
                slidesPerView: 4
            },
        },
    })


    /*--
        G Light Box
    -----------------------------------*/
    const lightboxVideo = GLightbox({
        selector: ".glightbox",
    })

    /*--
        G Light Box
    -----------------------------------*/
    const productLightbox = GLightbox({
        selector: ".product-glightbox-img",
    })


    /*--
    aos animation
    -------------------------------------------*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        // Initialize
        wow.init();
    }


    /*--
        Automatic Pop-Up
    -----------------------------------*/
    function AutoPopup(selector) {
        var $popup = $(selector);
        var $popupOverlay = $(".popup-modal-overlay");
        var $popupClose = $(".popup-close-btn");

        if ($popup.length) {
            setTimeout(function () {
                $popup.addClass("open").removeClass("close");
                $popupOverlay.addClass("open").removeClass("close");
            }, 1000);

            // Close popup when either close button or overlay is clicked
            $popupClose.add($popupOverlay).on("click", function () {
                $popup.removeClass("open").addClass("close");
                $popupOverlay.removeClass("open").addClass("close");
            });
        }
    }
    $(document).ready(function () {
        // Initialize
        AutoPopup(".popup-modal");
    });

    /*--
       Flash Sale
   -----------------------------------*/
    $(document).ready(function () {
        function startCountdown() {
            var countdownElement = $('.flash-sale');
            var endTimeStr = countdownElement.data('countdown'); // read date from attribute
            var endTime = new Date(endTimeStr).getTime();

            function updateCountdown() {
                var now = new Date().getTime();
                var distance = endTime - now;

                if (distance <= 0) {
                    countdownElement.html("Flash Sale Ended!");
                    clearInterval(timer);
                    return;
                }

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                countdownElement.find('.days').text(days);
                countdownElement.find('.hours').text(hours);
                countdownElement.find('.minutes').text(minutes);
                countdownElement.find('.seconds').text(seconds);
            }

            updateCountdown(); // run once immediately
            var timer = setInterval(updateCountdown, 1000); // update every second
        }
        $(document).ready(function () {
            // Initialize
            startCountdown();
        });
    });

    /*--
           Payment Method
       -----------------------------------*/
    $(document).ready(function () {
        // Hide all content sections initially, except the one that's checked by default
        $(".payment-option-content").hide();
        var checkedId = $("input[name='payment']:checked").attr("id");
        $("." + checkedId).show();

        // On change event for payment method radio buttons
        $("input[name='payment']").on("change", function () {
            // Hide all content
            $(".payment-option-content").hide();

            // Get the selected radio button ID
            var selectedId = $(this).attr("id");

            // Show the matching content section
            $("." + selectedId).fadeIn();
        });
    });

}(jQuery));