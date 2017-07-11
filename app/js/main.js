;(function(window, document, $){

   window.universal = {};

   universal.init = function(){
      universal.cacheSelector();
      universal.bindEvents();
   };

   universal.cacheSelector = function(){
      universal.$burger = $('.burger');
      universal.$navbar = $('.navbar');
      universal.lastScroll = 0;
   };

   universal.bindEvents = function(){
      universal.$burger.on('click', universal.toggleActiveNav);

      // $(document).on('scroll touchmove', function(e){
      //    var currentScroll = $(this).scrollTop();
      //    if( currentScroll > universal.lastScroll){
      //       $('body').addClass('moved');
      //    }
      //    universal.lastScroll = currentScroll;
      // });
   };

   universal.toggleActiveNav = function(){
      universal.$burger.toggleClass('burger--active');
      universal.$navbar.toggleClass('navbar--active');
   }

   $(document).ready(universal.init);
})(window, document, jQuery);
