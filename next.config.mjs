import CopyWebpackPlugin from "copy-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.experiments = {
			...config.experiments,
			topLevelAwait: true,
		};

		config.plugins.push(
			// instructions at:
			// https://github.com/curlconverter/curlconverter?tab=readme-ov-file#usage-as-a-library
			new CopyWebpackPlugin({
				patterns: [
					"node_modules/web-tree-sitter/tree-sitter.wasm",
					"node_modules/curlconverter/dist/tree-sitter-bash.wasm",
				],
			})
		);
		return config;
	},
};

export default nextConfig;
