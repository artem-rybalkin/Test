$(function(){
	/////карусель
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
  });
  /////карусель//////
  ////плавная прокрутка страницы
	var $page = $('html, body');
	$('a[href*="#"]').click(function() { //при нажатии на ссылку с #
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top // идёт плавная прокрутка
	    }, 400);
	    return false;
	});
	////scrollup
	$('#scrollup i').mouseover( function(){ // при наведении курсора на иконку
		$( this ).animate({opacity: 0.65},100); //меняется прозрачность
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click( function(){ // при нажатии на иконку страницу плавно подымается вверх
		$page.animate({scrollTop: $($page).offset().top}, 400);
		// window.scroll(0 ,0); 
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollup').fadeIn('fast'); // если страница не вверху-показываем стрелку
		} else {
			$('#scrollup').fadeOut('fast');
		}
	});
});