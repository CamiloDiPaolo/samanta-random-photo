/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				text: 'text 5s ease infinite',
				rainbow: 'rainbow 5s ease infinite',
				'rainbow-fast': 'rainbow 1s ease infinite',
				'discover-card-1': 'discover-card-1 1s infinite',

				'discover-card-2': 'discover-card-2 1s infinite'
			},
			keyframes: {
				rainbow: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},

					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
				'discover-card-1': {
					'0%, 100%': {
						transform: 'scale(1, 1)'
					},
					'50%': {
						transform: 'scale(0, 1)'
					}
				},
				'discover-card-2': {
					'0%, 100%': {
						transform: 'scale(0, 1)'
					},
					'50%': {
						transform: 'scale(1, 1)'
					}
				}
			}
		}
	},
	plugins: []
};
