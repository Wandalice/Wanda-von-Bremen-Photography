(function($) {

	'use strict';

	var windowWidth = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth,
		body = $('body'),
		header = $('#header'),
		pageTransitionTime,
	    animationTime = 750,
	    pageTransitionTime = 450,
	    menuAnimationTime = 1250,
	    introAnimationTime = 1400, // 1400
	    verticalAnimationTime = 1500,
	    mobileWidth = 540,
	    mobileDelay = 0,
	    isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0)),
	    mainContainer = $('#main'),
		smoothState;


	if(windowWidth <= mobileWidth) {
		pageTransitionTime = 1000; // zeby posty nie podskakiwały do góry jak zeskrollujemy
		$('.posts-loop').removeAttr('style'); // żeby były oo lewej
	}

	var myLoader = function() {
		var loader = $('<span class="loader"></span>');
		var i = 0;
		setInterval(function() {
		    i = ++i % 4;
		    loader.html(Array(i+1).join("."));
		}, 500);
		return loader;
	}

	var loader = myLoader();

	// sprawdzamy czy to nie hash
	function getPostTitleFormHash(rkStr) {
	    return rkStr.split('#')[1];
	}
	if(window.location.href.indexOf('#') > -1) {
		var postURL = window.location.href,
    		postTitle = getPostTitleFormHash(postURL),
    		projectID = postTitle;

    	$('.posts-loop').children().each(function(){
    		if($(this).attr('id') == projectID) {
    			var rkPost = $(this).children('a');
    			showSinglePostGallery(rkPost,0);
    			return false;
    		}
    	});
    }

	// intro
	introFunctions();
	function introFunctions() {

		loader.appendTo($('.home-header-description'));	

	    var homeFigure = $('.home-gallery').children('figure'),
	    	homeGalleryWrap = $('.home-gallery-wrap'),
			homeHeaderInfo = $('.home-header-info');
	    
	    var figWidth = homeFigure.width();
	    var figHeight = homeFigure.height();
	    var myVal = parseInt(homeFigure.width()/4);
	    var myValSqrd = myVal*Math.sqrt(2)/2;

		homeFigure.each(function(){
			$(this).children().first().addClass('active');
		});

		homeGalleryWrap.on('click', 'a', function(event) { event.preventDefault();});

		homeFigure
			.on('mouseenter', function(e) {
				var currentFigure = $(this);
				var startX = e.pageX;
			    var startY = e.pageY;

	    		$(this).bind('mousemove', function(e) {
	    			// sprawdź aktulane położenie w trakcie jeżdżenia po obrazku
					var mouseX = e.pageX;
		    		var mouseY = e.pageY;
		    		// sprawdzamy współrzędne po poruszaniu się myszką po okienku
		    		var basePointX = startX - mouseX; // odległość w pionie od startu
		    		var basePointY = startY - mouseY; // odległość w poziomie od startu

		    		// uproszczenie sumy kwadratów
		    		var basePointSqrd = Math.sqrt(Math.pow(basePointX, 2) + Math.pow(basePointY, 2));

		    		// co arbitralną wartość pikselową od startu zmieniamy obrazek
		    		if(basePointSqrd > myValSqrd ) {
		    			var nextImg = currentFigure.children('.active').next();
		    			if(nextImg.length == 0)  {
		    				currentFigure.children('.active').removeClass('active');
		    				currentFigure.children().first().addClass('active');
		    				
		    			} else {
		    				currentFigure.children('.active').removeClass('active').next().addClass('active');
		    			}
		    			// zmiemień punkt startowy na ten po którym zmieniliśmy obrazek
		    			startX = mouseX;
		    			startY = mouseY;
		    		}
	    		});
			});

		function waitSomeTime() {
			var dfd = $.Deferred();
			setTimeout(function(){
				dfd.resolve();
			},introAnimationTime);
			return dfd.promise();
		}

		function loadImages() {
			var dfd = $.Deferred();
			homeGalleryWrap.imagesLoaded().always(function(){
		    	return dfd.promise();
		    });
		}
		
		$.when( loadImages(), waitSomeTime() ).done(function() {
			homeHeaderInfo
				.animate({
			    	marginTop: '-300px',
			    },1250, 'easeInOutQuint', function() {
			    	$(this).remove();
			    });
		    homeGalleryWrap
				.delay(250)
		    	.animate({
			    	top: 0,
			    },1250, 'easeInOutQuint', function() {
			    	$(this).parent().css('padding-top',0);
			    });
		});

	}

	if(body.hasClass('single')) {
		var rkCat = $('article.single-post').attr('data-category'),
			rkMenu = $('.nav-menu');
		rkMenu.children().children().each(function() {
			if($(this).children().text() == rkCat) {
				$(this).addClass('current-menu-item');
				return false;
			}
		});
	}
	if(body.hasClass('category-commissioned')) $('.nav-menu').addClass('menu-on-the-right'); body.removeClass('category-commissioned');

	var options = {
	  	anchors: '.smooth-state a',
	  	blacklist: '.current-menu-item a',
	    prefetch: true,
	    cacheLength: 2,
	    onStart: {
		    duration: pageTransitionTime, // Duration of our animation
		  	render: function ($container) {

		  		var homeGalleryWrap = $container.find('.home-gallery-wrap'),
		  			intro = (homeGalleryWrap.length == 0) ? false : true,
		  			mobileWidth = 540,
		  			visiblePage,
		  			rkMenu = $container.find('.nav-menu'),
		  			windowWidth = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth;
		  		
		  		$container.addClass($(document.activeElement).attr('data-slug'));

		  		if(intro) { // intro
		  			
			    	var imgActive = $(document.activeElement).children('figure').children('.active'),
			    		imgPostID = imgActive.attr('data-id');

			    	// usuwamy zbędną treść w nagłówku i galerię ze strony głównej
					homeGalleryWrap.animate({
						'margin-top' : '-100vh', // to powinno być funkcją czy wchodzimy czy wstecz
					},verticalAnimationTime,'easeInOutQuint');

		  		} else { // not intro / strony z menu

		        if(!rkMenu.hasClass('animating-menu')) { // jeśli się animuje nie możemy klikać

		        	$container.addClass('animating-dom');

			  		if($container.find('.single-post').length == 1) visiblePage = $container.find('.single-post');
			  		else visiblePage = $container.find('.posts-loop');

					mobileDelay = (windowWidth <= mobileWidth) ? 500 : 0;

					visiblePage
						.delay(mobileDelay)
						.addClass('current-loop')
						.animate({
							'left' : hideContentPosition(rkMenu),
						},animationTime,'easeInOutQuint',function() {
							$(this).remove(); // remove itself after animation
						});	
				    	
				    	var leftPos = 0,
				    		position = menuPosition(rkMenu);

				    	rkMenu.addClass('animating-menu').children().children().each(function() {
							if($(this).hasClass('current-menu-item')) {
								$(this).removeClass('current-menu-item');
								return false;
							}
						});

				    	// przesuwamy menu i uaktualniamy klasę
						if(!rkMenu.hasClass('menu-on-the-right')) leftPos = menuRightPosition(rkMenu);
						rkMenu.animate({
							left: leftPos,
						},menuAnimationTime,'easeInOutQuint', function(){
							rkMenu.removeClass('animating-menu');
						});

						rkMenu.toggleClass('menu-on-the-right');

						// mobile menu toggling
						if(windowWidth <= mobileWidth && $('.show-menu').hasClass('menu-opened')) toggleMenu();
					}
				} // intro: true / false
		    }
	    },
	    onReady: {
		    duration: 0,
		    render: function ($container, $newContent) {

		    	if(
		    		window.location.href == 'http://rafalklos.com/' ||
		    		window.location.href == 'http://www.rafalklos.com/' ||
		    		window.location.href == 'http://rafalklos.com' ||
		    		window.location.href == 'http://www.rafalklos.com'
		    	) window.location.href = 'http://rafalklos.com/';

		        var homeGalleryWrap = $container.find('.home-gallery-wrap'),
		  			intro = (homeGalleryWrap.length !== 0) ? true : false,
		        	rkMenu = $container.find('.nav-menu'),
		        	navMenu = $newContent.find('.nav-menu'),
		        	mobileDelay,
		        	mobileWidth = 540,
		        	leftPos = 0,
					windowWidth = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth,
					position = menuPosition(rkMenu);

				rkMenu.children().children().each(function() {
					if($(this).children().attr('href') == window.location.href) {
						$(this).addClass('current-menu-item');
						return false;
					}
				});

				if(intro) { // intro
					
					var imgActiveID = $(document.activeElement).find('img.active').attr('data-id');

					$newContent.find('.post[data-id=' + imgActiveID + ']').prependTo($newContent.find('.posts-loop'));

					$container.append($newContent);

					if(windowWidth <= mobileWidth) $newContent.children().children().removeAttr('style')

					$newContent
						.addClass('slided')
						.css({'margin-top':'100vh'})
						.animate({
							'margin-top' : 0,
						},verticalAnimationTime*0.9,'easeInOutQuint',function() {
							$container.children().each(function() {
								if(!$(this).hasClass('slided')) $(this).remove();
							});
							navMenu.addClass('mobile-loaded');
						});

					

					if($container.hasClass('commissioned')) navMenu.addClass('menu-on-the-right')

				} else {

			        var rkNewContent = $newContent.find('.posts-loop');

			        $container.children('.animation-overflow').children().append(rkNewContent);
					if(position == 'right' && windowWidth > mobileWidth) leftPos = '50%';
					if(windowWidth <= mobileWidth) mobileDelay = 500;

					rkNewContent
						.removeAttr('style')
						.addClass('ajaxed-' + position)
						.delay(mobileDelay)
						.animate({
							'left' : leftPos,
						},menuAnimationTime,'easeInOutQuint',function() {
							$(this).removeClass('ajaxed-' + position);
							$container.removeClass('animating-dom');
						});

				}

		    }
	    },
	    onAfter: function($container, $newContent) {
	    	initGallery();
    		if(isTouch) $container.children('#header').off().on('click', '.show-menu', function(event) { toggleMenu(); });
		}
	},
	smoothState = mainContainer.smoothState(options).data('smoothState');

	function menuRightPosition(elem) {
		var header = $('#header');
		var eWidth = elem.width();
		var ePaddingRight = parseInt(elem.css('padding-right'));
		return header.width() - eWidth - (2*ePaddingRight);
	}

	function menuPosition(elem) {
		if(!elem.hasClass('menu-on-the-right')) return 'right';
		else return 'left';
	}

	function hideContentPosition(elem) {
		var windowWidth = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth;
		if(menuPosition(elem) == 'left' && windowWidth <= mobileWidth ) return '-100%';
		if(menuPosition(elem) == 'right' && windowWidth <= mobileWidth ) return '100%';
		else if(menuPosition(elem) == 'left') return '-65%';
		else return '115%';
	}

	// remove imported images and class of parent wrapper
	function removeImportedPost() {
		var importedPost = $('.imported-post');
		if(importedPost.length > 0) {
		var	importedPostParent = importedPost.parent().addClass('closed').removeClass('post-opened'),
			importedPostThumbnail = importedPostParent.children('.post-thumbnail'),
			importedPostURL = importedPostParent.attr('data-href'),
			importedPostID = importedPostParent.attr('data-id');
			importedPostThumbnail.attr('href',importedPostURL).removeClass('fl-item').off();
			importedPost.remove();
		}
	}

	function toggleMenu() {
		var showMenu = $('.show-menu');
		showMenu.toggleClass('menu-opened');
		if(!showMenu.hasClass('menu-opened')) showMenu.text('Menu');
		else showMenu.text('Close');
		$('#menu-menu').rafalMenu();
	}

	$.fn.rafalMenu = function( options ) {
		var elem = $(this);
		elem.children().css({'opacity':0});
		elem.slideToggle(750,'easeInOutQuint',function() {
			elem.children().hide().css({'opacity':1}).fadeIn();
		});
	}

	// kliknięcie w menu item
    $('#header').children('.wrapper').on('click', '#menu-menu a', function(event) {

   		event.preventDefault();
    
    });

	// mobile

	$('#header').on('click', '.show-menu', function(event) {
		toggleMenu();
	});

	// single

	if($('article.single-post').length !== 0) {

		var gallery = $('article.single-post'),
			postID = gallery.attr('data-id');

		 gallery
			.imagesLoaded()
			.always( function( instance ) {
				// loading completed
	      	})
			.progress( function( instance, image ) {
				var $item = $( image.img );
				$item.removeClass('is-loading');
			});

		gallery.children('.fl-item').featherlightGallery({
			closeIcon: 'Close',
			galleryFadeIn: 300,          /* fadeIn speed when slide is loaded */
			galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
		});
	}


	// kliknięcie w obrazek na stronie kategorii
	function initGallery() {

		var contentInside = $('.animation-overflow').children();

	    contentInside.on('click', 'a.post-thumbnail', function(event) {

	    	var rkelem = $(this);
	    	showSinglePostGallery(rkelem,animationTime);
	    	event.preventDefault();

	    });

	}
	function showSinglePostGallery(elem,at) {

		var galleryLink = elem.parent(),
			nextSiblings = galleryLink.nextAll(),
			galleryLinkURL = galleryLink.attr('data-href'),
			openedPostHeight = $('.post-opened').height(),
			rkOffsetTop = 40;

		if(galleryLink.hasClass('closed')) {
			
			galleryLink.removeClass('closed');
			if(isTouch) elem.next().children().fadeIn();
			loader.appendTo(galleryLink.children('.post-title'));

			// zamień atrybut href z linku do single post na ten do dużego obrazka dla featherlight
			var postFulllImgSrc = elem.attr('data-fl');
			elem.attr('href', postFulllImgSrc);
			
			function postAnimate() {
				var dfd = $.Deferred(),
					windowWidth = isNaN(window.innerWidth) ? window.clientWidth : window.innerWidth;

				if(windowWidth > mobileWidth && windowWidth <= 780 ){
					rkOffsetTop = 30;
				}

				if(galleryLink.next().length == 0 ) galleryLink.css({'height':'100vh'});
				
				nextSiblings.fadeOut(1000);
				
				$('html, body').animate({
					scrollTop: galleryLink.offset().top - rkOffsetTop,
				},at,'easeInOutQuint',function() {
					if(galleryLink.next().length == 0 ) galleryLink.removeAttr('style');
					galleryLink.prevAll().appendTo(galleryLink.parent());
					$(window).scrollTop(0);
					var rkHash = elem.parent().attr('id');
					window.location.hash = rkHash;
					// if(history.pushState) {
					//     history.pushState(null, null, rkHash);
					// }
					// else {
					//     location.hash = rkHash;
					// }
					dfd.resolve();
				});
				return dfd.promise();
			}

			function postAjax() {
				return $.ajax({
					url: galleryLinkURL,
					cache: false,
					beforeSend: function() {
						loader.show();
					}}).promise();
			}

			$.when(postAnimate(),postAjax()).done(function( nic, data ) {

				removeImportedPost();

				var response = $('<html />').html(data);

  				var gallery = response.find('.single-post'),
  					postID = gallery.attr('data-id'),
  					galleryImgs = gallery.children().slice(1);

  				galleryImgs.addClass('imported-post').appendTo(galleryLink);
				galleryImgs.parent().addClass('post-opened');

				galleryImgs
					.imagesLoaded()
					.always( function( instance ) {
						if(isTouch) elem.next().children().fadeOut();
			            loader.fadeOut(function() {
			            	loader.remove();
			            });
			            galleryLink.siblings().fadeIn(500);
		          	})
					.progress( function( instance, image ) {
						var $item = $( image.img );
						$item.removeClass('is-loading');
					});

				// initiate featherlight gallery
				elem.addClass('fl-item');
				$('.gallery-' + postID).children('.fl-item').featherlightGallery({
					closeIcon: 'Close',
					galleryFadeIn: 300,          /* fadeIn speed when slide is loaded */
					galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
				});
			});

		}
		
	}
	initGallery();

	// remove style
	if( windowWidth < mobileWidth ) $('.posts-loop').removeAttr('style')
	
	// on resize

	$( window ).resize(function() {

		rkResizeAdapt();
		
	});

	function rkResizeAdapt() {
		var navMenu = $('.nav-menu'),
			showMenu = $('.show-menu'),
			mq = window.matchMedia( "(max-width: 540px)" );
		
		if(navMenu.hasClass('menu-on-the-right')) navMenu.css({'left':menuRightPosition(navMenu)});
		
		if (mq.matches) {
			// from more to less than 540
			$('.posts-loop').css({'left':0});

			$('#menu-menu').hide();

			showMenu.removeClass('menu-opened').text('Menu');

			pageTransitionTime = 1000; // default vertical
		} else {
			// from less to more than 540
			$('#menu-menu').show();
			if(parseInt($('.posts-loop').css('left')) == 0 ) {
				navMenu.addClass('menu-on-the-right').css('left',menuRightPosition(navMenu));
			} else {
				navMenu.css('left',0); 
			}
			pageTransitionTime = 450; // default horizontal
		}
	}

})(jQuery);