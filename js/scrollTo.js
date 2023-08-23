function goTo(section) {
	if (canScroll) {
		switch (section) {
			case 0:
				smoother.scrollTo('#smooth-content', false, ' top');
				break;
			case 1:
				smoother.scrollTo('#anchorIntro', false, ' center');
				break;
			case 2:
				smoother.scrollTo('#anchorWork', false, ' center');
				break;
			case 3:
				smoother.scrollTo('#anchorServices', false, 'top top');
				break;
			case 4:
				smoother.scrollTo('#anchorContact', false, 'top top');
				break;
		}
	}
}

ScrollTrigger.create({
	start: 'top 10%',
	end: 'bottom -100%',
	endTrigger: '#anchorStory',
	trigger: '#anchorIntro',
	// markers: true,
	onEnter: () => showIconStory(),
	onEnterBack: () => {
		showIconStory();
		hideIconWork();
	},
	onLeave: () => {
		hideIconStory();
		showIconWork();
	},
});
function showIconStory() {
	// gsap.to('.mbMenuBolStory', { opacity: 1 });
}
function hideIconStory() {
	// gsap.to('.mbMenuBolStory', { opacity: 0 });
}

ScrollTrigger.create({
	start: 'top -100%',
	end: 'bottom 10%',
	trigger: '#anchorWork',
	// markers: true,
	onEnterBack: () => {
		showIconWork();
		hideIconServices();
	},
	onLeave: () => {
		hideIconWork();
		showIconServices();
	},
});
function showIconWork() {
	// gsap.to('.mbMenuBolWork', { opacity: 1 });
}
function hideIconWork() {
	// gsap.to('.mbMenuBolWork', { opacity: 0 });
}

ScrollTrigger.create({
	start: 'top 50%',
	end: 'bottom 50%',
	trigger: '#anchorServices',
	// markers: true,
	onEnterBack: () => {
		showIconServices();
	},
});
function showIconServices() {
	// gsap.to('.mbMenuBolServices', { opacity: 1 });
}
function hideIconServices() {
	// gsap.to('.mbMenuBolServices', { opacity: 0 });
}

ScrollTrigger.create({
	start: 'top 50%',
	end: 'bottom bottom',
	trigger: '#anchorContact',
	//markers: true,
	onLeave: () => {
		hideIconServices();
		showIconContact();
	},
	onEnterBack: () => {
		showIconServices();
		hideIconContact();
	},
});
function showIconContact() {
	// gsap.to('.mbMenuBolContact', { opacity: 1 });
}
function hideIconContact() {
	// gsap.to('.mbMenuBolContact', { opacity: 0 });
}

// function rotateLogo() {
// 	gsap.to('.logoWmb', {rotate: 180});
// }
// function stopLogo() {
// 	gsap.to('.logoWmb', {	rotate: 350, repeat: 0});
// }
