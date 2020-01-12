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
			{
				title: "Part 1 Quantum Theory and Consciousness",
				path: "/part-1-quantum-theory-consciousness/",
				children: [
					"/chapter-1-three-major-metaphysical-philosophies/",
					"/chapter-2-classical-physics-newton-einstein/",
					"/chapter-3-quantum-physics/",
					"/chapter-4-waves-interference/",
					"/chapter-5-conscious-mind-free-will/",
					"/chapter-6-what-does-quantum-theory-mean/",
					"/chapter-7-summary-critique-amit-goswami-interpretation-quantum-theory-within-monistic-idealism/"
				]
			},
			{
				title: "Part 2 The Metaphysics of Non-Duality",
				path: "/part-2-metaphysics-non-duality/",
				children: [
					"/chapter-7-summary-critique-amit-goswami-interpretation-quantum-theory-within-monistic-idealism/",
					"/chapter-9-perceiving-conceptualising/",
					"/chapter-11-functioning-mind/",
					"/chapter-12-space-time-causality-destiny/",
					"/chapter-16-love-seeking-itself/"
				]
			},
			{
				title: "Part 3 The End of Suffering and the Discovery of Our True Nature",
				path: "/part-3-end-suffering-discovery-true-nature/",
				children: [
					"chapter-23-disidentification-through-inquiry/",
					"chapter-24-disidentification-through-meditation/"
				]
			}
		]
	},
	evergreen: true,
	plugins: ["vuepress-plugin-medium-zoom", "@vuepress/back-to-top"]
	
	
}