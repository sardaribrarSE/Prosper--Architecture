import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./app/**/*.{ts,tsx,js,jsx}',
		'./components/**/*.{ts,tsx,js,jsx}',
		'./lib/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'var(--primary-50)',
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
					800: 'var(--primary-800)',
					900: 'var(--primary-900)'
				},
				grey: {
					50: 'var(--grey-50)',
					100: 'var(--grey-100)',
					200: 'var(--grey-200)',
					300: 'var(--grey-300)',
					400: 'var(--grey-400)',
					500: 'var(--grey-500)',
					600: 'var(--grey-600)',
					700: 'var(--grey-700)',
					800: 'var(--grey-800)',
					900: 'var(--grey-900)'
				},
				cream: 'var(--cream)',
				white: 'var(--white)',
				black: 'var(--black)'
			}
		}
	},
	plugins: []
}

export default config

