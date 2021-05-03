$(document).ready(function(){
      var macy = Macy({
    container: '#macy',
    trueOrder: false,
    waitForImages: false,
    margin: 0,
    columns: 3,
    breakAt: {
        1200: 3,
        940: 3,
        520: 1,
        400: 1
    }
});
       $('#counter-block').ready(function(){
        $('.fb').animationCounter({
          start: 0,
          end: 1600,
          step: 1,
          delay: 100,
        });
        $('.rb').animationCounter({
          start: 0,
          end: 18,
          step: 1,
          delay: 100,
        });
         $('.gb').animationCounter({
          start: 0,
          end: 213,
          step: 1,
          delay: 100,
        });
    }); 
      $('.owl-carousel').owlCarousel({
              loop:true,
              margin:10,
              nav:false,
              autoplay:true,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },
                  1000:{
                      items:1
                  }
              }
          });
   

});