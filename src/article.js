'use strict';

let $ = require('jquery');

require('./widget/font.js');
//require('./radiation-header.js');

var addPicLine = () => {
    $('.article img').wrap('<div class="img-wrapper">');
    $('.img-wrapper').each(function(i, e){
        $(e).append('<span class="line"></span>');
    });
};


var init = () => {
    //addPicLine();
};

$(document).ready(function(){
    init();
});


