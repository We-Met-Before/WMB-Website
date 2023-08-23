gsap.set('.mbStoryCirBor', {
	autoAlpha: 0.0,
});

function storyMobileAnimation() {
	gsap.set('.mbStoryCirBor', {
		scale: 2,
	});

	gsap.set('.mbStoryItem', {
		opacity: 0,
		yPercent: 25,
	});

	var storyAniMobile = gsap.timeline({
		defaults: {
			ease: 'Power2.ease',
			duration: 1,
		},
		onComplete() {
			console.log('timeline completed');
		},
		scrollTrigger: {
			start: '-100% 100%',
			end: '80% 10%',
			scrub: true,
			pin: '.mbStory',
			// markers: true,
		},
	});

	storyAniMobile
		.to('.mbStoryCirBor', {
			scale: 1,
			// autoAlpha: 0.2,
		})

		.to(
			['.mbStoryItem'],
			{
				yPercent: 0,
				opacity: 1,
			}
			// '-=1.5'
		)
		.to('.mbStoryCirBor1', {
			marginLeft: '50%',
			duration: 2,
			autoAlpha: 0.2,
			// opacity: 0.4,
		})
		.to(
			'.mbStoryCirBor2',
			{
				marginRight: '50%',
				duration: 2,
				autoAlpha: 0.2,
				// opacity: 0.4,
			},
			'-=2'
		)
		.to(
			'.mbWelcomeTheIntro2',
			{
				opacity: 1,
			},
			'-=1.5'
		)
		.to('.upperCircleRotateContainer', {
			scale: 5,
			autoAlpha: 0,
		})
		.to(
			'.circleBlackBlur',
			{
				width: '20rem',
				height: '20rem',
				// scale: 40,
				opacity: 1,
				duration: 1.9,
			},
			'-=1'
		)
		.to(
			'.mbRotateLogoCirlce',
			{
				scale: 2,
				opacity: 0,
			},
			'-=1.5'
		)
		.to(
			'.mbStoryCirBor',
			{
				scale: 2.5,
			},
			'-=1.5'
		)
		.to(
			'.mbStoryCirBor',
			{
				autoAlpha: 0,
			},
			'-=2.5'
		)
		.to(
			['.mbStoryTextYou', '.mbStoryTextUs'],
			{
				opacity: 0,
			},
			'-=1.5'
		);
	// .to(
	//     '.mbStoryTextWork',
	//     {
	//         opacity: 0,
	//     },
	//     '-=.8'
	// );
}

function storyDesktopAnimation() {
	gsap.set('.mbStoryCirBor', {
		scale: 1.5,
		autoAlpha: 0.0,
	});

	gsap.set('.mbStoryItem', {
		opacity: 0,
	});

	gsap.set('.mbStoryCirBor1', {
		marginLeft: '40%',
	});

	gsap.set('.mbStoryCirBor2', {
		marginRight: '40%',
	});

	var storyAniDesktop = gsap.timeline({
		defaults: {
			ease: 'Power2.ease',
			duration: 1,
		},
		onStart: () => {
			console.log('start');
			document.querySelector('.ScrollSmoother-wrapper').style.zIndex = 1;
		},
		// onComplete: () => {
		//     document.querySelector('.ScrollSmoother-wrapper').style.zIndex = 1
		// },
		scrollTrigger: {
			start: '-125% 100%',
			end: '100% 50%',
			scrub: true,
			// markers: true,
			pin: '.mbStory',
		},
	});

	storyAniDesktop
		.to(
			'.mbStoryCirBor',
			{
				scale: 1,
				autoAlpha: 0.2,
			},
			'-=.4'
		)

		.to(
			'.mbStoryCirBor1',
			{
				marginLeft: '25%',
				duration: 3,
				// opacity: 0.3,
			},
			'-=.7'
		)
		.to(
			'.mbStoryCirBor2',
			{
				marginRight: '25%',
				duration: 3,
				// opacity: 0.3,
			},
			'-=3'
		)
		.to(
			'.mbStoryTextContainer',
			{
				gap: '10em',
			},
			'-=2.6'
		)
		.to(
			['.mbStoryItem'],
			{
				// x: 0,
				scale: 1,
				opacity: 1,
			},
			'-=2.6'
		)
		.to(
			'.mbWelcomeTheIntro2',
			{
				opacity: 1,
			},
			'-=.5'
		)
		.to(
			'.mbWelcomeTheIntro2',
			{
				opacity: 0,
				// duration: 1.5,
			},
			'+=1'
		)
		.to('.upperCircleRotateContainer', {
			scale: 2.2,
			autoAlpha: 0,
		})
		.to(
			'.mbStoryCirBor',
			{
				scale: 2.5,
				autoAlpha: 0,
			},
			'-=2'
		)
		.to(
			'.mbStoryTextContainer',
			{
				gap: '12em',
			},
			'-=2'
		)
		.to(
			['.mbStoryTextYou', '.mbStoryTextUs'],
			{
				opacity: 0,
			},
			'-=2'
		)
		.to(
			'.mbRotateLogoCirlce',
			{
				scale: 3.4,
				duration: 2.5,
			},
			'-=2'
		)
		.to(
			'.circleBlackBlur',
			{
				width: '300px',
				height: '300px',
				opacity: 1,
				duration: 3,
			},
			'-=2'
		)
		.to(
			'.mbRotateLogoCirlce',
			{
				opacity: 0,
			},
			'-=1'
		);
	// .to(
	//     '.mbStoryTextWork',
	//     {
	//         opacity: 0,
	//     }
	// );
}

if (isMobile) {
	storyMobileAnimation();
} else {
	storyDesktopAnimation();
}
