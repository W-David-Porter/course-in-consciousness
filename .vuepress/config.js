module.exports = {

	title: "A Course in Consciousness",
	description: "This is a course in seeing, not in believing.",
	markdown: {
    extendMarkdown: md => {
			[
				md.use(require("markdown-it-footnote")),
				md.use(require("markdown-it-sub")),
				md.use(require("markdown-it-sup"))
			]
    }
	},
  themeConfig: {
    smoothScroll: true,
    nav: [
			{ text: "Home", link: "/" }, 
			{ text: 'Dialogue in Consciousness', link: "/dialogue-consciousness/"},
			{ text: "Part 1", link: "/part-1-quantum-theory-consciousness/"},
			{ text: "Part 2", link: "/part-2-metaphysics-non-duality/"},
			{ text: "Part 3", link: "/part-3-end-suffering-discover-true-nature/"}

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
			"/appendix/"
		]
	},
	evergreen: true,
	plugins: ["vuepress-plugin-medium-zoom", "@vuepress/back-to-top"]
	
	
}