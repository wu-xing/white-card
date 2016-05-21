'use strict';

require('script!fontfaceonload/dist/fontfaceonload.js');

FontFaceOnload("YueSong", {
    success: function() {
        window.document.body.className += 'yue-song-font';
        
    }
});



