$(function(){

    $('.carousel__inner').slick({
        arrows: false,
        slidesToShow: 3,
		responsive: [
			{
				breakpoint: 721,
				settings:{
					slidesToShow: 2
				}
			},
			{
				breakpoint: 380,
				settings:{
					slidesToShow: 1
				}
			},
		],
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    
});

$(window).on('load', function () {
    $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
  });


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});




const popUp = document.getElementById('pop_up')

document.querySelectorAll('.price__consult').forEach((button) => {
    button.addEventListener('click', () => popUp.classList.add('active'))
})
document.querySelectorAll('.pop_up_close').forEach((button) => {
    button.addEventListener('click', () => popUp.classList.remove('active'))
});


  

  
