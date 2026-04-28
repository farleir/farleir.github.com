import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Farleir Hub',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/farleir' }],
			sidebar: [
				{
					label: 'Hub (Início)',
					link: '/',
				},
				{
					label: 'Portfólio',
					link: '/portfolio',
				},
				{
					label: 'Aplicativos',
					link: '/aplicativos',
				},
			],
		}),
		tailwind(),
	],
});
