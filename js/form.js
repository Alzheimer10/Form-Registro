$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "fast");
});

$('button').click(function(){
    $('.form').effect( "bounce", "slow" );
});