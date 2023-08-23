gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// create the smooth scroller FIRST!
let smoother = ScrollSmoother.create({
	smooth: 1, // seconds it takes to "catch up" to native scroll position
	smoothTouch: 0.25,
	effects: false, // look for data-speed and data-lag attributes on elements and animate accordingly
	content: '#smooth-content',
});
