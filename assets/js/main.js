$(document).ready(function() {

    $('.flowing-scroll').on('click', function() {
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') {
            $('html').animate({
                scrollTop: $(dest).offset().top
            }, 1000);
        }
        return false;
    });
    const deadLine = new Date(2020, 4, 10, 00, 00, 0);
    const Countdown = {

        $el: $(".countdown"),
        countdown_interval: null,
        total_seconds: 0,

        // Initialize the countdown
        init: function() {

            // (year, month, day, hours, mins, sec)
            var startDate = deadLine;

            var second = 1000;
            var minute = second * 60;
            var hour = minute * 60;
            var day = hour * 24;

            var now = new Date().getTime();
            var diffrence = startDate - now;
            var dDays = Math.floor(diffrence / day);
            var dHours = Math.floor((diffrence % day) / hour);
            var dMinutes = Math.floor((diffrence % hour) / minute);
            var dSeconds = Math.floor((diffrence % minute) / second);
            // DOM
            this.$ = {
                days: this.$el.find(".bloc-time.days .figure"),
                hours: this.$el.find(".bloc-time.hours .figure"),
                minutes: this.$el.find(".bloc-time.min .figure"),
                seconds: this.$el.find(".bloc-time.sec .figure")
            };
            console.log(this.$el.length)
                // Init countdown values
            this.values = {
                days: dDays,
                hours: dHours,
                minutes: dMinutes,
                seconds: dSeconds
            };

            function DeadLine() {
                if (dDays <= 0 && dHours <= 0 && dMinutes <= 0) {
                    $('.countdown').addClass('d-none');
                    $('.main-header_text').addClass('d-none');
                    $('.description').addClass('countless');
                    $('.register-btn').removeClass('d-none');
                    $('.top-nav_btn').removeClass('d-none');
                }
            }
            DeadLine();
            // Initialize total seconds
            this.total_seconds = diffrence
                // Animate countdown to the end
            this.count();
        },

        count: function() {
            var that = this,
                $day_1 = this.$.days.eq(0),
                $day_2 = this.$.days.eq(1),
                $hour_1 = this.$.hours.eq(0),
                $hour_2 = this.$.hours.eq(1),
                $min_1 = this.$.minutes.eq(0),
                $min_2 = this.$.minutes.eq(1),
                $sec_1 = this.$.seconds.eq(0),
                $sec_2 = this.$.seconds.eq(1);
            timerFunction();

            function timerFunction() {
                if (that.total_seconds > 0) {
                    --that.values.seconds;

                    if (that.values.minutes >= 0 && that.values.seconds < 0) {
                        that.values.seconds = 59;
                        --that.values.minutes;
                    }

                    if (that.values.hours >= 0 && that.values.minutes < 0) {
                        that.values.minutes = 59;
                        --that.values.hours;
                    }
                    if (that.values.days >= 0 && that.values.hours < 0) {
                        that.values.hours = 23;
                        --that.values.days;
                    }

                    // Update DOM values
                    that.checkHour(that.values.days, $day_1, $day_2);
                    // Hours
                    that.checkHour(that.values.hours, $hour_1, $hour_2);

                    // Minutes
                    that.checkHour(that.values.minutes, $min_1, $min_2);

                    // Seconds
                    that.checkHour(that.values.seconds, $sec_1, $sec_2);

                    --that.total_seconds;
                } else {
                    clearInterval(that.countdown_interval);
                }
            }
            this.countdown_interval = setInterval(timerFunction, 1000);
        },

        animateFigure: function($el, value) {
            var that = this,
                $top = $el.find(".top"),
                $bottom = $el.find(".bottom"),
                $back_top = $el.find(".top-back"),
                $back_bottom = $el.find(".bottom-back");

            // Before we begin, change the back value
            $back_top.find("span").html(value);

            // Also change the back bottom value
            $back_bottom.find("span").html(value);

            // Then animate
            TweenMax.to($top, 0.8, {
                rotationX: "-180deg",
                transformPerspective: 300,
                ease: Quart.easeOut,
                onComplete: function() {
                    $top.html(value);

                    $bottom.html(value);

                    TweenMax.set($top, {
                        rotationX: 0
                    });
                }
            });

            TweenMax.to($back_top, 0.8, {
                rotationX: 0,
                transformPerspective: 300,
                ease: Quart.easeOut,
                clearProps: "all"
            });
        },

        checkHour: function(value, $el_1, $el_2) {
            var val_1 = value.toString().charAt(0),
                val_2 = value.toString().charAt(1),
                fig_1_value = $el_1.find(".top").html(),
                fig_2_value = $el_2.find(".top").html();

            if (value >= 10) {
                // Animate only if the figure has changed
                if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
                if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
            } else {
                // If we are under 10, replace first figure with 0
                if (fig_1_value !== "0") this.animateFigure($el_1, 0);
                if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
            }
        }
    };

    Countdown.init();

    const Countdown1 = {
        // Backbone-like structure
        $el: $(".countdown1"),
        countdown_interval: null,
        total_seconds: 0,

        init: function() {
            // (year, month, day, hours, mins, sec)
            var startDate = deadLine;

            var second = 1000;
            var minute = second * 60;
            var hour = minute * 60;
            var day = hour * 24;

            var now = new Date().getTime();
            var diffrence = startDate - now;
            var dDays = Math.floor(diffrence / day);
            var dHours = Math.floor((diffrence % day) / hour);
            var dMinutes = Math.floor((diffrence % hour) / minute);
            var dSeconds = Math.floor((diffrence % minute) / second);
            // DOM
            this.$ = {
                days: this.$el.find(".bloc-time.days .figure"),
                hours: this.$el.find(".bloc-time.hours .figure"),
                minutes: this.$el.find(".bloc-time.min .figure"),
                seconds: this.$el.find(".bloc-time.sec .figure")
            };
            // Init countdown values
            this.values = {
                days: dDays,
                hours: dHours,
                minutes: dMinutes,
                seconds: dSeconds
            };
            this.total_seconds = diffrence
            this.count();
        },

        count: function() {
            var that = this,
                $day_1 = this.$.days.eq(0),
                $day_2 = this.$.days.eq(1),
                $hour_1 = this.$.hours.eq(0),
                $hour_2 = this.$.hours.eq(1),
                $min_1 = this.$.minutes.eq(0),
                $min_2 = this.$.minutes.eq(1),
                $sec_1 = this.$.seconds.eq(0),
                $sec_2 = this.$.seconds.eq(1);
            timerFunction();

            function timerFunction() {
                if (that.total_seconds > 0) {
                    --that.values.seconds;

                    if (that.values.minutes >= 0 && that.values.seconds < 0) {
                        that.values.seconds = 59;
                        --that.values.minutes;
                    }

                    if (that.values.hours >= 0 && that.values.minutes < 0) {
                        that.values.minutes = 59;
                        --that.values.hours;
                    }
                    if (that.values.days >= 0 && that.values.hours < 0) {
                        that.values.hours = 23;
                        --that.values.days;
                    }
                    that.checkHour(that.values.days, $day_1, $day_2);
                    // Hours
                    that.checkHour(that.values.hours, $hour_1, $hour_2);

                    // Minutes
                    that.checkHour(that.values.minutes, $min_1, $min_2);

                    // Seconds
                    that.checkHour(that.values.seconds, $sec_1, $sec_2);

                    --that.total_seconds;
                } else {
                    clearInterval(that.countdown_interval);
                }
            }
            this.countdown_interval = setInterval(timerFunction, 1000);
        },

        animateFigure: function($el, value) {
            var that = this,
                $top = $el.find(".top"),
                $bottom = $el.find(".bottom"),
                $back_top = $el.find(".top-back"),
                $back_bottom = $el.find(".bottom-back");
            $back_top.find("span").html(value);

            $back_bottom.find("span").html(value);
            TweenMax.to($top, 0.8, {
                rotationX: "-180deg",
                transformPerspective: 300,
                ease: Quart.easeOut,
                onComplete: function() {
                    $top.html(value);

                    $bottom.html(value);

                    TweenMax.set($top, {
                        rotationX: 0
                    });
                }
            });

            TweenMax.to($back_top, 0.8, {
                rotationX: 0,
                transformPerspective: 300,
                ease: Quart.easeOut,
                clearProps: "all"
            });
        },

        checkHour: function(value, $el_1, $el_2) {
            var val_1 = value.toString().charAt(0),
                val_2 = value.toString().charAt(1),
                fig_1_value = $el_1.find(".top").html(),
                fig_2_value = $el_2.find(".top").html();

            if (value >= 10) {
                // Animate only if the figure has changed
                if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
                if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
            } else {
                // If we are under 10, replace first figure with 0
                if (fig_1_value !== "0") this.animateFigure($el_1, 0);
                if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
            }
        }
    };

    Countdown1.init();

    $('.screen-slider').on('init reInit', function(event, slick) {
        let amount = slick.slideCount;
        $('#range').attr('max', amount);
    })

    $('.screen-slider').on('afterChange', function(e, slick, currentSlide) {
        $('#range').val(currentSlide + 1);
    })

    $('#range').on('input change', function() {
        $('.screen-slider').slick('slickGoTo', this.value - 1);
    });

    $('.slick-thumbs').on('init reInit', function(event, slick) {
        let amount = slick.slideCount;
        $('#range1').attr('max', amount);
    })

    $('.slick-thumbs').on('afterChange', function(e, slick, currentSlide) {
        $('#range1').val(currentSlide + 1);
    })

    $('#range1').on('input change', function() {
        $('.slick-thumbs').slick('slickGoTo', this.value - 1);
    });

    $('.navbar-toggle').on('click', function(e) {
        e.preventDefault();
        $('#navbar-header').slideToggle();
    })
  
    let $carousel = $('.screen-slider');
    $carousel
        .slick({
            arrows: true,
            dots: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 5,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: false,
                        slidesToShow: 1
                    }
                }
            ]
        })
        .magnificPopup({
            type: 'image',
            delegate: 'a:not(.slick-cloned)',
            gallery: {
                enabled: true
            },
            callbacks: {
                open: function() {
                    var current = $carousel.slick('slickCurrentSlide');
                    $carousel.magnificPopup('goTo', current);
                },
                beforeClose: function() {
                    $carousel.slick('slickGoTo', parseInt(this.index));
                }
            }
        });
    // On before slide change

    $('.screen-slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-slide').removeClass('slick-active-first slick-active-last');
        $('.slick-active').eq(1).addClass('slick-active-first');
        $('.slick-active').eq(3).addClass('slick-active-last');

    }).trigger('afterChange');


    //market
    const MarketSlide = () => {
        $('#slick-thumbs').slickFilterable({
            filterName: 'filter-heading',
            filter: function(category, slider, settings) {
                return $(this).hasClass(category);
            },
            slick: {
                rows: 2,
                centerMode: true,
                centerPadding: '40px',
                infinite: false,
                dots: false,
                arrows: true,
                slidesPerRow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesPerRow: 2,
                            slidesToScroll: 1,
                            rows: 2
                        }
                    },
                    {
                        breakpoint: 490,
                        settings: {

                            slidesPerRow: 1,
                            slidesToScroll: 1,
                            rows: 2
                        }
                    }
                ]
            }
        });
    }
    MarketSlide();

    let $viewBtn = $('.view-all');
    $viewBtn.on('click', function() {
        $('#slick-thumbs').slick('unslick');
        MoreMarketSlide();
        $viewBtn.addClass('hide-more');
        $viewBtn.removeClass('view-all');
    });
    const MoreMarketSlide = () => {
        $('#slick-thumbs').slickFilterable({
            filterName: 'filter-heading',
            filter: function(category, slider, settings) {
                return $(this).hasClass(category);
            },
            slick: {
                rows: 5,
                centerMode: true,
                centerPadding: '40px',
                infinite: false,
                dots: false,
                arrows: true,
                slidesPerRow: 3,
                slidesToScroll: 1,
                responsive: [{
                        breakpoint: 992,
                        settings: {
                            slidesPerRow: 2,
                            slidesToScroll: 1,
                            rows: 3
                        }
                    },
                    {
                        breakpoint: 490,
                        settings: {

                            slidesPerRow: 1,
                            slidesToScroll: 1,
                            rows: 2
                        }
                    }
                ]
            }
        });
    }


    $('.filter-nav').on('click', function() {
        if ($viewBtn.hasClass('hideall')) {
            $('.view-all').removeClass('d-none');
            $('.filter-range').removeClass('d-none');
            $('.view-all').text('view all listings');
        }
    });

    $('#slick-thumbs').on('destroy', function() {

        $('.view-all').addClass('d-none');
        $('.view-all').text('hide all listings');
        $('.filter-range').addClass('d-none');
        $('.slick-thumbs').addClass('unslicked');

    });

    $('#slick-thumbs').on('init', function() {

        $('.view-all').removeClass('d-none');
        $('.view-all').text('view all listings');
        $('.filter-range').removeClass('d-none');
        $('.slick-thumbs').removeClass('unslicked');
        if ($('.slick-slide .card').length < 6) {
            $('.filter-range').addClass('d-none');
            $('.view-all').addClass('d-none');
        }

    });

    $('.js-toggle-menu').click(function(e) {
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).toggleClass('open');
    });

    //globe

    var rotationDelay = 3000
        // scale of the globe (not the canvas element)
    var scaleFactor = 1
        // autorotation speed
    var degPerSec = 6
        // start angles
    var angles = {
            x: -20,
            y: 40,
            z: 0
        }
        // colors
    var colorWater = '#fff'
    var colorLand = '#f2f2f2'
    var colorGraticule = 'transparent'
    var colorCountry = '#5b8eb5'

    var colorMarker = 'transparent';
    var colorActiveMarker = '#2f587f';
    //
    // Variables
    //
    var current = d3.select('#current')
    var canvas = d3.select('#globe')
    var context = canvas.node().getContext('2d')
    var water = {
        type: 'Sphere'
    }
    var projection = d3.geoOrthographic().precision(0.1)
    var graticule = d3.geoGraticule10()
    var path = d3.geoPath(projection).context(context)
    var v0 // Mouse position in Cartesian coordinates at start of drag gesture.
    var r0 // Projection rotation as Euler angles at start.
    var q0 // Projection rotation as versor at start.
    var lastTime = d3.now()
    var degPerMs = degPerSec / 1000
    var width, height
    var land, countries
    var countryList
    var autorotate, now, diff, roation
    var currentCountry

    /* coordinates - longitude and latitude  
    Tallahassee, Moomooi, Bratislava, Zug, Lisbon, Tallinn
    */

    var cities = [
        [-84.0597700, 31.3584300],
        [27.8232200, -26.9258400],
        [17.1067400, 48.1481600],
        [8.5500000, 47.3666700],
        [-8.6109900, 39.1496100],
        [24.7535300, 59.4369600]
    ];

    // Сountry on the globe
    var USA = {
        "type": "Feature",
        "id": "840",
        "properties": {},
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [-155.54135541355413, 19.08417463450381],
                        [-155.68895688956889, 18.91661133277394],
                        [-155.93735937359372, 19.05878625545384],
                        [-155.90855908559087, 19.33805842500361],
                        [-156.07416074160741, 19.703651083323336],
                        [-156.02376023760237, 19.813667392539912],
                        [-155.8509585095851, 19.97784557706312],
                        [-155.91935919359193, 20.174182375049625],
                        [-155.8617586175862, 20.26727309823289],
                        [-155.7861578615786, 20.248654953596244],
                        [-155.4009540095401, 20.079399093263035],
                        [-155.22455224552246, 19.993078604493107],
                        [-155.06255062550625, 19.85936647482987],
                        [-154.80694806948068, 19.509006843940142],
                        [-154.8321483214832, 19.4531524100302],
                        [-155.2209522095221, 19.239890026010357],
                        [-155.54135541355413, 19.08417463450381]
                    ]
                ],
                [
                    [
                        [-156.07776077760778, 20.644713666775928],
                        [-156.4161641616416, 20.571933646832647],
                        [-156.58536585365854, 20.78350347224915],
                        [-156.70056700567005, 20.864746285209094],
                        [-156.71136711367114, 20.927370953532375],
                        [-156.61416614166143, 21.01199888369898],
                        [-156.25776257762578, 20.917215601912375],
                        [-155.9949599495995, 20.764885327612504],
                        [-156.07776077760778, 20.644713666775928]
                    ]
                ],
                [
                    [
                        [-156.75816758167582, 21.176177068222174],
                        [-156.79056790567904, 21.06954587621226],
                        [-157.3269732697327, 21.098319372468907],
                        [-157.25137251372513, 21.220183591908807],
                        [-156.75816758167582, 21.176177068222174]
                    ]
                ],
                [
                    [
                        [-157.65457654576545, 21.321737108108735],
                        [-157.70857708577086, 21.26419011559544],
                        [-157.7769777697777, 21.277730584422102],
                        [-158.12618126181263, 21.313274315092073],
                        [-158.2521825218252, 21.538384609335225],
                        [-158.29178291782918, 21.579006015815196],
                        [-158.02538025380255, 21.71779582128842],
                        [-157.94257942579426, 21.6534785943618],
                        [-157.65457654576545, 21.321737108108735]
                    ]
                ],
                [
                    [
                        [-159.34659346593466, 21.981834963408218],
                        [-159.46539465394653, 21.883666564414966],
                        [-159.80019800198002, 22.064770334971485],
                        [-159.74979749797498, 22.137550354914765],
                        [-159.5949959499595, 22.235718753908017],
                        [-159.36459364593645, 22.21540805066803],
                        [-159.34659346593466, 21.981834963408218]
                    ]
                ],
                [
                    [
                        [-67.13887138871388, 45.13772921559344],
                        [-66.9660696606966, 44.80937284654705],
                        [-68.03168031680316, 44.32530108599407],
                        [-69.06129061290612, 43.98001913091436],
                        [-70.1161011610116, 43.68382137533125],
                        [-70.64530645306452, 43.08973330556172],
                        [-70.81450814508145, 42.86462301131856],
                        [-70.82530825308253, 42.334852168475635],
                        [-70.4941049410494, 41.80508132563271],
                        [-70.080100801008, 41.77969294658274],
                        [-70.18450184501845, 42.145285604902455],
                        [-69.88569885698857, 41.923560427865965],
                        [-69.9648996489965, 41.63751802390284],
                        [-70.64170641706417, 41.47503239798297],
                        [-71.12051120511205, 41.49365054261963],
                        [-71.85851858518585, 41.319317006476425],
                        [-72.2941229412294, 41.270232806979806],
                        [-72.87732877328773, 41.22114860748317],
                        [-73.70893708937089, 40.9317210863134],
                        [-72.24012240122401, 41.11959509128326],
                        [-71.94491944919449, 40.930028527710064],
                        [-73.34533345333453, 40.63044565492031],
                        [-73.98253982539825, 40.62875309631697],
                        [-73.95373953739536, 40.75061731575687],
                        [-74.2561425614256, 40.47303770481042],
                        [-73.96093960939609, 40.427338622520466],
                        [-74.1769417694177, 39.70969377470769],
                        [-74.90774907749078, 38.93957961019163],
                        [-74.97974979749797, 39.19684851789809],
                        [-75.19935199351993, 39.24762527599805],
                        [-75.52695526955269, 39.498123949291184],
                        [-75.32175321753218, 38.959890313431615],
                        [-75.07335073350733, 38.782171660081744],
                        [-75.05535055350553, 38.40473109153871],
                        [-75.37575375753757, 38.01544261277235],
                        [-75.94095940959409, 37.21655495199964],
                        [-76.03096030960309, 37.25717635847961],
                        [-75.72135721357213, 37.93758491701908],
                        [-76.23256232562325, 38.31841060276878],
                        [-76.35136351363514, 39.149456877004795],
                        [-76.54216542165422, 38.717854433155125],
                        [-76.32976329763298, 38.08314495690563],
                        [-76.98856988569885, 38.2405529070155],
                        [-76.3009630096301, 37.917274213779095],
                        [-76.25776257762577, 36.9660562787065],
                        [-75.97335973359733, 36.896661375969884],
                        [-75.86895868958689, 36.55137942089016],
                        [-75.72855728557285, 35.55107728632095],
                        [-76.36216362163621, 34.80804405945818],
                        [-77.3989739897399, 34.51184630387509],
                        [-78.05418054180541, 33.92622102712221],
                        [-78.55458554585546, 33.86190380019559],
                        [-79.06219062190621, 33.494618583272555],
                        [-79.20259202592025, 33.157799421209475],
                        [-80.30060300603006, 32.509549476133316],
                        [-80.86580865808658, 32.03394050859703],
                        [-81.33741337413373, 31.439852438827486],
                        [-81.49221492214922, 30.73067038403137],
                        [-81.31221312213121, 30.035028798061916],
                        [-80.9810098100981, 29.180286703379252],
                        [-80.53460534605345, 28.472797207186474],
                        [-80.5310053100531, 28.03950220473348],
                        [-80.05580055800557, 26.880099561451047],
                        [-80.08820088200882, 26.206461237324916],
                        [-80.13140131401313, 25.817172758558556],
                        [-80.37980379803798, 25.20615910275569],
                        [-80.67860678606786, 25.079217207505792],
                        [-81.17181171811718, 25.201081426945706],
                        [-81.33021330213302, 25.639454105208685],
                        [-81.70821708217082, 25.869642075261837],
                        [-82.2410224102241, 26.7294618457545],
                        [-82.70542705427054, 27.494498334460573],
                        [-82.85662856628566, 27.88547937183027],
                        [-82.65142651426514, 28.55065490293974],
                        [-82.92862928629286, 29.100736449022648],
                        [-83.70983709837098, 29.936860399068664],
                        [-84.09864098640986, 30.08919067336855],
                        [-85.11025110251101, 29.63558496767557],
                        [-85.28665286652866, 29.686361725775527],
                        [-85.77265772657726, 30.15181534169183],
                        [-86.3990639906399, 30.40062145638163],
                        [-87.52947529475294, 30.27367956113173],
                        [-88.41868418684186, 30.385388428951643],
                        [-89.18189181891819, 30.31599352621504],
                        [-89.59229592295922, 30.16027813470849],
                        [-89.41229412294122, 29.89454643398537],
                        [-89.43029430294303, 29.488332369185684],
                        [-89.21789217892179, 29.290303012595828],
                        [-89.40869408694087, 29.159976000139267],
                        [-89.77949779497794, 29.307228598629152],
                        [-90.1539015390154, 29.11766203505597],
                        [-90.88110881108811, 29.148128089915943],
                        [-91.62631626316262, 29.676206374155527],
                        [-92.49752497524975, 29.552649596112303],
                        [-93.22473224732246, 29.78453012476878],
                        [-93.84753847538475, 29.713442663428836],
                        [-94.68994689946899, 29.479869576169023],
                        [-95.60075600756008, 28.738528907909597],
                        [-96.59436594365944, 28.30692646405994],
                        [-97.14157141571415, 27.829624937920315],
                        [-97.36837368373683, 27.379404349433997],
                        [-97.37917379173791, 26.690532997877867],
                        [-97.32877328773287, 26.209846354531578],
                        [-97.14157141571415, 25.869642075261837],
                        [-97.53037530375303, 25.839176020401865],
                        [-98.23958239582396, 26.05920863883503],
                        [-99.02079020790208, 26.37063942184811],
                        [-99.30159301593015, 26.83947815497109],
                        [-99.52119521195212, 27.54019741675053],
                        [-100.11160111601116, 28.110589666073423],
                        [-100.45720457204571, 28.696214942826302],
                        [-100.95760957609576, 29.380008618572433],
                        [-101.66321663216632, 29.779452448958793],
                        [-102.48042480424805, 29.76083430432213],
                        [-103.11043110431105, 28.970409436566086],
                        [-103.93843938439385, 29.269992309355857],
                        [-104.45684456844567, 29.57126774074895],
                        [-104.70524705247053, 30.121349286831858],
                        [-105.03645036450364, 30.644349895261442],
                        [-105.63045630456304, 31.08441513212776],
                        [-106.14166141661417, 31.399231032347515],
                        [-106.50886508865088, 31.754668339047242],
                        [-108.24048240482405, 31.754668339047242],
                        [-108.24048240482405, 31.341684039834234],
                        [-109.0360903609036, 31.341684039834234],
                        [-111.02331023310232, 31.334913805420896],
                        [-113.30573305733057, 32.03901818440701],
                        [-114.81414814148141, 32.5247825035633],
                        [-114.72054720547206, 32.72111930154982],
                        [-115.99135991359914, 32.61279555093657],
                        [-117.1289712897129, 32.5349378551833],
                        [-117.29457294572946, 33.04609055338956],
                        [-117.94257942579426, 33.621560478522454],
                        [-118.41058410584105, 33.741732139359016],
                        [-118.51858518585186, 34.027774543322124],
                        [-119.08019080190802, 34.078551301422095],
                        [-119.44019440194401, 34.34766811935188],
                        [-120.36900369003689, 34.44752907694847],
                        [-120.62460624606246, 34.60832214426502],
                        [-120.74340743407434, 35.156711131744586],
                        [-121.71541715417155, 36.1620909421238],
                        [-122.54702547025471, 37.55168155545938],
                        [-122.5110251102511, 37.78356208411586],
                        [-122.95382953829538, 38.1136110117656],
                        [-123.72783727837279, 38.95142752041495],
                        [-123.86463864638645, 39.76724076722098],
                        [-124.39744397443974, 40.313937196097214],
                        [-124.17784177841779, 41.14159835312657],
                        [-124.21384213842138, 41.99972556501589],
                        [-124.53424534245343, 42.76645461232529],
                        [-124.14184141841417, 43.709209754381234],
                        [-124.01944019440194, 44.61642116576719],
                        [-123.90063900639007, 45.52363257715315],
                        [-124.08064080640807, 46.86413899099209],
                        [-124.39744397443974, 47.720573644278105],
                        [-124.68544685446855, 48.184334701591055],
                        [-124.56664566645667, 48.37897894097425],
                        [-123.11943119431194, 48.04046722030783],
                        [-122.58662586625866, 47.09601951964858],
                        [-122.33822338223382, 47.36005866176838],
                        [-122.50022500225002, 48.17925702578107],
                        [-122.83862838628386, 49.0001479483971],
                        [-120.00180001800018, 49.0001479483971],
                        [-117.03177031770318, 49.0001479483971],
                        [-116.0489604896049, 49.0001479483971],
                        [-112.99972999729997, 49.0001479483971],
                        [-110.05130051300513, 49.0001479483971],
                        [-107.04887048870488, 49.0001479483971],
                        [-104.050040500405, 49.0001479483971],
                        [-100.65160651606516, 49.0001479483971],
                        [-97.22797227972279, 49.0001479483971],
                        [-95.1579515795158, 49.0001479483971],
                        [-95.15435154351543, 49.384358751353446],
                        [-94.8159481594816, 49.38943642716346],
                        [-94.63954639546395, 48.83935488108055],
                        [-94.329943299433, 48.670099020747344],
                        [-93.63153631536315, 48.6091669110274],
                        [-92.6091260912609, 48.45006640231419],
                        [-91.64071640716406, 48.140328177904436],
                        [-90.83070830708307, 48.27065519036098],
                        [-89.59949599495995, 48.01000116544786],
                        [-89.27189271892719, 48.02015651706786],
                        [-88.37908379083791, 48.30281380382429],
                        [-87.43947439474394, 47.940606262711256],
                        [-86.46026460264602, 47.553010342548234],
                        [-85.65385653856538, 47.21957629769183],
                        [-84.87624876248762, 46.899682721662074],
                        [-84.7790477904779, 46.63733613814561],
                        [-84.5450454504545, 46.53916773915235],
                        [-84.60624606246063, 46.43930678155577],
                        [-84.33624336243362, 46.40884072669577],
                        [-84.14184141841417, 46.512086801499024],
                        [-84.09144091440913, 46.27512859703255],
                        [-83.88983889838899, 46.11772064692268],
                        [-83.61623616236162, 46.11772064692268],
                        [-83.46863468634686, 45.994163868879454],
                        [-83.59463594635946, 45.81644521552958],
                        [-82.55062550625506, 45.34760648240662],
                        [-82.33822338223382, 44.44039507102066],
                        [-82.13662136621366, 43.570419948908],
                        [-82.42822428224282, 42.97971699634512],
                        [-82.89982899828998, 42.42963545026224],
                        [-83.11943119431194, 42.0792758193725],
                        [-83.1410314103141, 41.976029744569246],
                        [-83.02943029430294, 41.83216226328602],
                        [-82.6910269102691, 41.67475431317615],
                        [-82.4390243902439, 41.67475431317615],
                        [-81.27621276212761, 42.20960283182907],
                        [-80.24660246602465, 42.367010781938944],
                        [-78.93978939789397, 42.86293045271522],
                        [-78.92178921789217, 42.96448396891513],
                        [-79.01179011790117, 43.27083707611824],
                        [-79.17019170191702, 43.467173874104745],
                        [-78.72018720187201, 43.624581824214616],
                        [-77.73737737377374, 43.62965950002463],
                        [-76.81936819368194, 43.62796694142129],
                        [-76.49896498964989, 44.01894797879099],
                        [-76.37656376563766, 44.09680567454426],
                        [-75.31815318153181, 44.81614308096037],
                        [-74.86814868148682, 45.00063196872354],
                        [-73.34893348933488, 45.00740220313689],
                        [-71.50571505715057, 45.00740220313689],
                        [-71.40491404914049, 45.254515759223366],
                        [-71.08451084510845, 45.30529251732331],
                        [-70.65970659706596, 45.45931535022653],
                        [-70.30330303303033, 45.91461361452285],
                        [-70.00090000900009, 46.69319057205557],
                        [-69.23769237692376, 47.448071709141644],
                        [-68.90648906489065, 47.18572512562518],
                        [-68.23328233282332, 47.35498098595839],
                        [-67.79047790477904, 47.06555346478861],
                        [-67.79047790477904, 45.70304378910633],
                        [-67.13887138871388, 45.13772921559344]
                    ]
                ],
                [
                    [
                        [-153.0069300693007, 57.11596645137409],
                        [-154.0041400414004, 56.735140765624365],
                        [-154.51534515345153, 56.99240967333084],
                        [-154.67014670146702, 57.461248406453805],
                        [-153.7629376293763, 57.81668571315352],
                        [-153.230132301323, 57.9690159874534],
                        [-152.5641256412564, 57.90131364332014],
                        [-152.14292142921428, 57.59157541891038],
                        [-153.0069300693007, 57.11596645137409]
                    ]
                ],
                [
                    [
                        [-165.57825578255782, 59.91038070547522],
                        [-166.1938619386194, 59.75466531396869],
                        [-166.8490684906849, 59.94084676033519],
                        [-167.4538745387454, 60.21334869547165],
                        [-166.46746467464675, 60.3842971144082],
                        [-165.67545675456753, 60.292898949828256],
                        [-165.57825578255782, 59.91038070547522]
                    ]
                ],
                [
                    [
                        [-171.73071730717308, 63.78295478989888],
                        [-171.1151111511115, 63.59169566772236],
                        [-170.49230492304923, 63.694941742525614],
                        [-169.68229682296823, 63.430902600405815],
                        [-168.68868688686888, 63.29719047074259],
                        [-168.77148771487714, 63.188866720129326],
                        [-169.5310953109531, 62.977296894712836],
                        [-170.29070290702907, 63.19394439593934],
                        [-170.67230672306724, 63.37504816649586],
                        [-171.55431554315544, 63.31750117398256],
                        [-171.79191791917918, 63.40551422135583],
                        [-171.73071730717308, 63.78295478989888]
                    ]
                ],
                [
                    [
                        [-140.98640986409865, 69.71198757737089],
                        [-140.99360993609935, 66.0002065602638],
                        [-140.9972099720997, 60.30643941865493],
                        [-140.01440014400146, 60.27766592239827],
                        [-139.03879038790387, 60.000086311451824],
                        [-138.34038340383404, 59.56171363318883],
                        [-137.4511745117451, 58.90500089509602],
                        [-136.47916479164792, 59.463545234195564],
                        [-135.47475474754748, 59.788516486035334],
                        [-134.94554945549456, 59.270593553415736],
                        [-134.27234272342724, 58.860994371409376],
                        [-133.35433354333543, 58.41077378292307],
                        [-132.73152731527315, 57.693128935110295],
                        [-131.70911709117092, 56.55234443646451],
                        [-130.00630006300062, 55.91594240161167],
                        [-129.9810998109981, 55.28461804256885],
                        [-130.53550535505354, 54.80223884061921],
                        [-131.08631086310862, 55.17967940916226],
                        [-131.96831968319682, 55.49788042658868],
                        [-132.2491224912249, 56.36954810730465],
                        [-133.5379353793538, 57.17859111969737],
                        [-134.07794077940778, 58.123038820356626],
                        [-135.0391503915039, 58.187356047283245],
                        [-136.62676626766267, 58.21274442633323],
                        [-137.80037800378005, 58.50047938889968],
                        [-139.86679866798667, 59.53801781274218],
                        [-140.82440824408243, 59.72758437631536],
                        [-142.5740257402574, 60.084714241618414],
                        [-143.960039600396, 59.998393752848486],
                        [-145.92565925659255, 60.45876969295479],
                        [-147.11367113671136, 60.88529446099447],
                        [-148.2260822608226, 60.673724635577955],
                        [-148.01728017280172, 59.978083049608514],
                        [-148.57168571685716, 59.913765822681896],
                        [-149.72729727297272, 59.705581114472054],
                        [-150.60930609306092, 59.368761952408974],
                        [-151.7181171811718, 59.155499568389146],
                        [-151.85851858518586, 59.74450996234869],
                        [-151.40851408514084, 60.726193952281264],
                        [-150.34650346503466, 61.03423961808768],
                        [-150.62010620106201, 61.28473829138083],
                        [-151.89451894518945, 60.7278865108846],
                        [-152.57852578525785, 60.06101842117177],
                        [-154.01854018540186, 59.35014380777234],
                        [-153.28773287732878, 58.86437948861605],
                        [-154.23094230942309, 58.146734640803274],
                        [-155.30735307353075, 57.72698010717694],
                        [-156.30816308163082, 57.42231955857717],
                        [-156.55656556565566, 56.98056176310753],
                        [-158.1189811898119, 56.46433138909124],
                        [-158.4321843218432, 55.99380009736497],
                        [-159.60219602196022, 55.567275329325284],
                        [-160.289802898029, 55.64344046647524],
                        [-161.2222122221222, 55.364168296925456],
                        [-162.23742237422374, 55.02396401765573],
                        [-163.0690306903069, 54.6905299727993],
                        [-164.78624786247863, 54.40448756883619],
                        [-164.94104941049412, 54.57205087056606],
                        [-163.84663846638466, 55.039197045085714],
                        [-162.8710287102871, 55.34724271089213],
                        [-161.80541805418054, 55.8956316983717],
                        [-160.56340563405635, 56.007340566191615],
                        [-160.070200702007, 56.418632306801285],
                        [-158.6841868418684, 57.01610549377749],
                        [-158.4609846098461, 57.217519967574006],
                        [-157.7229772297723, 57.56957215706707],
                        [-157.550175501755, 58.32783841135979],
                        [-157.04257042570424, 58.91854136392267],
                        [-158.19458194581946, 58.61557337392624],
                        [-158.51858518585186, 58.788214351466095],
                        [-159.05859058590585, 58.42431425174972],
                        [-159.710197101971, 58.93208183274932],
                        [-159.98019980199803, 58.57325940884293],
                        [-160.35460354603546, 59.070871638222556],
                        [-161.35541355413554, 58.671427807836196],
                        [-161.96741967419675, 58.671427807836196],
                        [-162.05382053820537, 59.26720843620906],
                        [-161.87381873818737, 59.63280109452877],
                        [-162.51822518225183, 59.989930959831824],
                        [-163.81783817838178, 59.798671837655306],
                        [-164.6638466384664, 60.26751057077827],
                        [-165.34785347853477, 60.50785389245142],
                        [-165.35145351453514, 61.073168465964315],
                        [-166.1218612186122, 61.499693234004],
                        [-165.7330573305733, 62.075163159136864],
                        [-164.91944919449193, 62.63370749823643],
                        [-164.56304563045632, 63.146552755046045],
                        [-163.7530375303753, 63.2193327749893],
                        [-163.06543065430654, 63.06023226627609],
                        [-162.2590225902259, 63.54261146822573],
                        [-161.53541535415354, 63.4562909794558],
                        [-160.7722077220772, 63.76602920386556],
                        [-160.95940959409594, 64.22302002676518],
                        [-161.51741517415175, 64.40243123871839],
                        [-160.77940779407794, 64.78833460027808],
                        [-161.39141391413915, 64.77648669005477],
                        [-162.45342453424536, 64.55983918882826],
                        [-162.75942759427593, 64.33811401179177],
                        [-163.54783547835478, 64.55983918882826],
                        [-164.9590495904959, 64.44643776240501],
                        [-166.42426424264244, 64.68678108407816],
                        [-166.84546845468455, 65.08961003167117],
                        [-168.10908109081092, 65.67015763261405],
                        [-166.7050670506705, 66.08821960763707],
                        [-164.4730447304473, 66.57736904400001],
                        [-163.65223652236523, 66.57736904400001],
                        [-163.7890378903789, 66.07637169741373],
                        [-161.67941679416793, 66.11530054529037],
                        [-162.48942489424894, 66.73477699410991],
                        [-163.72063720637206, 67.1156026798596],
                        [-164.429844298443, 67.61660002644588],
                        [-165.3910539105391, 68.04312479448554],
                        [-166.76266762667626, 68.35963325330862],
                        [-166.20466204662046, 68.88263386173823],
                        [-164.429844298443, 68.91479247520151],
                        [-163.16983169831698, 69.37178329810116],
                        [-162.9322293222932, 69.85754761725745],
                        [-161.90981909819098, 70.33315658479374],
                        [-160.93420934209342, 70.44825056982033],
                        [-159.04059040590406, 70.89170092389331],
                        [-158.1189811898119, 70.82399857976002],
                        [-156.58176581765818, 71.3571545398096],
                        [-155.0661506615066, 71.14727727299645],
                        [-154.34254342543426, 70.69705668451012],
                        [-153.89973899739, 70.89000836528997],
                        [-152.21132211322114, 70.83076881417337],
                        [-152.26892268922688, 70.60058084412022],
                        [-150.7389073890739, 70.42963242518367],
                        [-149.72009720097202, 70.52949338278027],
                        [-147.6140761407614, 70.2146774825605],
                        [-145.69165691656917, 70.11989420077391],
                        [-144.9212492124921, 69.98956718831734],
                        [-143.58923589235891, 70.15205281423722],
                        [-142.07362073620737, 69.85246994144747],
                        [-140.98640986409865, 69.71198757737089]
                    ]
                ]
            ]
        }
    }
    var SouthAfrica = {
        "type": "Feature",
        "id": "710",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [16.34596345963459, -28.576583076722258],
                    [16.82476824768247, -28.082355964549308],
                    [17.217172171721728, -28.356550458289092],
                    [17.38637386373864, -28.783075226328762],
                    [17.836378363783638, -28.855855246272036],
                    [18.46638466384664, -29.045421809845223],
                    [19.00279002790029, -28.97264178990195],
                    [19.895598955989556, -28.461489091695682],
                    [19.895598955989556, -24.768326219225237],
                    [20.165601656016577, -24.917271376318453],
                    [20.759607596075966, -25.868489311391038],
                    [20.666006660066614, -26.477810408590564],
                    [20.88920889208893, -26.82817003948029],
                    [21.605616056160557, -26.72661652328037],
                    [22.106021060210622, -26.279781052000722],
                    [22.58122581225814, -25.98019817921095],
                    [22.826028260282612, -25.501204094467994],
                    [23.312033120331222, -25.26932356581151],
                    [23.733237332373335, -25.38949522664808],
                    [24.212042120421216, -25.670459954801196],
                    [25.02565025650256, -25.71954415429782],
                    [25.666456664566653, -25.485971067038008],
                    [25.767257672576733, -25.174540284024914],
                    [25.94005940059401, -24.695546199281956],
                    [26.487264872648723, -24.615995944925352],
                    [26.786067860678628, -24.240247934985646],
                    [27.12087120871209, -23.575072403876163],
                    [28.017280172801748, -22.82696150120342],
                    [29.432094320943207, -22.090698508753995],
                    [29.838898388983893, -22.10254641897732],
                    [30.321303213032138, -22.27180227931052],
                    [30.65970659706599, -22.151630618473945],
                    [31.19251192511925, -22.251491576070535],
                    [31.67131671316713, -23.659700334042768],
                    [31.93051930519306, -24.368882388838877],
                    [31.754117541175418, -25.484278508434677],
                    [31.836918369183707, -25.84310093234106],
                    [31.332913329133305, -25.660304603181203],
                    [31.044910449104492, -25.731392064521145],
                    [30.95130951309514, -26.022512144294254],
                    [30.677706777067783, -26.39826015423396],
                    [30.68490684906851, -26.743542109313687],
                    [31.282512825128265, -27.285160862379932],
                    [31.869318693186926, -27.17852967037002],
                    [32.07092070920709, -26.733386757693694],
                    [32.83052830528305, -26.741849550710356],
                    [32.57852578525785, -27.46964975014312],
                    [32.463324633246344, -28.300696024379135],
                    [32.204122041220415, -28.752609171468784],
                    [31.52011520115201, -29.256991635261727],
                    [31.325713257132577, -29.402551675148274],
                    [30.9009090090901, -29.91031925614788],
                    [30.62370623706238, -30.423164512957477],
                    [30.05490054900551, -31.14080936077025],
                    [28.92448924489247, -32.171577550199444],
                    [28.218882188821908, -32.77243585438231],
                    [27.462874628746306, -33.22773411867862],
                    [26.41886418864189, -33.61533003884165],
                    [25.911259112591125, -33.66779935554494],
                    [25.78165781657816, -33.94537896649139],
                    [25.173251732517343, -33.796433809398174],
                    [24.67644676446764, -33.98769293157469],
                    [23.59283592835928, -33.79474125079484],
                    [22.988029880298797, -33.91660547023475],
                    [22.57402574025741, -33.864136153531454],
                    [21.544415444154453, -34.258502308107815],
                    [20.68760687606877, -34.417602816821024],
                    [20.072000720007196, -34.79504338536406],
                    [19.6147961479615, -34.81873920581071],
                    [19.193591935919358, -34.46330189911099],
                    [18.855188551885533, -34.44468375447433],
                    [18.423184231842328, -33.997848283194685],
                    [18.37638376383765, -34.13663808866791],
                    [18.243182431824323, -33.867521270738116],
                    [18.25038250382505, -33.281895993985245],
                    [17.926379263792654, -32.61164278706577],
                    [18.246782467824687, -32.42884645790591],
                    [18.221582215822167, -31.662117410596508],
                    [17.566375663756645, -30.72613250295391],
                    [17.065970659706608, -29.87816064268457],
                    [17.062370623706244, -29.87646808408124],
                    [16.34596345963459, -28.576583076722258]
                ],
                [
                    [28.978489784897846, -28.955716203868626],
                    [28.542885428854305, -28.6476705380622],
                    [28.074880748807487, -28.850777570462043],
                    [27.531275312753138, -29.243451166435065],
                    [26.998469984699852, -29.87646808408124],
                    [27.75087750877509, -30.644889689993974],
                    [28.107281072810736, -30.545028732397384],
                    [28.290882908829104, -30.226827714970966],
                    [28.84888848888491, -30.069419764861088],
                    [29.018090180901822, -29.744448513021347],
                    [29.324093240932427, -29.256991635261727],
                    [28.978489784897846, -28.955716203868626]
                ]
            ]
        }
    }
    var Slovakia = {
        "type": "Feature",
        "id": "703",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [18.85158851588517, 49.49606761917336],
                    [18.909189091890937, 49.43513550945342],
                    [19.319593195931958, 49.57223275632332],
                    [19.82359823598236, 49.216795449623575],
                    [20.417604176041777, 49.43175039224674],
                    [20.88920889208893, 49.32850431744349],
                    [21.60921609216092, 49.4706792401234],
                    [22.559625596255984, 49.08646843716703],
                    [22.282422824228263, 48.825814412253905],
                    [22.084420844208438, 48.42298546466087],
                    [21.872018720187214, 48.31973938985762],
                    [20.80280802808028, 48.62439993845739],
                    [20.475204752047517, 48.563467828737444],
                    [20.237602376023773, 48.32820218287428],
                    [19.769597695976955, 48.20295284622772],
                    [19.661596615966175, 48.267270073154336],
                    [19.175591755917566, 48.111554681647775],
                    [18.77598775987761, 48.0810886267878],
                    [18.696786967869684, 47.88136671159462],
                    [17.857978579785794, 47.7578099335514],
                    [17.48717487174872, 47.867826242767975],
                    [16.979569795697955, 48.12340259187111],
                    [16.878768787687875, 48.470377105554164],
                    [16.961569615696163, 48.59731900080406],
                    [17.10197101971019, 48.81735161923724],
                    [17.54477544775449, 48.80042603320392],
                    [17.886778867788678, 48.90367210800717],
                    [17.911979119791198, 48.99676283119042],
                    [18.10638106381066, 49.04415447208372],
                    [18.171181711817127, 49.27095732493022],
                    [18.40158401584017, 49.31496384861684],
                    [18.556385563855656, 49.49437506057005],
                    [18.85158851588517, 49.49606761917336]
                ]
            ]
        }
    };
    var Switzerland = {
        "type": "Feature",
        "id": "756",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [9.595895958959602, 47.52423684629157],
                    [9.631896318963186, 47.34821075154504],
                    [9.480694806948065, 47.1027897540619],
                    [9.930699306993063, 46.919993424902046],
                    [10.441904419044192, 46.89291248724875],
                    [10.362703627036268, 46.48331330524239],
                    [9.923499234992363, 46.31405744490918],
                    [9.181891818918189, 46.44099934015908],
                    [8.9658896588966, 46.036477833962735],
                    [8.490684906849083, 46.004319220499426],
                    [8.317883178831806, 46.163419729212634],
                    [7.756277562775637, 45.824908008546245],
                    [7.273872738727391, 45.77751636765295],
                    [6.841868418684186, 45.99077875167278],
                    [6.499864998649997, 46.42915142993577],
                    [6.021060210602116, 46.27343603842921],
                    [6.0390603906039075, 46.72534918551888],
                    [6.76986769867699, 47.2872786418251],
                    [6.7374673746737415, 47.541162432324896],
                    [7.191071910719103, 47.44976426774498],
                    [7.468274682746824, 47.6207126866815],
                    [8.317883178831806, 47.61394245226818],
                    [8.523085230852303, 47.83058995349468],
                    [9.595895958959602, 47.52423684629157]
                ]
            ]
        }
    };
    var Portugal = {
        "type": "Feature",
        "id": "620",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [-9.034290342903432, 41.881246462782656],
                    [-8.670686706867059, 42.135130253282455],
                    [-8.263882638826374, 42.280690293169016],
                    [-8.011880118801173, 41.791540856806066],
                    [-7.4214742147421475, 41.791540856806066],
                    [-7.252272522725235, 41.918482752055965],
                    [-6.669066690666909, 41.882939021385994],
                    [-6.3882638826388245, 41.38194167479972],
                    [-6.85266852668525, 41.1111322982666],
                    [-6.863468634686342, 40.33086278213054],
                    [-7.0254702547025545, 40.18530274224398],
                    [-7.065070650706502, 39.711386333311026],
                    [-7.497074970749708, 39.63014352035108],
                    [-7.097470974709751, 39.02928521616822],
                    [-7.3746737467374714, 38.3725724780754],
                    [-7.02907029070289, 38.076374722492304],
                    [-7.165871658716583, 37.80387278735584],
                    [-7.536675366753656, 37.428124777416144],
                    [-7.453874538745367, 37.0980758497664],
                    [-7.8570785707856885, 36.839114383456604],
                    [-8.382683826838274, 36.97959674753315],
                    [-8.89748897488974, 36.869580438316575],
                    [-8.74628746287462, 37.65154251305596],
                    [-8.839888398883971, 38.265941286065484],
                    [-9.286292862928633, 38.35903200924875],
                    [-9.527495274952742, 38.73816513639511],
                    [-9.448294482944817, 39.39149275728127],
                    [-9.04869048690486, 39.75539285699766],
                    [-8.976689766897664, 40.159914363194005],
                    [-8.767887678876775, 40.76077266737687],
                    [-8.789487894878931, 41.18391231820986],
                    [-8.991089910899092, 41.54273474211625],
                    [-9.034290342903432, 41.881246462782656]
                ]
            ]
        }
    };
    var Estonia = {
        "type": "Feature",
        "id": "233",
        "properties": {},
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [24.312843128431297, 57.79298989270687],
                    [24.428044280442805, 58.38369284526975],
                    [24.060840608406096, 58.25675095001985],
                    [23.42723427234273, 58.61218825671959],
                    [23.340833408334078, 59.187658181852456],
                    [24.604446044460445, 59.4652377927989],
                    [25.86445864458645, 59.61079783268546],
                    [26.948069480694812, 59.44661964816227],
                    [27.981279812798135, 59.4753931444189],
                    [28.132481324813256, 59.30105960827571],
                    [27.419674196741965, 58.72389712453948],
                    [27.718477184771842, 57.79129733410356],
                    [27.286472864728665, 57.47478887528045],
                    [26.462064620646203, 57.47648143388379],
                    [25.601656016560185, 57.84715176801352],
                    [25.166051660516615, 57.97070854605674],
                    [24.312843128431297, 57.79298989270687]
                ]
            ]
        }
    };

    // Boston, New York, Wien, London, Kyiv
    var countriesCoordinates = [
        [80.05157908384906, -23.584340333124263, 4.993858218206638],
        [-15.316709362157434, 34.240618814033695, 7.569070951268936],
        [-23.310446628169704, -32.105876642307535, -0.8400760687343888],
        [14.397097073388311, -38.804452052106214, 3.5808472324015086],
        [8.31001662616264, -39.047754687139694, 7.080937583345999],
        [-30.276745276009155, -55.09035653620052, -13.939668717912847]
    ];

    var list = document.querySelectorAll('.list');
    //
    // Handler
    //

    function enter(country) {
        var country = countryList.find(function(c) {
                return c.id === country.id
            })
            // current.text(country && country.name || '');
            // number.text(country.id)
            // city.text(country.city)
    }

    function leave(country) {
        //  current.text('Choose a country')
    }

    list.forEach(country => {
        country.addEventListener('click', function(e) {
            var city = event.target.dataset.city;

            switch (city) {
                case 'Boston':
                    runRotateToCountry(USA, 0);
                    break;
                case 'CapeTown':
                    runRotateToCountry(SouthAfrica, 1);
                    break;
                case 'Bratislava':
                    runRotateToCountry(Slovakia, 2);
                    break;
                case 'Zurich':
                    runRotateToCountry(Switzerland, 3);
                    break;
                case 'Porto':
                    runRotateToCountry(Portugal, 4);
                    break;
                case 'Tallinn':
                    runRotateToCountry(Estonia, 5);
                    break;
                default:
                    console.log('Click by past =)');
            }

        });
    })
    $(".location-search").keyup(function() {

        let $location = $(".location-search").val().toLowerCase();

        if ($location == "tallahassee" || $location == 'usa' || $location == 'america') {
            $('#tab-four').prop('checked', true);
        } else if ($location == "zug" || $location == "br" ||
            $location == "lisbon" || $location == "po" || $location == "tallinn" || $location == "slovak" ||
            $location == "europe" || $location == "swiss" || $location == "portug" || $location == "e") {
            $('#tab-five').prop('checked', true);
        } else if ($location == "mooinooi" || $location == "africa") {
            $('#tab-six').prop('checked', true);
        }
        var city = $(".location-search").val().toLowerCase();

        switch (city) {
            case 'usa':
                runRotateToCountry(USA, 0);
                break;
            case 'america':
                runRotateToCountry(USA, 0);
                break;
            case 'mooinooi':
                runRotateToCountry(SouthAfrica, 1);
                break;
            case 'africa':
                runRotateToCountry(SouthAfrica, 1);
                break;
            case 'bratislava':
                runRotateToCountry(Slovakia, 2);
                break;
            case 'slov':
                runRotateToCountry(Slovakia, 2);
                break;
            case 'europe':
                runRotateToCountry(Slovakia, 2);
                break;
            case 'swis':
                runRotateToCountry(Switzerland, 3);
                break;
            case 'zug':
                runRotateToCountry(Switzerland, 3);
                break;
            case 'lisbon':
                runRotateToCountry(Portugal, 4);
                break;
            case 'portug':
                runRotateToCountry(Portugal, 4);
                break;
            case 'tallinn':
                runRotateToCountry(Estonia, 5);
                break;
            case 'estonia':
                runRotateToCountry(Estonia, 5);
                break;
            default:
                console.log('Click by past =)');


        };
    });

    $('.filter-nav_location .continent-list li input').click(function(e) {
        let cont = e.target.dataset.city;
        switch (cont) {
            case 'Tallahassee':
                $('#tab-four').prop('checked', true);
                runRotateToCountry(USA, 0);
                break;
            case 'Bratislava':
                $('#tab-five').prop('checked', true);
                runRotateToCountry(Switzerland, 3);
                break;
            case 'Mooinooi':
                $('#tab-six').prop('checked', true);
                runRotateToCountry(SouthAfrica, 1);
                break;
            default:
                console.log('nothing');
        }
        var city = e.target.text;

        switch (city) {
            case 'Tallahassee':
                runRotateToCountry(USA, 0);
                break;
            case 'Mooinooi':
                runRotateToCountry(SouthAfrica, 1);
                break;
            case 'Bratislava':
                runRotateToCountry(Slovakia, 2);
                break;
            case 'Zug':
                runRotateToCountry(Switzerland, 3);
                break;
            case 'Lisbon':
                runRotateToCountry(Portugal, 4);
                break;
            case 'Tallinn':
                runRotateToCountry(Estonia, 5);
                break;
            default:
                console.log('Click by past =)');
        }
    });

    $('.continent-clear').click(function(e) {
        e.preventDefault;
        $('.filter-nav_location .continent-list li input').prop('checked', false)
    })

    $('.search-settings-global_btn').on('click', function(e) {
        e.preventDefault();
        $('.filter-nav_location').removeClass('d-none');
        $('.overlay').removeClass('d-none');
    })
    $('.filter-close').on('click', function(e) {
        e.preventDefault();
        $('.filter-nav_location').addClass('d-none');
        $('.overlay').addClass('d-none');
    })
    $('.overlay').on('click', function(e) {
            $('.filter-nav_location').addClass('d-none');
            $(this).addClass('d-none');
        })
        //
        // Functions
        //

    function runRotateToCountry(contry, index) {
        stopRotation();
        rotateToCity(countriesCoordinates[index]);
        fillCurrentCountry(contry, index);
        // startRotation(rotationDelay);
    }


    function rotateToCity(rotation) {
        projection.rotate(rotation)
        render()
    }

    function fillCurrentCountry(country, index) {
        fill(country, colorCountry);

        var point = {
            type: "MultiPoint",
            coordinates: [cities[index]]
        };

        fillMarkers(point, colorActiveMarker);
    }


    function fillMarkers(point, color) {
        context.beginPath();
        path(point);
        context.fillStyle = color;
        context.lineWidth = 10;
        context.fill();
        context.strokeStyle = color;
        context.stroke();
        context.lineWidth = 1;
    }

    function setAngles() {
        var rotation = projection.rotate()
        rotation[0] = angles.y
        rotation[1] = angles.x
        rotation[2] = angles.z
        projection.rotate(rotation)
    }

    function scale() {
        if (screen.width < 768) {
            width = document.documentElement.clientWidth / 1.2
            height = document.documentElement.clientHeight / 1.3
            canvas.attr('width', width).attr('height', height)
            projection
                .scale((scaleFactor * Math.min(width, height)) / 2)
                .translate([width / 2, height / 2])
            render();
        } else {
            width = document.documentElement.clientWidth / 1.3
            height = document.documentElement.clientHeight * 1.35
            canvas.attr('width', width).attr('height', height)
            projection
                .scale((scaleFactor * Math.min(width, height)) / 2)
                .translate([width / 2, height / 2])
            render();
        }
    }

    function startRotation(delay) {
        // autorotate.restart(rotate, delay || 0)
    }

    function stopRotation() {
        autorotate.stop()
    }

    function dragstarted() {
        v0 = versor.cartesian(projection.invert(d3.mouse(this)))
        r0 = projection.rotate()
        q0 = versor(r0)
        stopRotation()
    }

    function dragged() {
        var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)))
        var q1 = versor.multiply(q0, versor.delta(v0, v1))
        var r1 = versor.rotation(q1)
        projection.rotate(r1)
        render()
    }

    function dragended() {
        // startRotation(rotationDelay)
    }

    function render() {
        context.clearRect(0, 0, width, height)
        fill(water, colorWater)
        stroke(graticule, colorGraticule)
        fill(land, colorLand)
        if (currentCountry) {
            fill(currentCountry, colorCountry);
            // console.log(JSON.stringify(currentCountry));

            var city = [];

            switch (+currentCountry.id) {
                case 840:
                    city = [cities[0], cities[1]];
                    break;
                case 40:
                    city = [cities[2]];
                    break;
                case 826:
                    city = [cities[3]];
                    break;
                case 804:
                    city = [cities[4]];
                    break;
                default:
                    city = [
                        []
                    ];
            }

            var point = {
                type: "MultiPoint",
                coordinates: city
            };

            fillMarkers(point, colorActiveMarker);
        }
    }


    var points = {
        type: "MultiPoint",
        coordinates: cities
    };


    function fill(obj, color) {
        context.beginPath()
        path(obj)
        context.fillStyle = color
        context.fill()

        fillMarkers(points, colorMarker);
    }

    function stroke(obj, color) {
        context.beginPath()
        path(obj)
        context.strokeStyle = color
        context.stroke()
    }

    function rotate(elapsed) {
        now = d3.now()
        diff = now - lastTime
        if (diff < elapsed) {
            rotation = projection.rotate()
            rotation[0] += diff * degPerMs
                // projection.rotate(rotation)
            render()
        }
        lastTime = now
    }

    function loadData(cb) {
        d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function(error, world) {
            if (error) throw error
            d3.tsv('https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv', function(error, countries) {
                if (error) throw error
                cb(world, countries)
            })
        })
    }

    // https://github.com/d3/d3-polygon
    function polygonContains(polygon, point) {
        var n = polygon.length
        var p = polygon[n - 1]
        var x = point[0],
            y = point[1]
        var x0 = p[0],
            y0 = p[1]
        var x1, y1
        var inside = false
        for (var i = 0; i < n; ++i) {
            p = polygon[i], x1 = p[0], y1 = p[1]
            if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
            x0 = x1, y0 = y1
        }
        return inside
    }

    function mousemove() {
        var c = getCountry(this)
        if (!c) {
            if (currentCountry) {
                leave(currentCountry)
                currentCountry = undefined
                render()
            }
            return
        }
        if (c === currentCountry) {
            return
        }
        currentCountry = c
        render()
        enter(c)
    }

    function getCountry(event) {
        var pos = projection.invert(d3.mouse(event))
        return countries.features.find(function(f) {
            return f.geometry.coordinates.find(function(c1) {
                return polygonContains(c1, pos) || c1.find(function(c2) {
                    return polygonContains(c2, pos)
                })
            })
        })
    }
    //
    // Initialization
    //

    setAngles()

    canvas
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended)
        )
        .on('mousemove', mousemove)

    loadData(function(world, cList) {
        land = topojson.feature(world, world.objects.land)
        countries = topojson.feature(world, world.objects.countries)
        countryList = cList

        window.addEventListener('resize', scale)
        scale()
        autorotate = d3.timer(rotate)
    })


    // filter

    $('.market-toggle').on('click', function(e) {
        e.preventDefault();
        $('#navbar-content').removeClass('d-none');
        $('.overlay').removeClass('d-none');
    })
    $('.filter-close').on('click', function(e) {
        e.preventDefault();
        $('#navbar-content').addClass('d-none');

    })
    $('#market .overlay').on('click', function(e) {
        $('#navbar-content').addClass('d-none');
        $(this).addClass('d-none');
    })
    $('.alphabet-list li label').on('click', function() {
        $(this).toggleClass('active')
    })
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }

});

