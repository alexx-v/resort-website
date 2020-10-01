jQuery(document).ready(function ($) {
	'use strict';

	var top_header = $('.parallax');
	// top_header.css({ 'background-position': 'center center' });

	$(window).scroll(function () {
		var st = $(this).scrollTop();
		top_header.css({
			'background-position': 'center calc(50% + ' + st * 0.5 + 'px)',
		});
	});

	// Tabs
	$('.tabs__btns > a').on('click', function (e) {
		e.preventDefault();

		var id = $(this).attr('href');
		$(this).addClass('tabs__btn--active');

		$('.tabs__content')
			.find('.tabs__item--active')
			.each(function () {
				$(this).removeClass('tabs__item--active');
			});

		$('.tabs__btns')
			.find('.tabs__btn--active')
			.each(function () {
				$(this).removeClass('tabs__btn--active');
			});

		$(id).addClass('tabs__item--active');
		$(this).addClass('tabs__btn--active');
	});

	// Scrollspy
	smartScroll.init({
		speed: 700, // default 500
		addActive: true, // default true
		activeClass: 'navbar__item--active', // default active
		offset: 1, // default 100
	});

	// Smooth scroll (click on button).
	$('.primary__btn').on('click', function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== '') {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate(
				{
					scrollTop: $(hash).offset().top,
				},
				700,
				function () {
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				}
			);
		} // End if
	});

	// Tiny-slider
	$('.slider').removeClass('visually-hidden');

	tns({
		container: '.slider',
		items: 1,
		gutter: 30,
		slideBy: 1,
		controls: false,
		autoplay: true,
		autoplayButtonOutput: false,
		navPosition: 'bottom',
		speed: 400,
		responsive: {
			768: {
				gutter: 20,

				items: 2,
			},
			960: {
				items: 3,
				gutter: 30,
				center: false,
			},
		},
	});

	baguetteBox.run('.slider');

	// Remove blur
	$('a, button').mouseup(function () {
		$(this).blur();
	});
});
