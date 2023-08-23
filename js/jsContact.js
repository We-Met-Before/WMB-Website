// gsap.to('.mbContactAstroid_left', {
// 	x: 'random(-50, 100)',
// 	y: 'random(-50, 100)',
// 	rotation: 'random(-45, 45)',
// 	ease: 'power1.inOut',
// 	duration: 10,
// 	repeat: -1,
// 	repeatRefresh: true,
// });
// gsap.to('.mbContactAstroid_right', {
// 	x: 'random(-50, 100)',
// 	y: 'random(-50, 100)',
// 	rotation: 'random(-45, 45)',
// 	ease: 'power1.inOut',
// 	duration: 10,
// 	repeat: -1,
// 	repeatRefresh: true,
// });

gsap.set('.mbContactHeadsWrapper', { scale: 1.5, transformOrigin: 'center' });
gsap.set('.mbFooterHead1', {
	yPercent: -100,
	xPercent: -25,
	autoAlpha: 0,
	rotate: 15,
});
gsap.set('.mbFooterHead2', {
	yPercent: 100,
	xPercent: 25,
	autoAlpha: 0,
	rotate: -15,
});
gsap.set('.mbFooterBoll', { scale: 0, alpha: 0, transformOrigin: 'center' });

ScrollTrigger.create({
	trigger: '.mbContactHeadsWrapper',
	start: 'top 10%',
	end: '+=90%',
	// markers: true,
	once: true,
	onEnter: () => {
		// if (isMobile || isSafari) {
		let contactTl = gsap.timeline();
		contactTl.to(
			'.mbContactHeadsWrapper',
			{ scale: 1, transformOrigin: 'center', duration: 2 },
			'-=0'
		);
		contactTl.to(
			'.mbFooterHead1',
			{
				yPercent: -50,
				xPercent: 0,
				rotation: -15,
				autoAlpha: 1,
				duration: 2,
			},
			'-=2'
		);
		contactTl.to(
			'.mbFooterHead2',
			{ yPercent: 50, xPercent: 0, rotation: -15, autoAlpha: 1, duration: 2 },
			'-=2'
		);
		contactTl.to(
			'.mbFooterBoll',
			{ scale: 1, alpha: 1, transformOrigin: 'center', duration: 0.5 },
			'-=0.5'
		);
		gsap.to('.mbContactHeadsWrapper', {
			rotate: -360,
			transformOrigin: 'center',
			repeat: -1,
			ease: 'power0',
			duration: 30,
		});
		// }
	},
	onLeave: () => {
		// if (!isMobile) {
		let contactTl = gsap.timeline();
		contactTl.to(
			'.mbContactHeadsWrapper',
			{ scale: 1, transformOrigin: 'center', duration: 2 },
			'-=0'
		);
		contactTl.to(
			'.mbFooterHead1',
			{
				yPercent: -50,
				xPercent: 0,
				rotation: -15,
				autoAlpha: 1,
				duration: 1.5,
			},
			'-=2'
		);
		contactTl.to(
			'.mbFooterHead2',
			{
				yPercent: 50,
				xPercent: 0,
				rotation: -15,
				autoAlpha: 1,
				duration: 1.5,
			},
			'-=2'
		);
		contactTl.to(
			'.mbFooterBoll',
			{ scale: 1, alpha: 1, transformOrigin: 'center', duration: 0.25 },
			'-=0.5'
		);
		gsap.to('.mbContactHeadsWrapper', {
			rotate: -360,
			transformOrigin: 'center',
			repeat: -1,
			ease: 'power0',
			duration: 30,
		});
		// }
	},
});
var serviceTitle = gsap.timeline({
	defaults: {
		ease: 'Power2.easeOut',
		duration: 1,
	},
	scrollTrigger: {
		trigger: '.footer_container',
		start: 'top 60%',
		end: 'bottom 90%',
		//markers:true,
		scrub: true,
	},
});
serviceTitle.to(
	'.mbServicesIntro_h2Container',
	{ opacity: 0, duration: 1 },
	'-=0'
);
serviceTitle.to(
	'.mbServicesContainerIntro',
	{ opacity: 0, duration: 1 },
	'-=1'
);