//filtering slider

(function($) {
    $.fn.slickFilterable = function(options) {

        /**
         * A plugin to create a slick we can filter.
         *
         * If you are not using Rows you can use slickFilter
         * (check documentation) otherwise we can provide a valid filter.
         *
         * options {
         *      slideSelector    string     jQuery selector to get slides. Imetiate children by default.
         *      filterName       string     We will search for data-{filterName} clickable elements.
         *      slick            object     The slick settings. Check Slick doc.
         *      beforeFilter     function   A fuction called before filter slider. Receives the trigger element
         *                                  as this and 3 params: category (string), slider and slides (jQuery objects).
         *      filter           mix        A valid parameter to jQuery filter() function. If it's a functio we will wrap
         *                                  it and it receives the trigger element as this and 3 params: category (string),
         *                                  slider (jQuery object) and a copy of settings (extended).
         * }
         */
        var settings = $.extend({
            slideSelector: '> *',
            filterName: 'filter-slick',
            filterName1: 'filter-slick',
            slick: {},
            beforeFilter: function() {},
            filter: function(element, category, slider, settings) {
                return true;
            },
        }, options);

        return this.each(function() {
            var slider = $(this),
                slides = slider.find(settings.slideSelector),
                slickObj;

            /**
             * Create Slick
             *
             * TIP: you should you 'slidesPerRow' instead 'slidesToShow' in grid mode (with rows)
             * to avoid slick break layout when there are less slides than on "page".
             */
            slickObj = slider.slick(settings.slick);
            // Handle Filter Click
            $('[data-' + settings.filterName + ']').on('click', function(event) {

                // event.preventDefault();
                //console.log($(this).prop("checked"));
                var category = $(this).data(settings.filterName),
                    newSlides = $.extend(true, {}, slides),
                    newSlickOptions;

                if (!category) return;

                // Before Filter Slides
                if (typeof settings.beforeFilter == 'function') {
                    settings.beforeFilter.call(this, category, slider, slides);

                }

                // Destroy and empty
                slider.slick('unslick');

                // Recreate All Slides
                if (category === 'all' || !$(this).prop("checked")) {
                    // event.preventDefault();
                    //slider.find( settings.slideSelector ).remove();
                    slider.append(newSlides);
                    slider.slick(settings.slick);

                    $('.filter-category_cat input[type="radio"]').prop("checked", false)

                    return;
                }


                /**
                 * Filter Slides
                 *
                 * If settings.filter is a function we pass the category, slider and a copy of settings
                 * expecting a true or false return to pass it to jQuery.filter();
                 *
                 * If not, we just pass it directly.
                 */
                if (typeof settings.filter !== 'function') {
                    newSlides = newSlides.filter(settings.filter);

                } else {

                    newSlides = newSlides.filter(function() {

                        return settings.filter.call(this, category, slider, $.extend(true, {}, settings));
                    });
                }

                slider.find(settings.slideSelector).remove();
                slider.append(newSlides);
                slider.slick(settings.slick);
            });

        });
    };
}(jQuery));

//for market-price
function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
    }

    let displayElement = parent.getElementsByClassName("filter-category_price")[0];
    displayElement.innerHTML = "min " + slide1 + " USD - max " + slide2 + " USD";
}