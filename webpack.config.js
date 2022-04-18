const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './index.html',
});

module.exports = {
	entry: './src/index.tsx',

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							sourceMap: false,
						},
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: 'url-loader',
				},
			},
			{
				test: /\.svg$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},

	plugins: [htmlPlugin],

	devServer: {
		liveReload: true,
		port: 3000,
		historyApiFallback: true,
	},
};
