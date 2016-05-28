'use strict';

let winWidth = window.innerWidth,
    enable = false;

let checkAnable = () => {
    if( winWidth < 768 ){
        enable = true;
    } else {
        enable = false;
    }
};


window.addEventListener('resize', () => {
    winWidth = window.innerWidth;
    checkAnable();
});

let main = () => {

    let halfWidth = window.innerWidth / 2;
    
    let getWidth = () => {
        halfWidth = window.innerWidth / 2; 
    };

    let slideTags = document.querySelector('.slide-tag');
    
    window.addEventListener('resize', getWidth);

    if( enable ){
        slideTags.classList.add('hide');
    }

    let isLeft = true;

    var hideToggleButtonIdle;

    let handleClick =  (e) => {

        if( !enable ){
            return;
        }

        let x = e.changedTouches[0].clientX;
        
        slideTags.classList.remove('hide');
        
        if( x < halfWidth ){
            slideTags.classList.remove('right');
            slideTags.classList.add('left');

            if( !isLeft ){
                disableButtons();
            }
            
            isLeft = true;
        } else {
            slideTags.classList.remove('left');
            slideTags.classList.add('right');

            if( isLeft ){
                disableButtons();
            }
            
            isLeft = false;
        }

        if( hideToggleButtonIdle ){
            clearTimeout(hideToggleButtonIdle);
            hideToggleButtonIdle = null;
        }

        hideToggleButtonIdle = setTimeout(() => {

            slideTags.classList.add('hide');
        }, 2000);

    };
    
    window.document.body.addEventListener('touchstart', handleClick);

    let lis = slideTags.querySelectorAll('ul li');
    lis = Array.prototype.slice.apply(lis);
    
    let len = lis.length;

    let angleUnit = 90 / (len - 1);

    let deg = Math.PI / 180;

    let base = 7;

    let toggleButton = slideTags.querySelector('.toggle-button');

    function enableButtons() {
        lis.forEach((e) => {
            e.style.display = 'block';
        });
    }

    function disableButtons() {
        lis.forEach((e) => {
            e.style.display = 'none';
        });
    }

    function hideToggleButton() {
        toggleButton.classList.add('hide');
    }

    function showToggleButton() {
        toggleButton.classList.remove('hide');
    }

    function toggleHide() {
        lis.forEach((e, i) => {
            e.classList.remove('active');
            e.style.transform = '';
        });
        isToggle = false;
    }
    
    let isToggle = false;
    toggleButton.addEventListener('click', (event) => {

        if( !enable ){
            return;
        }
        
        if( isToggle ){
            return toggleHide();
        }
        
        enableButtons();
        isToggle = true;
        lis.forEach((e, i) => {
            let angle = i * angleUnit * deg;

            let x = (base * Math.cos(angle) * (isLeft ? 1 : -1)).toFixed(6),
                y = ( - base * Math.sin(angle)).toFixed(6);

            let translateStr = `translate3d(${x}rem, ${y}rem, 0)`;

            e.classList.add('active');
            
            setTimeout(() => {
                e.style.transform = translateStr;    
            });
            
        });
    });

    

    window.document.body.addEventListener('touchstart', (e) => {

        if( !enable ){
            return;
        }

        if( Array.from(e.target.classList).indexOf('slide-button') >= 0 ||
            Array.from(e.target.parentElement.classList).indexOf('slide-button') >= 0 ){
            return;
        }

        isToggle && toggleHide();
    });

};

main();
