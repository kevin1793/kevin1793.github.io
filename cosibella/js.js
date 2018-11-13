
function goTo(x){
    console.log('Going to ' + x);
        $('html, body').animate({
            scrollTop: $('#'+x).offset().top-50
        }, 500);
    // });
}

function backTop(){
    console.log('GOING BACK UP');
    // $(".pricing").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    // });
}

function toggleNav(){
    if($('.navbar_mobile_menu').hasClass('active')){
        $('.navbar_mobile_menu').removeClass('active');
        $('.navbar_mobile_menu').slideUp('fast');
    }
    else{
        $('.navbar_mobile_menu').addClass('active');
        $('.navbar_mobile_menu').slideDown('fast');
    }
}

$(window).resize(function() {

    let w_width =  $(window).width();

    if( w_width > 768){
        $('.navbar_mobile_menu').css('display','none');
        $('.navbar_mobile_menu').removeClass('active');
    }
  });

$( document ).ready(function() {
    $('.home1_header').hide();
    $('.home1_header2').hide();
    $('.nav_cont').hide();
    $('.awards').hide();
    $('.back_up').hide();
    $('.nav_cont').slideDown(700);

    setTimeout(function(){
         $('.home1_header').fadeIn(700);
         setTimeout(function(){
            $('.home1_header2').fadeIn(700);
            setTimeout(function(){
                $('.awards').fadeIn(700);
            }, 700);
        }, 700);
    }, 700);

    $( ".service_item" ).mouseover(function() {
        $(this).css('position', 'relative');
        $(this).find('.service_image').css('position', 'relative');
        $(this).find('.service_image').css('transform', 'scale(1.1)');
        $(this).css('overflow', 'hidden');
        $(this).find('.service_image').css('overflow', 'hidden');
        $(this).find('.service_image').css('transition', '.7s');
    });
    $( ".service_item" ).mouseleave(function() {
        $(this).css('position', 'relative');
        
        $(this).find('.service_image').css('position', 'relative');
        $(this).find('.service_image').css('transform', 'scale(1)');
        $(this).find('.service_image').css('transition', '.5s');
    });

    $(document).click(function(e) {
        if ($(e.target).closest('.navbar_mobile').length === 0 && $('.navbar_mobile_menu').hasClass('active')) {
            $('.navbar_mobile_menu').slideUp('fast');
            $('.navbar_mobile_menu').removeClass('active');
        }else{
            // $('.navbar_mobile_menu').slideUp('fast');
        }
    });

    $(document).scroll(function() {
        if ($(document).scrollTop() >= 100) {
          // user scrolled 50 pixels or more;
          // do stuff
          $('.back_up').fadeIn(500);
        } else {
            $('.back_up').slideUp(500);
        }
    });
});

