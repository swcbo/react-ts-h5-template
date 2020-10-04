/*
 * @Descripttion: 
 * @version: 
 * @Author: 小白
 * @Date: 2020-06-21 15:28:19
 * @LastEditors: 小白
 * @LastEditTime: 2020-10-04 16:22:56
 */
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { override, fixBabelImports } = require('customize-cra');
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
			}),
			
		];
	}
	return config;
};

module.exports = override(
	alter_config(),
	fixBabelImports('import', {
		libraryName: 'antd-mobile',
		style: 'css'
	})
);
