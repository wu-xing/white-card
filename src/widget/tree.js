'use strict';

import TreeClass from '../tree/tree.js';

import {randomFloat, randomInteger} from '../util.js';

window.addEventListener('load', function(){
    let canvas = document.getElementById('article-canvas'),
        ctx = canvas.getContext('2d');

    ctx.lineWidth = 0.5;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.75)';

    canvas.height = canvas.parentElement.offsetHeight;
    canvas.width = canvas.parentElement.offsetWidth;

    let done = false,
        trees = [];

    let addTree = (conWidth, conHeight) => {
        let treeN = 3;
        
        trees = new Array(treeN);
        var addTreef = function(){
            if( treeN === 0 ){
                return;
            }
            
            let x = randomInteger(0, conWidth);
            trees.push(TreeClass.generatTree(x, conHeight));
            treeN--;
            setTimeout(addTreef, 2000);
        };
        setTimeout(addTreef, 2000);
        addTreef();
    };

    

    let checkdone = () => {
        done = trees.every((tree) => {
            return !tree;
        });
        console.log(done);
    };

    let drawTreeTick = () => {
        
        trees.map((tree, i) => {
            if( !tree ){
                return;
            }
            tree.draw(ctx);
            if( tree.complete() ){
                trees[i] = null;
                checkdone();
            }
        });
    };

    let draw = () => {
        if( done ){
            return;
        }
        requestAnimationFrame(draw);
        drawTreeTick();
    };


    let drawing = false;

    var main = () => {
        if( !drawing ){
            addTree(canvas.width, canvas.height);
            draw();
            drawing = true;
        }
    };
    
    main();
});

