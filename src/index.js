'use strict';

//require('./radiation-header.js');
require('./widget/font');
require('./widget/slide-button');
require('./widget/index-scroll');
require('./widget/tree');

let $ = require('jquery');

 

$.single = (function(o){
    var collection = $([1]); // Fill with 1 item, to make sure length === 1
    return function(element) {
        collection[0] = element;
        return collection;
    };
}());

var requestFullScreen = () => {
    var body = document.documentElement;
    if (body.requestFullscreen) {
        body.requestFullscreen();
    } else if (body.webkitrequestFullscreen) {
        body.webkitrequestFullscreen();
    } else if (body.mozrequestFullscreen) {
        body.mozrequestFullscreen();
    } else if (body.msrequestFullscreen) {
        body.msrequestFullscreen();
    }    
};


requestFullScreen();


let tryLockScreen = () => {
    screen.lockOrientation && screen.lockOrientation('portrait');
};

tryLockScreen();


let screenWidth;

let changeWidth = function(){
    screenWidth = window.innerWidth;
};

$(window).on('resize', changeWidth);
changeWidth();


let mediaMap = {
    sm: 768,
    md: 992,
    lg: 1200
};


let clicked = false;
$('.article-wrapper').on('click', function(){
    let e = $(this);
    if( clicked ){
        
        clicked = false;
        
        e.css('top', e.data('top')).css('overflow', 'hidden').css('z-index', 'auto').addClass('c').removeClass('active');
        
        $('.article-wrapper').map(function(){
            let ee = $(this);
            ee.css('top', ee.data('top'));

            ee[0].scrollTop = 0;

            if( screenWidth > mediaMap['sm'] ){
                setTimeout(function(){
                    ee.removeClass('blur');
                }, 1000);
            }

            
        });
        
        setTimeout(function(){
            e.removeClass('c');
        }, 500);
        
    } else {
        clicked = true;
        $('.article-wrapper').css('top', '0.1rem');
        e.css('top', '0').css('overflow', 'scroll').css('z-index', '10').addClass('c').addClass('active');
        setTimeout(function(){
            e.removeClass('c');

            setTimeout(function(){
                $('.article-wrapper').map(function(){
                    let ee = $(this);
                    if( screenWidth > mediaMap['sm'] && ee[0] !== e[0] ){
                        ee.addClass('blur');
                    }
                });
            }, 700);            
        }, 500);
    }
});
