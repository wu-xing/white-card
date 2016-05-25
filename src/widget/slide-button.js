'use strict';

let main = () => {
    let halfWidth = window.innerWidth / 2;
    
    let getWidth = () => {
        halfWidth = window.innerWidth / 2; 
    };

    let slideTags = document.querySelector('.slide-tag');
    
    window.addEventListener('resize', getWidth);
    
    window.document.body.addEventListener('touchstart', (e) => {
        
        let x = e.changedTouches[0].clientX;
        
        if( x < halfWidth ){
            slideTags.classList.remove('right');
            slideTags.classList.add('left');
        } else {
            slideTags.classList.remove('left');
            slideTags.classList.add('right');
        }

    });


};

main();
