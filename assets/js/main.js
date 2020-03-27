$(document).ready(function(){

  $('.flowing-scroll').on( 'click', function(){ 
      var el = $(this);
      var dest = el.attr('href'); 
      if(dest !== undefined && dest !== '') { 
          $('html').animate({ 
              scrollTop: $(dest).offset().top 
          }, 1000 
          );
      }
      return false;
  });
// Create Countdown
var Countdown = {
  // Backbone-like structure
  $el: $(".countdown"),

  // Params
  countdown_interval: null,
  total_seconds: 0,

  // Initialize the countdown
  init: function() {
   
    // (year, month, day, hours, mins, sec)
    var startDate = new Date(2020, 3, 27, 00, 00, 0);

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
 
  function DeadLine(){
    if(dDays <= 0 && dHours <= 0 && dMinutes <= 0){
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
        if(that.values.days >= 0 && that.values.hours < 0) {
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

        TweenMax.set($top, { rotationX: 0 });
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

var Countdown1 = {
  // Backbone-like structure
  $el: $(".countdown1"),

  // Params
  countdown_interval: null,
  total_seconds: 0,

  // Initialize the countdown
  init: function() {
   // (year, month, day, hours, mins, sec)
    var startDate = new Date(2020, 3, 27, 00, 00, 0);

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
  console.log(dDays)
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
        if(that.values.days >= 0 && that.values.hours < 0) {
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

        TweenMax.set($top, { rotationX: 0 });
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


  $('.screen-slider').on('init reInit',function(event,slick){
    var amount = slick.slideCount;
    $('#range').attr('max', amount);
  })
  
  $('.screen-slider').on('afterChange',function(e,slick,currentSlide){
    $('#range').val(currentSlide + 1);
  })
  
  $('#range').on('input change',function(){
    $('.screen-slider').slick('slickGoTo', this.value - 1);
  });

  $('.slick-thumbs').on('init reInit',function(event,slick){
   var amount = slick.slideCount;
    //var amount = 6;
    $('#range1').attr('max', amount);
  })
  
  $('.slick-thumbs').on('afterChange',function(e,slick,currentSlide){
    $('#range1').val(currentSlide + 1);
  })
  
  $('#range1').on('input change',function(){
    $('.slick-thumbs').slick('slickGoTo', this.value - 1);
  });
  
  
 
  var $carousel = $('.screen-slider');
  $carousel
  .slick({
    arrows:true,
    dots:false,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 5,
    responsive: [
      {
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

    $('.screen-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.slick-slide').removeClass('slick-active-first slick-active-last');
      $('.slick-active').eq(1).addClass('slick-active-first');
      $('.slick-active').eq(3).addClass('slick-active-last');
      
    }).trigger('afterChange');
 

//market
 
$('#slick-thumbs').slickFilterable({
  filterName: 'filter-heading', 
  filterName1: 'filter-head', 
  filter: function( category, slider, settings ) {
    return $(this).hasClass( category );
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
    responsive: [
      {
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

var $viewBtn = $('.view-all');
$viewBtn.on('click', function(){
  $('#slick-thumbs').slick('unslick');

});

$('.filter-nav').on('click', function(){
  if($viewBtn.hasClass('hideall')){
    console.log(777)
    $('.view-all').removeClass('d-none');
    $('.filter-range').removeClass('d-none');
    $('.view-all').text('view all listings');
  }
  else {

  }
});

$('#slick-thumbs').on('destroy', function(){
 console.log('distroy');
 $('.view-all').addClass('d-none');
 $('.view-all').text('hide all listings');
 $('.filter-range').addClass('d-none');
 $('.slick-thumbs').addClass('unslicked');
  
});

$('#slick-thumbs').on('init', function(){
  console.log('init');
  $('.view-all').removeClass('d-none');
  $('.view-all').text('view all listings');
  $('.filter-range').removeClass('d-none');
  $('.slick-thumbs').removeClass('unslicked');
   
   
 });



//globe
//
// Configuration
//
// ms to wait after dragging before auto-rotating
var rotationDelay = 3000
// scale of the globe (not the canvas element)
var scaleFactor = 0.9
// autorotation speed
var degPerSec = 6
// start angles
var angles = { x: -20, y: 40, z: 0}
// colors
var colorWater = '#fff'
var colorLand = '#f2f2f2'
var colorGraticule = '#5b8eb524'
var colorCountry = '#5b8eb5'


//
// Handler
//

function enter(country) {
  var country = countryList.find(function(c) {
    return c.id === country.id
  })
  current.text(country && country.name || '');
  number.text(country.id)
  city.text(country.city)
  console.log(country.id)
  console.log(country.name)
  console.log(country.city)
}

function leave(country) {
  //  current.text('Choose a country')
}

//
// Variables
//

var current = d3.select('.current .country')
var number = d3.select('.current .amount')
var city = d3.select('.current .city')
var canvas = d3.select('#globe')
var context = canvas.node().getContext('2d')
var water = {type: 'Sphere'}
var projection = d3.geoOrthographic().scale(width / 2.1).translate([width / 2, height / 2]).precision(0.1)

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

//
// Functions
//

function setAngles() {
  var rotation = projection.rotate()
  rotation[0] = angles.y
  rotation[1] = angles.x
  rotation[2] = angles.z
  projection.rotate(rotation)
}

function scale() {
  if(screen.width < 768){
    width = document.documentElement.clientWidth / 1.1
    height = document.documentElement.clientHeight / 1.3
  canvas.attr('width', width).attr('height', height)
  projection
    .scale((scaleFactor * Math.min(width, height)) / 2)
    .translate([width / 2, height / 2])
  render();
  } else {
    console.log("width");
    width = document.documentElement.clientWidth / 2
    height = document.documentElement.clientHeight
    canvas.attr('width', width).attr('height', height)
    projection
      .scale((scaleFactor * Math.min(width, height)) / 2)
      .translate([width / 2, height / 2])
    render();
  }

}

function startRotation(delay) {
  autorotate.restart(rotate, delay || 0)
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
  startRotation(rotationDelay)
}

function render() {
  context.clearRect(0, 0, width, height)
  fill(water, colorWater)
  stroke(graticule, colorGraticule)
  fill(land, colorLand)
  if (currentCountry) {
    fill(currentCountry, colorCountry);
   
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
        city = [[]];
    }


    var point = { 
      type: "MultiPoint", 
      coordinates: city 
    }; 
    
      /* fill markers */ 
      context.beginPath();
      path(point);
      context.fillStyle = '#44719b';
      context.fill();
    
  }
}

/* coordinates - longitude and latitude */
var cities = [
    [-71.0597700, 42.3584300],
    [-74.0059700, 40.7142700],
    [16.3720800, 48.2084900],
    [-0.1257400, 51.5085300],
    [30.5238000, 50.4546600]
];

var points = { 
  type: "MultiPoint", 
  coordinates: cities 
}; 


function fill(obj, color) {
  context.beginPath()
  path(obj)
  context.fillStyle = color
  context.fill()
  
  /* fill markers */ 
  context.beginPath();
  path(points);
  context.fillStyle = '#d6d6d6';
  context.fill();
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
    projection.rotate(rotation)
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
  var x = point[0], y = point[1]
  var x0 = p[0], y0 = p[1]
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


$('.current').click(function(e){
  $(this).toggleClass('current-active');
});

$('.js-toggle-menu').click(function(e){
  e.preventDefault();
  $('.mobile-header-nav').slideToggle();
  $(this).toggleClass('open');
});

});
 
/////preglobe


//////





(function( $ ) {
  $.fn.slickFilterable = function( options ) {

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
          filter: function( element, category, slider, settings ) { return true; },
      }, options );

      return this.each(function() {
          var slider = $(this),
              slides = slider.find( settings.slideSelector ),
              slickObj;

          /**
           * Create Slick
           *
           * TIP: you should you 'slidesPerRow' instead 'slidesToShow' in grid mode (with rows)
           * to avoid slick break layout when there are less slides than on "page".
           */
          slickObj = slider.slick( settings.slick );

          // Handle Filter Click
          $('[data-' + settings.filterName + ']').on('click', function(event) {
              event.preventDefault();

              var category = $(this).data(settings.filterName),
                  newSlides = $.extend(true, {}, slides),
                  newSlickOptions;

              if ( ! category ) return;

              // Before Filter Slides
              if ( typeof settings.beforeFilter == 'function' ) {
                  settings.beforeFilter.call(this, category, slider, slides);
              }

              // Destroy and empty
              slider.slick('unslick');

              // Recreate All Slides
              if ( category === 'all' ) {
                  slider.find( settings.slideSelector ).remove();
                  slider.append( newSlides );
                  slider.slick( settings.slick );

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
              if ( typeof settings.filter !== 'function' ) {
                  newSlides = newSlides.filter( settings.filter );
              } else {
                  newSlides = newSlides.filter( function() {
                      return settings.filter.call( this, category, slider, $.extend( true, {}, settings ) );
                  } );
              }

              slider.find( settings.slideSelector ).remove();
              slider.append( newSlides );
              slider.slick( settings.slick );
          });
          $('[data-' + settings.filterName1 + ']').on('click', function(event) {
            event.preventDefault();

            var category = $(this).data(settings.filterName1),
                newSlides = $.extend(true, {}, slides),
                newSlickOptions;

            if ( ! category ) return;

            // Before Filter Slides
            if ( typeof settings.beforeFilter == 'function' ) {
                settings.beforeFilter.call(this, category, slider, slides);
            }

            // Destroy and empty
            slider.slick('unslick');

            // Recreate All Slides
            if ( category === 'all' ) {
                slider.find( settings.slideSelector ).remove();
                slider.append( newSlides );
                slider.slick( settings.slick );

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
            if ( typeof settings.filter !== 'function' ) {
                newSlides = newSlides.filter( settings.filter );
            } else {
                newSlides = newSlides.filter( function() {
                    return settings.filter.call( this, category, slider, $.extend( true, {}, settings ) );
                } );
            }

            slider.find( settings.slideSelector ).remove();
            slider.append( newSlides );
            slider.slick( settings.slick );
        });
      });
  };
}(jQuery));