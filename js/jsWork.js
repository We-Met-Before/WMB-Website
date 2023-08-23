let workCx = {
	title: document.querySelector('.mbStoryTextWork'),
	trigger: document.querySelector('.mbPortfolioList'),
};

let workTl = gsap.timeline({
	scrollTrigger: {
		start: '25% 50%',
		end: '170% 50%',
		trigger: workCx.trigger,
		scrub: true,
	},
});

if (!isMobile) {
    workTl.to(workCx.title, {
        scale: 0.9,
        duration: 0.15,
    }).to(workCx.title, {
        yPercent: -300,
    }, '+=0.1')
}


// if (isMobile) {
//     return 
// 	workTl.to(workCx.title, {
//         opacity: 0.5,
//         duration: 0.15,
//     }).to(workCx.title, {
// 		yPercent: -300,
// 	}, '+=0.1')
// } else {
// 	workTl.to(workCx.title, {
//         scale: 0.9,
//         duration: 0.15,
//     }).to(workCx.title, {
//         yPercent: -300,
//     }, '+=0.1')
// }
