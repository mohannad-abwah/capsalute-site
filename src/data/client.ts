// ===== SITE CONSTANTS =====
export const SITE = {
	name: "Capsalute",
	title: "Private smart spaces",
	tagline: "Eliminating the need to pick between privacy and smart comfort",
	description: "We build privacy-first, local smart home systems designed around reliability, security, and long-term ownership. Because your home should outlast trends, platforms, and product cycles.",
	url: "https://capsalute.ca",
	author: "Capsalute Inc.",
	locale: "en",
};

// ===== BUSINESS INFO =====
export const BUSINESS = {
	name: SITE.title,
	logo: "/assets/favicons/favicon.svg",
	address: {
		city: "Burnaby",
		state: "BC",
		zip: "V5G",
		mapLink: "https://maps.app.goo.gl/s1GoQgvAr4qsq6fv8",
	},
	socials: {
		facebook: "https://www.facebook.com/",
		instagram: "https://www.instagram.com/",
	},
};

// ===== SEO DEFAULTS =====
export const SEO = {
	title: SITE.title,
	description: SITE.description,
};

// ===== OPEN GRAPH DEFAULTS =====
export const OG = {
	locale: "en_US",
	image: "/assets/social.jpg", // Default fallback social image located in public/
};
