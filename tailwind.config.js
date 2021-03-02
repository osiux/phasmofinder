module.exports = {
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						'ul > li': false,
						'ul > li::before': false,
					},
				},
				sm: {
					css: {
						'ul > li': false,
						'ul > li::before': false,
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
