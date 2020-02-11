var mySlugify = function (str) {
	const rControl = /[\u0000-\u001f]/g;
	const rRemove = /[‘’]+/g;
	const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”–—<>…,.?/]+/g;

	return str
		// Remove diacritics
		.replace(/ä/g, "a").replace(/ë/g, "e").replace(/ï/g, "i").replace(/ö/g, "o").replace(/ü/g, "u")
		// Remove control characters
		.replace(rControl, '')
		// Remove control characters
		.replace(rRemove, '')
		// Replace special characters
		.replace(rSpecial, '-')
		// Remove continuous separators
		.replace(/\-{2,}/g, '-')
		// Remove prefixing and trailing separators
		.replace(/^\-+|\-+$/g, '')
		// ensure it doesn't start with a number (#121)
		.replace(/^(\d)/, '_$1')
		// lowercase
		.toLowerCase()


}

module.exports = {

	title: "A Course in Consciousness",
	description: "A course in consciousness. Quantum theory of consciousness. The metaphysics of nonduality. The end of suffering. The discovery of our true nature.",
	head: [
		["meta", { name: "keywords", content: "consciousness,quantum theory,nonduality,advaita,noumenon,metaphysics,end of suffering,true nature" }],
		["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
		["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
		["link", { rel: "manifest", href: "/site.webmanifest" }]
	],


	markdown: {
		extendMarkdown: md => {
			[
				md.use(require("markdown-it-footnote")),
				md.use(require("markdown-it-sub")),
				md.use(require("markdown-it-sup"))
			]
		},
		slugify: mySlugify,
		toc: {
			slugify: mySlugify
		},
		externalLinks: { target: "_self", rel: "noopener noreferrer" }
	},


	themeConfig: {
		smoothScroll: true,
		search: false,
		nav: [
			{ text: "Home", link: "/" },
			{ text: 'Dialogue in Consciousness', link: "/dialogue-consciousness/" },
			{
				text: "Part 1",
				items: [
					{ text: "Foreword", link: "/foreword/" },
					{ text: "Preface to Part 1", link: "/part-1-quantum-theory-consciousness/" },
					{ text: "1. The Three Major Metaphysical Philosophies", link: "/chapter-1-three-major-metaphysical-philosophies/" },
					{ text: "2. Classical Physics from Newton to Einstein", link: "/chapter-2-classical-physics-newton-einstein/" },
					{ text: "3. Quantum physics from Planck and Einstein to Bohr, Heisenberg, de Broglie and Schrödinger", link: "/chapter-3-quantum-physics" },
					{ text: "4. Waves and Interference, Schrödinger’s Cat Paradox and Bell’s Inequality", link: "/chapter-4-waves-interference/" },
					{ text: "5. Conscious Mind and Free Will", link: "/chapter-5-conscious-mind-free-will/" },
					{ text: "6. What Does Quantum Theory Mean?", link: "/chapter-6-what-does-quantum-theory-mean/" }
				]
			},
			{
				text: "Part 2",
				items: [
					{ text: "Preface to Part 2", link: "/part-2-metaphysics-non-duality/" },
					{ text: "7. Summary and critique of Amit Goswami’s interpretation of quantum theory within monistic idealism", link: "/pter-7-summary-critique-amit-goswami-interpretation-quantum-theory-within-monistic-idealism/" },
					{ text: "8. Transcendental Realms", link: "/chapter-8-transcendental-realms/" },
					{ text: "9. Perceiving and Conceptualising", link: "/chapter-9-perceiving-conceptualising/" },
					{ text: "10. The Teaching of Non-Duality", link: "/chapter-10-teaching-non-duality/" },
					{ text: "11. The Functioning of the Mind", link: "/chapter-11-functioning-mind/" },
					{ text: "12. Space, Time, Causality and Destiny", link: "/chapter-12-space-time-causality-destiny/" },
					{ text: "13. Some Useful Metaphors", link: "/chapter-13-some-useful-metaphors/" },
					{ text: "14. Religion, Belief and Non-Duality", link: "/chapter-14-religion-belief-non-duality/" },
					{ text: "15. Free Will and Responsibility", link: "/chapter-15-free-will-responsibility/" },
					{ text: "16. Love Seeking Itself", link: "/chapter-16-love-seeking-itself/" }
				]
			},
			{
				text: "Part 3",
				items: [
					{ text: "Preface to Part 3", link: "/part-3-end-suffering-discovery-true-nature/" },
					{ text: "17. How to Live One’s Life", link: "/chapter-17-how-live-ones-life/" },
					{ text: "18. Practices and Teachers", link: "/chapter-18-practices-teachers" },
					{ text: "19. Surrender, Mantra and Trust", link: "/chapter-19-surrender-mantra-trust/" },
					{ text: "20. Understanding by Direct Seeing", link: "/chapter-20-understanding-direct-seeing/" },
					{ text: "21. Resistance, Clinging and Acceptance", link: "/chapter-21-resistance-clinging-acceptance/" },
					{ text: "22. Disidentification from Attachment and Aversion", link: "/chapter-22-disidentification-from-attachment-aversion/" },
					{ text: "23. Disidentification Through Inquiry", link: "/chapter-23-disidentification-through-inquiry/" },
					{ text: "24. Disidentification Through Meditation", link: "/chapter-24-disidentification-through-meditation/" },
					{ text: "25. Love Finding Itself", link: "/chapter-25-love-finding-itself/" },
					{ text: "26. Very Short Summary", link: "/chapter-26-very-short-summary/" },
					{ text: "Appendix. My Resources and Teachers", link: "/appendix-my-resources-and-teachers/" }
				]
			}
		],
		sidebar: [
			"/dialogue-consciousness/",
			"/foreword/",
			"/part-1-quantum-theory-consciousness/",
			"/chapter-1-three-major-metaphysical-philosophies/",
			"/chapter-2-classical-physics-newton-einstein/",
			"/chapter-3-quantum-physics/",
			"/chapter-4-waves-interference/",
			"/chapter-5-conscious-mind-free-will/",
			"/chapter-6-what-does-quantum-theory-mean/",
			"/part-2-metaphysics-non-duality/",
			"/chapter-7-summary-critique-amit-goswami-interpretation-quantum-theory-within-monistic-idealism/",
			"/chapter-8-transcendental-realms/",
			"/chapter-9-perceiving-conceptualising/",
			"/chapter-10-teaching-non-duality/",
			"/chapter-11-functioning-mind/",
			"/chapter-12-space-time-causality-destiny/",
			"/chapter-13-some-useful-metaphors/",
			"/chapter-14-religion-belief-non-duality/",
			"/chapter-15-free-will-responsibility/",
			"/chapter-16-love-seeking-itself/",
			"/part-3-end-suffering-discovery-true-nature/",
			"/chapter-17-how-live-ones-life/",
			"/chapter-18-practices-teachers/",
			"/chapter-19-surrender-mantra-trust/",
			"/chapter-20-understanding-direct-seeing/",
			"/chapter-21-resistance-clinging-acceptance/",
			"/chapter-22-disidentification-from-attachment-aversion/",
			"/chapter-23-disidentification-through-inquiry/",
			"/chapter-24-disidentification-through-meditation/",
			"/chapter-25-love-finding-itself/",
			"/chapter-26-very-short-summary/",
			"/appendix-my-resources-and-teachers/"
		]
	},
	evergreen: true,
	plugins: ["vuepress-plugin-medium-zoom", "@vuepress/back-to-top"]


}