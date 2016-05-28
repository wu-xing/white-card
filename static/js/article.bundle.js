/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(6);
	//require('./widget/index-scroll');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	FontFaceOnload("YueSong", {
	    success: function success() {
	        setTimeout(function () {

	            window.document.body.className += 'yue-song-font';
	        });
	    }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(4))

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "/*! fontfaceonload - v0.1.7 - 2015-10-26\n * https://github.com/zachleat/fontfaceonload\n * Copyright (c) 2015 Zach Leatherman (@zachleat)\n * MIT License */\n\n;(function( win, doc ) {\n\t\"use strict\";\n\n\tvar TEST_STRING = 'AxmTYklsjo190QW',\n\t\tSANS_SERIF_FONTS = 'sans-serif',\n\t\tSERIF_FONTS = 'serif',\n\n\t\tdefaultOptions = {\n\t\t\ttolerance: 2, // px\n\t\t\tdelay: 100,\n\t\t\tglyphs: '',\n\t\t\tsuccess: function() {},\n\t\t\terror: function() {},\n\t\t\ttimeout: 5000,\n\t\t\tweight: '400', // normal\n\t\t\tstyle: 'normal'\n\t\t},\n\n\t\t// See https://github.com/typekit/webfontloader/blob/master/src/core/fontruler.js#L41\n\t\tstyle = [\n\t\t\t'display:block',\n\t\t\t'position:absolute',\n\t\t\t'top:-999px',\n\t\t\t'left:-999px',\n\t\t\t'font-size:48px',\n\t\t\t'width:auto',\n\t\t\t'height:auto',\n\t\t\t'line-height:normal',\n\t\t\t'margin:0',\n\t\t\t'padding:0',\n\t\t\t'font-variant:normal',\n\t\t\t'white-space:nowrap'\n\t\t],\n\t\thtml = '<div style=\"%s\">' + TEST_STRING + '</div>';\n\n\tvar FontFaceOnloadInstance = function() {\n\t\tthis.fontFamily = '';\n\t\tthis.appended = false;\n\t\tthis.serif = undefined;\n\t\tthis.sansSerif = undefined;\n\t\tthis.parent = undefined;\n\t\tthis.options = {};\n\t};\n\n\tFontFaceOnloadInstance.prototype.getMeasurements = function () {\n\t\treturn {\n\t\t\tsansSerif: {\n\t\t\t\twidth: this.sansSerif.offsetWidth,\n\t\t\t\theight: this.sansSerif.offsetHeight\n\t\t\t},\n\t\t\tserif: {\n\t\t\t\twidth: this.serif.offsetWidth,\n\t\t\t\theight: this.serif.offsetHeight\n\t\t\t}\n\t\t};\n\t};\n\n\tFontFaceOnloadInstance.prototype.load = function () {\n\t\tvar startTime = new Date(),\n\t\t\tthat = this,\n\t\t\tserif = that.serif,\n\t\t\tsansSerif = that.sansSerif,\n\t\t\tparent = that.parent,\n\t\t\tappended = that.appended,\n\t\t\tdimensions,\n\t\t\toptions = that.options,\n\t\t\tref = options.reference;\n\n\t\tfunction getStyle( family ) {\n\t\t\treturn style\n\t\t\t\t.concat( [ 'font-weight:' + options.weight, 'font-style:' + options.style ] )\n\t\t\t\t.concat( \"font-family:\" + family )\n\t\t\t\t.join( \";\" );\n\t\t}\n\n\t\tvar sansSerifHtml = html.replace( /\\%s/, getStyle( SANS_SERIF_FONTS ) ),\n\t\t\tserifHtml = html.replace( /\\%s/, getStyle(  SERIF_FONTS ) );\n\n\t\tif( !parent ) {\n\t\t\tparent = that.parent = doc.createElement( \"div\" );\n\t\t}\n\n\t\tparent.innerHTML = sansSerifHtml + serifHtml;\n\t\tsansSerif = that.sansSerif = parent.firstChild;\n\t\tserif = that.serif = sansSerif.nextSibling;\n\n\t\tif( options.glyphs ) {\n\t\t\tsansSerif.innerHTML += options.glyphs;\n\t\t\tserif.innerHTML += options.glyphs;\n\t\t}\n\n\t\tfunction hasNewDimensions( dims, el, tolerance ) {\n\t\t\treturn Math.abs( dims.width - el.offsetWidth ) > tolerance ||\n\t\t\t\t\tMath.abs( dims.height - el.offsetHeight ) > tolerance;\n\t\t}\n\n\t\tfunction isTimeout() {\n\t\t\treturn ( new Date() ).getTime() - startTime.getTime() > options.timeout;\n\t\t}\n\n\t\t(function checkDimensions() {\n\t\t\tif( !ref ) {\n\t\t\t\tref = doc.body;\n\t\t\t}\n\t\t\tif( !appended && ref ) {\n\t\t\t\tref.appendChild( parent );\n\t\t\t\tappended = that.appended = true;\n\n\t\t\t\tdimensions = that.getMeasurements();\n\n\t\t\t\t// Make sure we set the new font-family after we take our initial dimensions:\n\t\t\t\t// handles the case where FontFaceOnload is called after the font has already\n\t\t\t\t// loaded.\n\t\t\t\tsansSerif.style.fontFamily = that.fontFamily + ', ' + SANS_SERIF_FONTS;\n\t\t\t\tserif.style.fontFamily = that.fontFamily + ', ' + SERIF_FONTS;\n\t\t\t}\n\n\t\t\tif( appended && dimensions &&\n\t\t\t\t( hasNewDimensions( dimensions.sansSerif, sansSerif, options.tolerance ) ||\n\t\t\t\t\thasNewDimensions( dimensions.serif, serif, options.tolerance ) ) ) {\n\n\t\t\t\toptions.success();\n\t\t\t} else if( isTimeout() ) {\n\t\t\t\toptions.error();\n\t\t\t} else {\n\t\t\t\tif( !appended && \"requestAnimationFrame\" in window ) {\n\t\t\t\t\twin.requestAnimationFrame( checkDimensions );\n\t\t\t\t} else {\n\t\t\t\t\twin.setTimeout( checkDimensions, options.delay );\n\t\t\t\t}\n\t\t\t}\n\t\t})();\n\t}; // end load()\n\n\tFontFaceOnloadInstance.prototype.cleanFamilyName = function( family ) {\n\t\treturn family.replace( /[\\'\\\"]/g, '' ).toLowerCase();\n\t};\n\n\tFontFaceOnloadInstance.prototype.cleanWeight = function( weight ) {\n\t\t// lighter and bolder not supported\n\t\tvar weightLookup = {\n\t\t\tnormal: '400',\n\t\t\tbold: '700'\n\t\t};\n\n\t\treturn '' + (weightLookup[ weight ] || weight);\n\t};\n\n\tFontFaceOnloadInstance.prototype.checkFontFaces = function( timeout ) {\n\t\tvar _t = this;\n\t\tdoc.fonts.forEach(function( font ) {\n\t\t\tif( _t.cleanFamilyName( font.family ) === _t.cleanFamilyName( _t.fontFamily ) &&\n\t\t\t\t_t.cleanWeight( font.weight ) === _t.cleanWeight( _t.options.weight ) &&\n\t\t\t\tfont.style === _t.options.style ) {\n\t\t\t\tfont.load().then(function() {\n\t\t\t\t\t_t.options.success();\n\t\t\t\t\twin.clearTimeout( timeout );\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t};\n\n\tFontFaceOnloadInstance.prototype.init = function( fontFamily, options ) {\n\t\tvar timeout;\n\n\t\tfor( var j in defaultOptions ) {\n\t\t\tif( !options.hasOwnProperty( j ) ) {\n\t\t\t\toptions[ j ] = defaultOptions[ j ];\n\t\t\t}\n\t\t}\n\n\t\tthis.options = options;\n\t\tthis.fontFamily = fontFamily;\n\n\t\t// For some reason this was failing on afontgarde + icon fonts.\n\t\tif( !options.glyphs && \"fonts\" in doc ) {\n\t\t\tif( options.timeout ) {\n\t\t\t\ttimeout = win.setTimeout(function() {\n\t\t\t\t\toptions.error();\n\t\t\t\t}, options.timeout );\n\t\t\t}\n\n\t\t\tthis.checkFontFaces( timeout );\n\t\t} else {\n\t\t\tthis.load();\n\t\t}\n\t};\n\n\tvar FontFaceOnload = function( fontFamily, options ) {\n\t\tvar instance = new FontFaceOnloadInstance();\n\t\tinstance.init(fontFamily, options);\n\n\t\treturn instance;\n\t};\n\n\t// intentional global\n\twin.FontFaceOnload = FontFaceOnload;\n})( this, this.document );\n"

