let data = [
	{
		title: 'On Chain Smokers',
		excerpt: 'Branding, Design &amp; Development',
		slug: 'on-chain-smokers',
		path: 'assets/images/ocs.png',
		url: 'https://onchainsmokers.com/',
	},
	{
		title: 'Sinkit',
		excerpt: 'Branding, Design &amp; Development',
		slug: 'sinkit',
		path: 'assets/images/sinkit.png',
		url: 'https://sinkit.com/',
	},
	{
		title: 'i-Cam',
		excerpt: 'Branding, Design &amp; Development',
		slug: 'i-cam',
		path: 'assets/images/i-cam.png',
		url: 'https://i-cam.nl/',
	},
	{
		title: 'Living Creations',
		excerpt: 'Branding, Design &amp; Development',
		slug: 'living-creations',
		path: 'assets/images/living-creations.png',
		url: 'https://livingcreations.com/',
	},
	{
		title: 'Moni',
		excerpt: 'Branding, Design &amp; Development',
		slug: 'moni',
		path: 'assets/images/moni.png',
		url: 'https://moni.nl/',
	},
	{
		title: 'North  Kitesurfing',
		excerpt: 'UX / Webdesign',
		slug: 'north',
		url: 'https://northkb.com/',
	},
	{
		title: 'Bethnal Green Ventures',
		excerpt: 'Branding, Design &amp; Development',
		slug: 'bgv',
		url: 'https://bethnalgreenventures.com/',
	},
	{
		title: 'Plantible',
		excerpt: 'Development',
		slug: 'plantible',
		url: 'https://plantible.com/',
	},
	{
		title: 'Rockstar Lifestyle',
		excerpt: 'Design &amp; Development',
		slug: 'rockstar-lifestyle',
		url: 'https://rockstarlifestyle.com/',
	},
	{
		title: 'De Eeuwige Jeugd',
		excerpt: 'Design &amp; Development',
		slug: 'de-eeuwige-jeugd',
		url: 'https://www.deeeuwigejeugd.nl/',
	},
	{
		title: 'Orderchamp',
		excerpt: 'Logo, Branding &amp; Animation',
		slug: 'orderchamp',
		url: 'https://orderchamp.com/',
	},
	{
		title: 'We Met Before',
		excerpt: 'Logo, Branding, Design &amp; Development',
		slug: 'our-brand',
		url: 'https://wemetbefore.com/',
	},
];

let portfolioList = document.querySelector('.mbPortfolioList');
let portfolioItem = document.querySelector('.mbPortfolioItem');

data.forEach(function (item, index) {
	let clone = portfolioItem.cloneNode(true);

	let link = clone.querySelector('.mbPortfolioItem_link');
	let image = clone.querySelector('.mbPortfolioItem_image');
	let title = clone.querySelector('.mbPortfolioItem_title');
	let excerpt = clone.querySelector('.mbPortfolioItem_excerpt');

	link.setAttribute('href', item.url);
	image.setAttribute('src', item.path);
	image.setAttribute('alt', `${item.title} x We Met Before`);

	title.textContent = item.title;
	excerpt.innerHTML = item.excerpt;

	clone.id = `mbPortfolioItem-${index + 1}`;

	portfolioList.appendChild(clone);
});

portfolioList.removeChild(portfolioList.children[0]);
