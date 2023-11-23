const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { javascript, AutomaticPrefetchPlugin } = require('webpack');


module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html'
		}),
		new CleanWebpackPlugin()
	],
	devtool: 'inline-source-map',
	mode: 'development',
	entry: {
		header: {
			import: path.resolve(__dirname, './modules/header/header.js'),
			dependOn: 'shared'
		},
		body: {
			import: path.resolve(__dirname, './modules/body/body.js'),
			dependOn: 'shared'
		},
		footer: {
			import: path.resolve(__dirname, './modules/footer/footer.js'),
			dependOn: 'shared'
		},
		shared: 'jquery'
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].bundle.js',
	},
	devServer: {
		static: path.resolve(__dirname,'public'),
		open: true,
		port: 8564
	},
	performance: {
		maxAssetSize: 1000000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			},
		],
	},
};