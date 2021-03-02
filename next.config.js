const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

runtimeCaching[0].handler = 'StaleWhileRevalidate';

module.exports = withPWA({
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
		register: false,
		skipWaiting: false,
		runtimeCaching,
	},
	webpack: (config, { isServer }) => {
		// Fixes packages that depend on fs/module module
		if (!isServer) {
			config.node = { fs: 'empty', module: 'empty' };
		}

		return config;
	},
	images: {
		deviceSizes: [640, 768, 1024, 1280, 1536],
	},
});
