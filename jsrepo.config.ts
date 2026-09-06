import { defineConfig } from 'jsrepo';

export default defineConfig({
	registries: ['https://reactbits.dev/r/registry.json'],
	paths: {
		component: './components/reactbits',
	},
});