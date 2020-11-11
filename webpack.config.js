const path = require('path');

module.exports = {
	mode: "development", // "production" | "development" | "none"
	entry: "./client.js",
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	/*optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},*/
	devServer:{
		https: false,
	    port: 8081,
	    contentBase:"./"
	}
};
