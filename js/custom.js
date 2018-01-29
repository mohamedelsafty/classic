/*global $, alert , console*/

$(function () {
   
    "use strict";
    
    var myHeader = $('.header');
    
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
        $('.bxslider').each(function () {
       
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);

        });
         
        
    });
    
    
    $('.links li').click(function () {
       
        $(this).addClass('active').siblings().removeClass('active');
               
    });
    
    // slider
    
    $('.bxslider').each(function () {
       
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        
    });
    
    
    $('.bxslider').bxSlider({
        pager: false,
        auto: true
    });

    //smoth scroll
   
    $('.links li a').click(function () {
    
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
        }, 1000);
    
    });

    
    // faddin & faddout slider 
    
    (function outoslider() {
        $('.slider .active').each(function () {

            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1500, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    outoslider();
                        
                });
            
            } else {
                
                $(this).delay(3000).fadeOut(1500, function () {
                   
                    $(this).removeClass('active');
                    
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    
                    outoslider();
                    
                });
                
            }
            
        });

    }());
    
   
    var mixer = mixitup('.galarey');
    


    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });
    
    $('.shuffle li').click(function () {
        
        $(this).addClass('select').siblings().removeClass('select');
        
        
    });
    
    $("body").niceScroll({
        
        cursorcolor:"#19bd9b",
        cursorwidth:"7px",
        cursorborder:"none",
        
    });

    
});







