$(document).ready(function () {
    console.log("Ready!!");

    // Menu
    $('.icon-menu').click(function () { 
        $('.link-menu').slideToggle(1000);
    });
    // Main Hover
    $('.card-main.one').hover(function () {
            $('.img-card.one img').attr('src', 'img/main1-hover.png');
            $('.btn-gray.one').addClass('bg-green white');
        }, function () {
            $('.img-card.one img').attr('src', 'img/main1.png');
            $('.btn-gray.one').removeClass('bg-green white');
        }
    );
    $('.card-main.two').hover(function () {
            $('.img-card.two img').attr('src', 'img/main2-hover.png');
            $('.btn-gray.two').addClass('bg-green white');
        }, function () {
            $('.img-card.two img').attr('src', 'img/main2.png');
            $('.btn-gray.two').removeClass('bg-green white');
        }
    );
    $('.card-main.three').hover(function () {
            $('.img-card.three img').attr('src', 'img/main3-hover.png');
            $('.btn-gray.three').addClass('bg-green white'); 
        }, function () {
         $('.img-card.three img').attr('src', 'img/main3.png');
         $('.btn-gray.three').removeClass('bg-green white');
        }
    );
    // Services Hover
    $('.card-service.one').hover(function () {
            $('.img-service.one img').attr('src', 'img/service1-hover.png');
            $('.card-service.one').addClass('bg-purple');
            $('.card-service.one>.circle.one').addClass('active');
            $('.card-service.one>.circle.two').addClass('active');
            $('.card-service.one>.circle.three').addClass('active');
            $('.text-service.one h2, .text-service.one p').addClass('white');
        }, function () {
            $('.img-service.one img').attr('src', 'img/service1.png');
            $('.card-service.one').removeClass('bg-purple');
            $('.card-service.one>.circle.one').removeClass('active');
            $('.card-service.one>.circle.two').removeClass('active');
            $('.card-service.one>.circle.three').removeClass('active');
            $('.text-service.one h2, .text-service.one p').removeClass('white');
        }
    );
    $('.card-service.two').hover(function () {
            $('.img-service.two img').attr('src', 'img/service2-hover.png');
            $('.card-service.two').addClass('bg-purple');
            $('.card-service.two>.circle.one').addClass('active');
            $('.card-service.two>.circle.two').addClass('active');
            $('.card-service.two>.circle.three').addClass('active');
            $('.text-service.two h2, .text-service.two p').addClass('white');
        }, function () {
            $('.img-service.two img').attr('src', 'img/service2.png');
            $('.card-service.two').removeClass('bg-purple');
            $('.card-service.two>.circle.one').removeClass('active');
            $('.card-service.two>.circle.two').removeClass('active');
            $('.card-service.two>.circle.three').removeClass('active');
            $('.text-service.two h2, .text-service.two p').removeClass('white');
        }
    );
    $('.card-service.three').hover(function () {
            $('.img-service.three img').attr('src', 'img/service3-hover.png');
            $('.card-service.three').addClass('bg-purple');
            $('.card-service.three>.circle.one').addClass('active');
            $('.card-service.three>.circle.two').addClass('active');
            $('.card-service.three>.circle.three').addClass('active');
            $('.text-service.three h2, .text-service.three p').addClass('white');
        }, function () {
            $('.img-service.three img').attr('src', 'img/service3.png');
            $('.card-service.three').removeClass('bg-purple');
            $('.card-service.three>.circle.one').removeClass('active');
            $('.card-service.three>.circle.two').removeClass('active');
            $('.card-service.three>.circle.three').removeClass('active');
            $('.text-service.three h2, .text-service.three p').removeClass('white');
        }
    );
    $('.card-service.four').hover(function () {
            $('.img-service.four img').attr('src', 'img/service4-hover.png');
            $('.card-service.four').addClass('bg-purple');
            $('.card-service.four>.circle.one').addClass('active');
            $('.card-service.four>.circle.two').addClass('active');
            $('.card-service.four>.circle.three').addClass('active');
            $('.text-service.four h2, .text-service.four p').addClass('white');
        }, function () {
            $('.img-service.four img').attr('src', 'img/service4.png');
            $('.card-service.four').removeClass('bg-purple');
            $('.card-service.four>.circle.one').removeClass('active');
            $('.card-service.four>.circle.two').removeClass('active');
            $('.card-service.four>.circle.three').removeClass('active');
            $('.text-service.four h2, .text-service.four p').removeClass('white');
        }
    );
    $('.card-service.five').hover(function () {
            $('.img-service.five img').attr('src', 'img/service5-hover.png');
            $('.card-service.five').addClass('bg-purple');
            $('.card-service.five>.circle.one').addClass('active');
            $('.card-service.five>.circle.two').addClass('active');
            $('.card-service.five>.circle.three').addClass('active');
            $('.text-service.five h2, .text-service.five p').addClass('white');
        }, function () {
            $('.img-service.five img').attr('src', 'img/service5.png');
            $('.card-service.five').removeClass('bg-purple');
            $('.card-service.five>.circle.one').removeClass('active');
            $('.card-service.five>.circle.two').removeClass('active');
            $('.card-service.five>.circle.three').removeClass('active');
            $('.text-service.five h2, .text-service.five p').removeClass('white');
        }
    );
    $('.card-service.six').hover(function () {
            $('.img-service.six img').attr('src', 'img/service6-hover.png');
            $('.card-service.six').addClass('bg-purple');
            $('.card-service.six>.circle.one').addClass('active');
            $('.card-service.six>.circle.two').addClass('active');
            $('.card-service.six>.circle.three').addClass('active');
            $('.text-service.six h2, .text-service.six p').addClass('white');
        }, function () {
            $('.img-service.six img').attr('src', 'img/service6.png');
            $('.card-service.six').removeClass('bg-purple');
            $('.card-service.six>.circle.one').removeClass('active');
            $('.card-service.six>.circle.two').removeClass('active');
            $('.card-service.six>.circle.three').removeClass('active');
            $('.text-service.six h2, .text-service.six p').removeClass('white');
        }
    );
    // Portfolio
    $('#all').click(function () {
        $(this).addClass('purple');
        $('#branding,#prototype,#ux,#web').removeClass('purple');
        $('#port1,#port2,#port3,#port4,#port5,#port6,#port7,#port8').show(800); 
        return false
    });
    $('#branding').click(function () { 
        $(this).addClass('purple');
        $('#all,#prototype,#ux,#web').removeClass('purple');
        $('#port1,#port6').show(800);
        $('#port2,#port3,#port4,#port5,#port7,#port8').hide(800);
        return false
    });
    $('#prototype').click(function () { 
        $(this).addClass('purple');
        $('#all,#branding,#ux,#web').removeClass('purple');
        $('#port3,#port4,#port6,#port7,#port8').show(800);
        $('#port1,#port2,#port5').hide(800);
        return false
    });
    $('#ux').click(function () { 
        $(this).addClass('purple');
        $('#all,#branding,#prototype,#web').removeClass('purple');
        $('#port2,#port5').show(800);
        $('#port1,#port3,#port4,#port6,#port7,#port8').hide(800);
        return false
    });
    $('#web').click(function () { 
        $(this).addClass('purple');
        $('#all,#branding,#prototype,#ux').removeClass('purple');
        $('#port5,#port7').show(800);
        $('#port1,#port2,#port3,#port4,#port6,#port8').hide(800);
        return false
    });
    // Blog
    $('#btn-blog1').click(function () { 
        $('#blog1').fadeIn(1000);
        $('#blog2,#blog3,#blog4,#blog5,#blog6').fadeOut(100);
        $('#btn-blog1').addClass('purple');
        $('#btn-blog2,#btn-blog3,#btn-blog4,#btn-blog5,#btn-blog6').removeClass('purple');
    });
    $('#btn-blog2').click(function () { 
        $('#blog2').fadeIn(1000);
        $('#blog1,#blog3,#blog4,#blog5,#blog6').fadeOut(100);
        $('#btn-blog2').addClass('purple');
        $('#btn-blog1,#btn-blog3,#btn-blog4,#btn-blog5,#btn-blog6').removeClass('purple');
    });
    $('#btn-blog3').click(function () { 
        $('#blog3').fadeIn(1000);
        $('#blog1,#blog2,#blog4,#blog5,#blog6').fadeOut(100);
        $('#btn-blog3').addClass('purple');
        $('#btn-blog1,#btn-blog2,#btn-blog4,#btn-blog5,#btn-blog6').removeClass('purple');
    });
    $('#btn-blog4').click(function () { 
        $('#blog4').fadeIn(1000);
        $('#blog1,#blog2,#blog3,#blog5,#blog6').fadeOut(100);
        $('#btn-blog4').addClass('purple');
        $('#btn-blog1,#btn-blog2,#btn-blog3,#btn-blog5,#btn-blog6').removeClass('purple');
    });
    $('#btn-blog5').click(function () { 
        $('#blog5').fadeIn(1000);
        $('#blog1,#blog2,#blog3,#blog4,#blog6').fadeOut(100);
        $('#btn-blog5').addClass('purple');
        $('#btn-blog1,#btn-blog2,#btn-blog3,#btn-blog4,#btn-blog6').removeClass('purple');
    });
    $('#btn-blog6').click(function () { 
        $('#blog6').fadeIn(1000);
        $('#blog1,#blog2,#blog3,#blog4,#blog5').fadeOut(100);
        $('#btn-blog6').addClass('purple');
        $('#btn-blog1,#btn-blog2,#btn-blog3,#btn-blog4,#btn-blog5').removeClass('purple');
    });
    //scroll
    $('#smooth').waypoint(function(direction){
        if (direction == 'down'){
            $('#smooth').addClass('active');
        }else{
            $('#smooth').removeClass('active');
        }
    }, {offset: '75%'});

}); 

