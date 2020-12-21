/*
 * @Descripttion: 配置
 * @version: 
 * @Author: 小白
 * @Date: 2020-06-21 15:28:19
 * @LastEditors: 小白
 * @LastEditTime: 2020-12-21 17:32:49
 */
const FileManagerPlugin = require('filemanager-webpack-plugin');
const packageinfo = require('./package.json');
const {
	override,
	addPostcssPlugins,
	addWebpackAlias,
	addWebpackExternals,
	setWebpackPublicPath,
	useEslintRc
} = require('customize-cra');
const path = require('path');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('react-scripts/config/paths');
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
console.log(`🚀当前环境${process.env.NODE_ENV}`);
console.log(`🔥当前环境${process.env.REACT_APP_HTTPBASEURL}`);
console.log(`🔥当前自定义环境${process.env.REACT_APP_NODE_ENV}`);
const CDN = {
	css: [],
	js: [
		'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
		'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js'
	]
};
const alter_config = () => (config) => {
	if (IS_PRODUCTION) {
		const distName = `build`;
		config.devtool = false;
		paths.appBuild = path.join(path.dirname(paths.appBuild), distName);
		config.output.path = path.join(path.dirname(config.output.path), distName);
		config.plugins = [
			...config.plugins,
			new HtmlWebpackPlugin({
				template: 'public/index.html',
				title: packageinfo.name,
				cdn: CDN
			}),
			new WebpackBar(),
			new FileManagerPlugin({
				onEnd: {
					delete: [ `./*.zip` ],
					archive: [
						{
							source: `./${distName}`,
							destination: `./${distName}_${process.env.REACT_APP_NODE_ENV}_${packageinfo.version}.zip`
						}
					]
				}
			})
		];
	}
	const loaders = config.module.rules.find((rule) => Array.isArray(rule.oneOf)).oneOf;
	loaders[5].use.push({
		loader: 'sass-resources-loader',
		options: {
			resources: path.resolve(__dirname, 'src/assets/css/variables.scss')
		}
	});
	return config;
};
module.exports = override(
	alter_config(),
	useEslintRc('./package.json'),
	setWebpackPublicPath(IS_PRODUCTION ? '/react-ts-h5-template/' : './'),
	addWebpackExternals(
		IS_PRODUCTION
			? {
					react: 'window.React',
					'react-dom': 'window.ReactDOM'
				}
			: {}
	),
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
	])
	// fixBabelImports('import', {
	// 	libraryName: 'antd-mobile',
	// 	style: 'css'
	// })
);
