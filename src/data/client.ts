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
	email: "help@codestitch.app",
	phoneForTel: "555-779-4407",
	phoneFormatted: "(555) 779-4407",
	logo: "/assets/favicons/favicon.svg",
	address: {
		lineOne: "First Address Line",
		lineTwo: "Second Address Line",
		city: "Denver",
		state: "CO",
		zip: "80206",
		mapLink: "https://goo.gl/maps/UAQn4vuGDiwv7DV39",
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
