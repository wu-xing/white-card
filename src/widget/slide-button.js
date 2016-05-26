'use strict';

let main = () => {
    let halfWidth = window.innerWidth / 2;
    
    let getWidth = () => {
        halfWidth = window.innerWidth / 2; 
    };

    let slideTags = document.querySelector('.slide-tag');
    
    window.addEventListener('resize', getWidth);

    slideTags.classList.add('left');

    let isLeft = true;

    
    window.document.body.addEventListener('touchstart', (e) => {
        disableButtons();
        //showToggleButton();
        let x = e.changedTouches[0].clientX;
        
        if( x < halfWidth ){
            slideTags.classList.remove('right');
            slideTags.classList.add('left');
            isLeft = true;
        } else {
            slideTags.classList.remove('left');
            slideTags.classList.add('right');
            isLeft = false;
        }

        setTimeout(() => {
            //hideToggleButton();
        }, 1000);
    });

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

    let isToggle = false;
    toggleButton.addEventListener('click', (event) => {
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

    let toggleHide = () => {
        lis.forEach((e, i) => {
            e.classList.remove('active');
            e.style.transform = '';
        });
        isToggle = false;
    };

    window.document.body.addEventListener('touchstart', (e) => {
        isToggle && toggleHide();
    });

};

main();
