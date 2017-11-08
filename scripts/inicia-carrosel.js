$(document).ready(function(){
   $(".owl-carousel.historia").owlCarousel({
      center: true,
      loop: true,
      nav: true,
      navText: ["<span class='carousel-control-prev-icon' aria-hidden='true'></span>", "<span class='carousel-control-next-icon' aria-hidden='true'></span>"],
      responsive:{
         0:{
            items:3
         },
         767:{
            items:3
         },
         1023:{
            items:3
         }
      }
   });
   $(".owl-carousel.funcionamento").owlCarousel({
      center: true,
      loop: true,
      nav: true,
      navText: ["<span class='carousel-control-prev-icon' aria-hidden='true'></span>", "<span class='carousel-control-next-icon' aria-hidden='true'></span>"],
      responsive:{
         0:{
            items:3
         },
         767:{
            items:3
         },
         1023:{
            items:3
         }
      }
   });
});
