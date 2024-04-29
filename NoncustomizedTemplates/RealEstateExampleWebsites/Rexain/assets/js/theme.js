/**
 *
 * This file contains all theme JS functions
 *
 * @package 
--------------------------------------------------------------
				   Contents
--------------------------------------------------------------
 * 01 - slick slider
        - properties slider
        - project slider
        - testimonials slider
        - teams slider
        - slider 2
        - testimonials slider 2
        - projects slider 
        - teams slider 2
        - team-slider-4
        - partners slider
        - properties 3 slider
        - testimonial 3 slider
        - services 4 slider
        - properties 4 slider
        - projects 4 slider
        - testmonials 4 slider
  * 02 - Image Hover
  * 03 - Mouse Pointer


            

--------------------------------------------------------------*/

(function($) {
  "use strict";

/* ================================= */
  /*===== slick slider =====*/
/* ================================= */
// properties slider
$('.properties-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  
  speed: 1000,    
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// project slider
$('.project-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  speed: 1000,    
  centerPadding: '30px',
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
   {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// testimonials slider
$('.testimonials-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  centerPadding: '180px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
        
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// teams slider
$('.teams-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// slider 2
$('.slider-2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: false,
  centerPadding: '180px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// testimonials slider 2
$('.testimonials-slider-2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: false,
  centerPadding: '180px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// projects slider 
$('.projects-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  centerMode: false,
  centerPadding: '180px',
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// teams slider 2
$('.teams-slider-2').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: true,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});

// team-slider-4
$('.team-slider-3').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});

// partners slider
$('.partners-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
$('.slide-show').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.img-lst-slider'
});
$('.img-lst-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slide-show',
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  focusOnSelect: true,
  centerPadding: '30px',
  centerMode: true,
  arrows:false
});       
// properties 3 slider
$('.properties-slider-3').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll:  2,
  dots: false,
  arrows: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// testimonial 3 slider
$('.testimonials-slider-3-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.testimonials-slider-3-nav'
});
$('.testimonials-slider-3-nav').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.testimonials-slider-3-for',
  arrows: false,
  dots: false,
  focusOnSelect: true
});

// services 4 slider
$('.service-slider-4').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// properties 4 slider
$('.properties-slider-4').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: true,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// projects 4 slider
$('.projects-slider-4').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: false,
  arrows: true,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});
// testmonials 4 slider
$('.testimonials-slider-4').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  arrows: false,
  speed: 1000,      
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ],
});

/* ================================= */
  /*===== Image Hover =====*/
/* ================================= */
$('.hover-action')
// hover mouse actions
.on('mouseover', function () {
  $(this).children('.moving-image').css({ 'transform': 'scale(' + $(this).attr('data-scale') + ')' });
})
.on('mouseout', function () {
  $(this).children('.moving-image').css({ 'transform': 'scale(1)' });
})
.on('mousemove', function (e) {
  $(this).children('.moving-image').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
})
// hover-action set up
.each(function () {
  $(this)
    // add a moving-image container
    .append('<div class="moving-image"></div>')
    // set up a background image for each hover-action based on data-image attribute
    .children('.moving-image').css({ 'moving-image': 'url(' + $(this).attr('data-image') + ')' });
})

/* ================================= */
  /*===== Mouse Pointer =====*/
/* ================================= */
let mouseCursor = document.querySelector('.pointer');
let links = document.querySelectorAll('.pointer-zoom');;
window.addEventListener('mousemove',cursor);
function cursor(e){
  gsap.to(mouseCursor, 0.4, {
      x: e.clientX,
      y: e.clientY
  });  
}
links.forEach(link => { 
  link.addEventListener( "mouseleave", () => {
    mouseCursor.classList.remove( "link-grow" );
      gsap.to(mouseCursor, 0.4, {
      scale: 1
    }); 
});  
link.addEventListener( "mouseover" , () => {
    mouseCursor.classList.add( "link-grow" );
    gsap.to(mouseCursor, 0.4, {
      scale: 3
    }); 
  });
});
})(jQuery);
