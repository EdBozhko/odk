// scroll spy

jQuery(window).scroll(function(){
    var $sections = $('section');
$sections.each(function(i,el){
   let top  = $(el).offset().top;
   let bottom = top +$(el).height();
   let scroll = $(window).scrollTop();
   let id = $(el).attr('id');
   if( scroll > top && scroll < bottom){
       $('a.header-navigation__item--active').removeClass('header-navigation__item--active');
       $('a[href="#'+id+'"]').addClass('header-navigation__item--active');

   }
})
});

// smooth scroll

$("nav").on("click",'a[href^="#"]', function (event) {
   
        // исключаем стандартную реакцию браузера
        event.preventDefault();
     
        // получем идентификатор блока из атрибута href
        let id  = $(this).attr('href'),
     
        // находим высоту, на которой расположен блок
        top = $(id).offset().top;
         
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top+10}, 500);
        
    
});