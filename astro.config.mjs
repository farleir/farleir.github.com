// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Farleir Hub',
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
	],
});
