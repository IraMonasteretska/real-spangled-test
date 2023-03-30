$(document).ready(function () {

    //   Space containers
    var windowWidth = $(document).width(),
        containerWidth = $('.container').width(),
        paddingContainer = ((windowWidth - containerWidth) / 2)


    $('.letstalk__descr').css('padding-left', paddingContainer);
    $('.servwelcome__descr').css('padding-left', paddingContainer);
    $('.fsect__left').css('padding-left', paddingContainer);
    $('.fsect__right').css('padding-right', paddingContainer);
    // main
    $('.homeworth__right').css('padding-right', paddingContainer);



    if ($(window).width() > 991) {
        $('.aboutsect__container1').css('padding-left', paddingContainer + 50);
        $('.fsect__right').css('padding-left', 80 + 'px');
        $('.fsect__left').css('padding-right', 90 + 'px');
    } else {
        $('.aboutsect__container1').css('padding-left', paddingContainer);
        $('.aboutsect__container1').css('padding-right', paddingContainer);
        $('.fsect__right').css('padding-left', paddingContainer);
        $('.fsect__left').css('padding-right', paddingContainer);

    }

    if ($(window).width() < 768) {
        $('.servwelcome__descr').css('padding-right', paddingContainer);
    }



    $(window).resize(function () {
        var windowWidth = $(document).width(),
            containerWidth = $('.container').width(),
            paddingContainer = ((windowWidth - containerWidth) / 2)

        $('.servwelcome__descr').css('padding-left', paddingContainer);
        $('.letstalk__descr').css('padding-left', paddingContainer);
        $('.fsect__left').css('padding-left', paddingContainer);
        $('.fsect__right').css('padding-right', paddingContainer);

        $('.homeworth__right').css('padding-right', paddingContainer);

        if ($(window).width() > 991) {
            $('.aboutsect__container1').css('padding-left', paddingContainer + 50);
            $('.fsect__right').css('padding-left', 80 + 'px');
        } else {
            $('.aboutsect__container1').css('padding-left', paddingContainer);
            $('.aboutsect__container1').css('padding-right', paddingContainer);
            $('.fsect__right').css('padding-left', paddingContainer);
            $('.fsect__left').css('padding-right', paddingContainer);
        }

        if ($(window).width() < 768) {
            $('.servwelcome__descr').css('padding-right', paddingContainer);
        }
    });





    // burger
    $('.burger').click(function () {
        $('.header__right').addClass('show');
        $('body').addClass('hidden');
    });

    $('.closemenu').click(function () {
        $('.header__right').removeClass('show');
        $('body').removeClass('hidden')
    });



    if ($('.about-welcomesect__content').length > 0) {
        // parallax
        var latestScrollPos = 0,
            requestFrame = false,
            paralaxEl = document.querySelector('.about-welcomesect__content');


        function onScroll() {
            // Save the latest scroll position so we can 
            // use it in the handler
            latestScrollPos = window.scrollY;

            // Check if we have already ran the request
            // doing it this way will limit the code
            // to only make changes when the browser is
            // actually ready compared to everytime you
            // get into the frame
            if (!requestFrame) {
                requestAnimationFrame(update);
            }

            requestFrame = true;
        }

        function update() {

            requestFrame = false;

            // Add in translatez to stop painting on scroll
            paralaxEl.style.webkitTransform = 'translateY(' + (latestScrollPos / 4) + 'px) ';


        }

        window.addEventListener('scroll', onScroll, false);
    }




    if ($('.scrlsliderwrap').length > 0) {
        var $swiperSelector = $('.swiper-container');

        $swiperSelector.each(function (index) {
            var $this = $(this);
            $this.addClass('swiper-slider-' + index);

            var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 140;
            var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
            var loop = $this.data('loop') ? $this.data('loop') : false;
            var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 4;
            var slidesTablet = $this.data('slides-tablet') ? $this.data('slides-tablet') : 3;
            var slidesMobile = $this.data('slides-mobile') ? $this.data('slides-mobile') : 2;
            var slidesMobileSmall = $this.data('slides-mobilesmall') ? $this.data('slides-mobilesmall') : 1;
            var spaceBetween = $this.data('space-between') ? $this.data('space-between') : 20;

            var swiper = new Swiper('.swiper-slider-' + index, {
                direction: 'horizontal',
                loop: loop,
                freeMode: freeMode,
                spaceBetween: spaceBetween,
                spaceBetween: 20,
                breakpoints: {
                    1500: {
                        slidesPerView: slidesDesktop
                    },
                    992: {
                        slidesPerView: slidesTablet
                    },
                    575: {
                        slidesPerView: slidesMobile
                    },
                    320: {
                        slidesPerView: slidesMobileSmall
                    }

                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    dragSize: dragSize
                }
            });
        });
    }

    // TESTIMONIALS SLIDER --------------------------- //
    if ($('.testimonials__slider').length > 0) {
        var swiper = new Swiper(".testimonials__slider", {
            slidesPerView: 3,
            speed: 800,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {

                280: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },

                992: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },

            },
        });
    }

    // Portfolio

    if ($('.portfoliodesignwrap').length > 0) {
        var $swiperSelector = $('.portfoliodesignwrap .swiper-container');

        $swiperSelector.each(function (index) {
            var $this = $(this);
            $this.addClass('swiper-slider-' + index);

            var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 140;
            var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
            var loop = $this.data('loop') ? $this.data('loop') : false;
            var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 3;
            var slidesTablet1 = $this.data('slides-tablet') ? $this.data('slides-tablet') : 2;
            var slidesMobile1 = $this.data('slides-mobile') ? $this.data('slides-mobile') : 1;
            var slidesMobileSmall1 = $this.data('slides-mobilesmall') ? $this.data('slides-mobilesmall') : 1;
            var spaceBetween = $this.data('space-between') ? $this.data('space-between') : 50;

            var swiper = new Swiper('.swiper-slider-' + index, {
                direction: 'horizontal',
                loop: loop,
                freeMode: freeMode,
                spaceBetween: spaceBetween,
                spaceBetween: 50,
                breakpoints: {
                    1200: {
                        slidesPerView: slidesDesktop
                    },
                    992: {
                        slidesPerView: slidesTablet1
                    },
                    575: {
                        slidesPerView: slidesMobile1
                    },
                    320: {
                        slidesPerView: slidesMobileSmall1
                    }

                },
                navigation: {
                    nextEl: '.swiper-button-next.blarr',
                    prevEl: '.swiper-button-prev.blarr'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    dragSize: dragSize
                }
            });
        });
    }

    // -------------------------------------------




    var swiper = new Swiper(".mySwiper", {
        // loop: true,
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,

        navigation: {
            nextEl: ".swiper-button-next.sl2",
            prevEl: ".swiper-button-prev.sl2",
        },
        breakpoints: {
            1199: {
                slidesPerView: 5,
                direction: "vertical",
            },
            992: {
                slidesPerView: 4,
                direction: "vertical",
            },
            575: {
                direction: "horizontal",
                slidesPerView: 4,
            },
            320: {
                slidesPerView: 3,
            }

        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        // loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next.sl2",
            prevEl: ".swiper-button-prev.sl2",
        },
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
    });


    if ($('[data-fancybox="gallery"]').length > 0) {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Your custom options
        });
    }

    // aftbefslwrap
    if ($('.aftbefslwrap').length > 0) {
        var $swiperSelector3 = $('.aftbefslwrap .swiper-container');

        $swiperSelector3.each(function (index) {
            var $this = $(this);
            $this.addClass('swiper-slider-' + index);

            var dragSize = $this.data('drag-size') ? $this.data('drag-size') : 140;
            var freeMode = $this.data('free-mode') ? $this.data('free-mode') : false;
            var loop = $this.data('loop') ? $this.data('loop') : false;
            var slidesDesktop = $this.data('slides-desktop') ? $this.data('slides-desktop') : 3;
            var slidesTablet3 = $this.data('slides-tablet3') ? $this.data('slides-tablet3') : 3;
            var slidesMobile3 = $this.data('slides-mobile3') ? $this.data('slides-mobile3') : 2;
            var slidesMobileSmall3 = $this.data('slides-mobilesmall3') ? $this.data('slides-mobilesmall3') : 1;
            var spaceBetween3 = $this.data('space-between3') ? $this.data('space-between3') : 25;

            var swiper3 = new Swiper('.befaft .swiper-slider-' + index, {
                direction: 'horizontal',
                loop: loop,
                freeMode: freeMode,
                spaceBetween: spaceBetween3,
                spaceBetween: 25,
                breakpoints: {
                    1500: {
                        slidesPerView: slidesDesktop
                    },
                    992: {
                        slidesPerView: slidesTablet3
                    },
                    575: {
                        slidesPerView: slidesMobile3
                    },
                    320: {
                        slidesPerView: slidesMobileSmall3
                    }

                },
                navigation: {
                    nextEl: '.swiper-button-next.sl3',
                    prevEl: '.swiper-button-prev.sl3'
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                    dragSize: dragSize
                }
            });
        });
    }




    // if ($('#scene').length > 0) {
    //     var scene = document.getElementById('scene');
    //     var parallaxInstance = new Parallax(scene);
    // }


})


