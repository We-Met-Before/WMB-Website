function startjsServiceModule() {
	randomFloatServiceIcon();
	// switchService('Branding');
}

// default set

gsap.set(['.mbServiceContent', '.mbServiceIcon'], {
	display: 'none',
});

gsap.set('.mbServiceClick', {
	opacity: 0.25,
});

// default set //re-enable branding content & icons

gsap.set(['#mbBrandingContent', '.mbServiceIconBranding'], {
	display: 'block',
});
gsap.set('#mbBrandingClick', {
	opacity: 1,
	// fontWeight: 600,
});

// onClick op de desbetreffende service (zie parameter) worden de alle servies eerst uitgetweend, (vervolgens op display:none ge-set)
// naderhand wordt de getriggerde (parameter) class/id aangeroepen en display: block geset en naar opacity 1 getweend

function switchService(serviceIdName) {
	gsap.to('.mbServiceContent', {
		opacity: 0,
		duration: 0.5,
		onComplete: function () {
			gsap.set('.mbServiceContent', {
				display: 'none',
			});
		},
	});

	gsap.set('#mb' + serviceIdName + 'Content', {
		delay: 0.5,
		display: 'block',
		onComplete: function () {
			gsap.to('#mb' + serviceIdName + 'Content', {
				opacity: 1,
			});
		},
	});

	gsap.to('.mbServiceIcon', {
		opacity: 0,
		duration: 0.5,
		onComplete: function () {
			gsap.set('.mbServiceIcon', {
				display: 'none',
			});
		},
	});

	gsap.set('.mbServiceIcon' + serviceIdName, {
		delay: 0.5,
		display: 'block',
		onComplete: function () {
			gsap.to('.mbServiceIcon' + serviceIdName, {
				opacity: 1,
			});
		},
	});

	gsap.to('.mbServiceClick', {
		opacity: 0.2,
	});
	// gsap.set('.mbServiceClick', {
	//     fontWeight: 300,
	// })

	gsap.to('#mb' + serviceIdName + 'Click', {
		delay: 0.5,
		opacity: 1,
	});
	gsap.set('#mb' + serviceIdName + 'Click', {
		// fontWeight: 600,
		delay: 0.5,
	});
}

var mbServiceIconClass;
var floatVariation;

// De volgende functie wordt continue geloopt, in deze functie worden de service icons (allemaal), een willekeurig aantal getweend, (x, y as en rotatie verschillend)
// Er zijn 4 variaties van floats, (horizontale variatie, verticale variatie)
// Binnen deze 4 variaties zijn alle getallen nog random, zo zijn er dus oneindig veel combinaties maar wel vaste patronen en consistenties

function randomFloatServiceIcon() {
	mbServiceIconClass = document.getElementsByClassName('mbServiceIcon');

	for (let i = 0; i < mbServiceIconClass.length; i++) {
		floatVariation = Math.floor(Math.random() * 4);

		if (floatVariation == 0) {
			gsap.to('#' + mbServiceIconClass[i].id, {
				duration: 3,
				x: 5 + Math.floor(Math.random() * 20),
				y: 3 + Math.floor(Math.random() * 10),
				rotation: 2,
				ease: Power1.easeInOut,
			});
			gsap.to('#' + mbServiceIconClass[i].id, {
				delay: 3,
				duration: 3,
				x: -5 - Math.floor(Math.random() * 20),
				y: -3 - Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: -2,
			});
		}
		if (floatVariation == 1) {
			gsap.to('#' + mbServiceIconClass[i].id, {
				duration: 3,
				x: -5 - Math.floor(Math.random() * 20),
				y: 3 + Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: -4,
			});
			gsap.to('#' + mbServiceIconClass[i].id, {
				delay: 3,
				duration: 3,
				x: 5 + Math.floor(Math.random() * 20),
				y: -3 - Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: 4,
			});
		}
		if (floatVariation == 2) {
			gsap.to('#' + mbServiceIconClass[i].id, {
				duration: 3,
				x: 10 + Math.floor(Math.random() * 20),
				y: -5 - Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: 8,
			});
			gsap.to('#' + mbServiceIconClass[i].id, {
				delay: 3,
				duration: 3,
				x: -10 - Math.floor(Math.random() * 20),
				y: 5 + Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: -4,
			});
		}
		if (floatVariation == 3) {
			gsap.to('#' + mbServiceIconClass[i].id, {
				duration: 3,
				x: -10 - Math.floor(Math.random() * 20),
				y: -5 - Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: -8,
			});
			gsap.to('#' + mbServiceIconClass[i].id, {
				delay: 3,
				duration: 3,
				x: 10 + Math.floor(Math.random() * 20),
				y: 5 + Math.floor(Math.random() * 10),
				ease: Power1.easeInOut,
				rotation: 4,
			});
		}
	}

	setTimeout(randomFloatServiceIcon, 6000);
}
