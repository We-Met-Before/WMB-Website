let servicesCx = {
	wrapper: document.querySelector('.mbServicesContainerWrapper'),
	title: document.querySelector('.mbServicesIntro_h2'),
	astroidsWrapper: document.querySelector('.mbServicesContainerIntro'),
	astroids: document.querySelectorAll('.mbServicesIntro_Asteroid'),
	content: document.querySelector('.mbServicesContainer'),
};

if (!isMobile) {
	gsap.set(servicesCx.astroidsWrapper, {
		scale: 2,
		transformOrigin: 'center',
		filter: 'blur(50px)',
	});

	let serviceTl = gsap.timeline({
		defaults: {
			duration: 2,
			ease: Power1.easeOut,
		},
		scrollTrigger: {
			trigger: servicesCx.wrapper,
			start: 'top top',
			bottom: 'bottom bottom',
			scrub: true,
			pin: true,
			//markers:true,
		},
	});

	serviceTl.to(
		servicesCx.astroidsWrapper,
		{
			scale: 1.0,
			filter: 'blur(0px)',
			duration: 0.25,
		},
		'start'
	);
}

document.addEventListener('DOMContentLoaded', function () {
	let thumbnails = new Splide('#thumbnail-carousel', {
		// rewind: true,
		perPage: 1,
		padding: '6.5rem',
		focus: 'center',
		type: 'loop',
		gap: '2.5rem',
		pagination: false,
		arrows: false,
		isNavigation: true,
		start: 1,
	});

	let main = new Splide('#main-carousel', {
		type: 'fade',
		// rewind: true,
		focus: 'center',
		pagination: false,
		arrows: false,
		start: 1,
	});

	const carouselList = ['Branding', 'Design', 'Development'];

	main.on('move', function (e) {
		switchService(carouselList[e]);
	});

	main.sync(thumbnails);
	main.mount();
	thumbnails.mount();
});
