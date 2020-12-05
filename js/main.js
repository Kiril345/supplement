$(function() {
    /*меню*/
    $('.nav-btn').click(function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.nav-bar__block').toggleClass('nav-bar__active');
        });
    $('.nav-bar__link').click(function() {
    $('.nav-btn').toggleClass('active');
    $('.nav-bar__block').toggleClass('nav-bar__active');
        });
    /*слайдер1*/
    $('.slider-wrap').slick({
        /* vertical: true,*/
        dots: true,
        dotsClass: 'dots',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        });
    /*слайдер2*/
    $('.slider-wrap2').slick({
        /* vertical: true,*/
        dots: true,
        dotsClass: 'dots',
        prevArrow: $('.prev2'),
        nextArrow: $('.next2'),
        });
    /*меню-карточек*/
    $('#1').hover(function() {
    $('#2').toggleClass('visible');
        });
    $('#3').hover(function() {
    $('#4').toggleClass('visible');
        });
    $('#5').hover(function() {
    $('#6').toggleClass('visible');
        });
    $('#7').hover(function() {
    $('#8').toggleClass('visible');
        });
    $('#9').hover(function() {
    $('#10').toggleClass('visible');
        });
    $('#11').hover(function() {
    $('#12').toggleClass('visible');
        });
    $('#13').hover(function() {
    $('#14').toggleClass('visible');
        });
    $('#15').hover(function() {
    $('#16').toggleClass('visible');
        });
    /*плавная прокрутка*/
    $("#buy, #nav").on("click","a", function (event) {
    event.preventDefault();
    const id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
        });
    ///////*модальное окно*//////
    $('.main__watch').click( event => {
    event.preventDefault();
    $('.modal').fadeIn('500', function() {
        });
    $('body').toggleClass('modal-show');
        });
    $('.modal__close').click(function() {
    $('.modal').fadeOut('500', function() {
        });
    $('body').toggleClass('modal-show');
        });
    });

   ////////////*управление видео*//////////
let play;
    function onYouTubePlayerAPIReady() {
        play = new YT.Player('play', {videoId: '-5grgGw1yyU',});
        document.getElementById('playYoutube1').onclick = function() {play.playVideo();};
        document.getElementById('pauseYoutube1').onclick = function() {play.pauseVideo();};
    }