var Typed = require('./typed.min.js');

var typed = new Typed('#typed', {
	strings: [
		"Search by city", 
		"Los Angeles", 
		"Search by zip code", 
		"90210", 
		"Search by video",
		"Vans Spinning Away"
	],
  	attr: 'placeholder',
  	startDelay: 50,
  	typeSpeed: 50,
  	backSpeed: 50,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity
});