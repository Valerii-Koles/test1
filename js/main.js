$(document).ready(function(){
  $('.slider_main').slick({
  	arrows: false,
  	dots: true,
  });
$('.photo_slider').slick({
   slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.number_two',
});
$('.number_two').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.photo_slider',
  arrows: true,
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
$('.works_photo').slick({
	responsive: [
	{
		breakpoint: 100000,
		settings: 'unslick'
	},
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true
	},
	}
	]
 
});
});

    const iconMenu = document.querySelector('.menu_icon');
  if(iconMenu){
    const ourMenu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("animate");
      ourMenu.classList.toggle("open");
    });

  }


  