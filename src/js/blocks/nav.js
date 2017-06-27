$(document).ready(function () {
    $('.nav-container').hover(            
            function (){
                if($(window).width()>1040){
                    $(this).children('ul').show();
                }
                else{
                    return;
                }
            },
            function (){
                if($(window).width()>1040){
                    $(this).children('ul').hide();
                }
                else{
                    return;
                }
            });
            
            function nav(){
                var submenu = $('.nav-container').children('.active');
                submenu.addClass('activesubmenu');
                
                if($(window).width()<=1040){
                    $('nav').addClass('nav-mobile');
                    $('header').addClass('header-mobile');
                }
                else{
                    $('nav').removeClass('nav-mobile');
                    $('header').removeClass('header-mobile');
                }
            }
            
            nav();
            $(window).resize(function(){
                nav();
            });
            
             $('nav').simpleScrollFollow();
});