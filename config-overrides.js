/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-06-21 15:28:19
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-06 16:15:30
 */
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { override, fixBabelImports, addPostcssPlugins, addWebpackAlias } = require('customize-cra');
const path = require('path');
const WebpackBar = require('webpackbar');
const paths = require('react-scripts/config/paths');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const alter_config = () => (config) => {
	if (IS_PRODUCTION) {
		const distName = `dist_${process.env.REACT_APP_NODE_ENV}`;
		config.devtool = false;
		paths.appBuild = path.join(path.dirname(paths.appBuild), distName);
		config.output.path = path.join(path.dirname(config.output.path), distName);
		config.plugins = [
			...config.plugins,
			new WebpackBar(),
			new FileManagerPlugin({
				onEnd: {
					delete: [ `./${distName}.zip` ],
					archive: [ { source: `./${distName}`, destination: `./${distName}.zip` } ]
				}
			})
		];
	}
	return config;
};
module.exports = override(
	alter_config(),
	addWebpackAlias({
		['@']: path.resolve(__dirname, './src'),
		['@components']: path.resolve(__dirname, './src/components'),
		['@utils']: path.resolve(__dirname, './src/utils'),
		['@pages']: path.resolve(__dirname, './src/pages'),
		['@images']: path.resolve(__dirname, './src/assets/images')
	}),
	addPostcssPlugins([
		require('postcss-px-to-viewport')({
			unitToConvert: 'px',
			viewportWidth: 750,
			unitPrecision: 3,
			propList: [ '*' ],
			viewportUnit: 'vw',
			fontViewportUnit: 'vw',
			selectorBlackList: [],
			minPixelValue: 1,
			mediaQuery: false,
			replace: true,
			exclude: /(\/|\\)(node_modules)(\/|\\)/
		})
	]),
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		style: 'css'
	})
);