/***/ },
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var winWidth = window.innerWidth,
	    enable = false;

	var checkAnable = function checkAnable() {
	    if (winWidth < 768) {
	        enable = true;
	    }
	};

	window.addEventListener('resize', function () {
	    winWidth = window.innerWidth;
	    checkAnable();
	});

	var main = function main() {

	    var halfWidth = window.innerWidth / 2;

	    var getWidth = function getWidth() {
	        halfWidth = window.innerWidth / 2;
	    };

	    var slideTags = document.querySelector('.slide-tag');

	    window.addEventListener('resize', getWidth);

	    if (enable) {
	        slideTags.classList.add('hide');
	    }

	    var isLeft = true;

	    var hideToggleButtonIdle;

	    var handleClick = function handleClick(e) {

	        if (!enable) {
	            return;
	        }

	        var x = e.changedTouches[0].clientX;

	        slideTags.classList.remove('hide');

	        if (x < halfWidth) {
	            slideTags.classList.remove('right');
	            slideTags.classList.add('left');

	            if (!isLeft) {
	                disableButtons();
	            }

	            isLeft = true;
	        } else {
	            slideTags.classList.remove('left');
	            slideTags.classList.add('right');

	            if (isLeft) {
	                disableButtons();
	            }

	            isLeft = false;
	        }

	        if (hideToggleButtonIdle) {
	            clearTimeout(hideToggleButtonIdle);
	            hideToggleButtonIdle = null;
	        }

	        hideToggleButtonIdle = setTimeout(function () {

	            slideTags.classList.add('hide');
	        }, 2000);
	    };

	    window.document.body.addEventListener('touchstart', handleClick);

	    var lis = slideTags.querySelectorAll('ul li');
	    lis = Array.prototype.slice.apply(lis);

	    var len = lis.length;

	    var angleUnit = 90 / (len - 1);

	    var deg = Math.PI / 180;

	    var base = 7;

	    var toggleButton = slideTags.querySelector('.toggle-button');

	    function enableButtons() {
	        lis.forEach(function (e) {
	            e.style.display = 'block';
	        });
	    }

	    function disableButtons() {
	        lis.forEach(function (e) {
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
	        lis.forEach(function (e, i) {
	            e.classList.remove('active');
	            e.style.transform = '';
	        });
	        isToggle = false;
	    }

	    var isToggle = false;
	    toggleButton.addEventListener('click', function (event) {

	        if (!enable) {
	            return;
	        }

	        if (isToggle) {
	            return toggleHide();
	        }

	        enableButtons();
	        isToggle = true;
	        lis.forEach(function (e, i) {
	            var angle = i * angleUnit * deg;

	            var x = (base * Math.cos(angle) * (isLeft ? 1 : -1)).toFixed(6),
	                y = (-base * Math.sin(angle)).toFixed(6);

	            var translateStr = 'translate3d(' + x + 'rem, ' + y + 'rem, 0)';

	            e.classList.add('active');

	            setTimeout(function () {
	                e.style.transform = translateStr;
	            });
	        });
	    });

	    window.document.body.addEventListener('touchstart', function (e) {

	        if (!enable) {
	            return;
	        }

	        if (Array.from(e.target.classList).indexOf('slide-button') >= 0 || Array.from(e.target.parentElement.classList).indexOf('slide-button') >= 0) {
	            return;
	        }

	        isToggle && toggleHide();
	    });
	};

	main();

/***/ }
/******/ ]);