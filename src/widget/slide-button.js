'use strict';

let main = () => {
    let halfWidth = window.innerWidth / 2;
    
    let getWidth = () => {
        halfWidth = window.innerWidth / 2; 
    };

    let slideTags = document.querySelector('.slide-tag');
    slideTags.classList.add('left');
    window.addEventListener('resize', getWidth);
    
    window.document.body.addEventListener('touchstart', (e) => {
        console.log(e);
        let x = e.changedTouches[0].clientX;
        
        if( x < halfWidth ){
            slideTags.classList.remove('right');
            slideTags.classList.add('left');
        } else {
            slideTags.classList.remove('left');
            slideTags.classList.add('right');
        }
    });

    // let lis = slideTags.querySelectorAll('ul li');
    // lis = Array.prototype.slice.apply(lis);
    // console.log("lis = ", lis);
    
    // let len = lis.length;

    // let angleUnit = 90 / len;

    // let base = 2;
    // lis.forEach((e, i) => {

    //     let angle = i * angleUnit;
    //     let x = - base * Math.sin(angle),
    //         y = - base * Math.cos(angle);

    //     let translateStr = `translate3d(${x}rem, ${y}rem, 0))`;

    //     e.style.transform = translateStr;
    // });
    
};

main();
