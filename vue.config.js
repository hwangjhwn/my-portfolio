const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const { CKEditorTranslationsPlugin } = require('@ckeditor/ckeditor5-dev-translations');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

module.exports = defineConfig({
	transpileDependencies: [/ckeditor5-[^/\\]+[/\\]src[/\\].+\.js$/],

	configureWebpack: {
		plugins: [
			// CKEditor 5 needs its own plugin to be built using webpack.
			new CKEditorTranslationsPlugin({
				// See https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
				language: 'en',

				// Append translations to the file matching the `app` name.
				translationsOutputFile: /app/,
			}),
		],
	},

	chainWebpack: (config) => {
		config.plugins.delete('prefetch');

		// (1.) To handle the editor icons, get the default rule for *.svg files first:
		const svgRule = config.module.rule('svg');

		// Then you can either:
		//
		// * clear all loaders for existing 'svg' rule:
		//
		//		svgRule.uses.clear();
		//
		// * or exclude ckeditor directory from node_modules:
		svgRule.exclude.add(path.join(__dirname, 'node_modules', '@ckeditor'));

		// Add an entry for *.svg files belonging to CKEditor. You can either:
		//
		// * modify the existing 'svg' rule:
		//
		//		svgRule.use( 'raw-loader' ).loader( 'raw-loader' );
		//
		// * or add a new one:
		config.module
			.rule('cke-svg')
			.test(/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/)
			.use('raw-loader')
			.loader('raw-loader');

		// (2.) Transpile the .css files imported by the editor using PostCSS.
		// Make sure only the CSS belonging to ckeditor5-* packages is processed this way.
		config.module
			.rule('cke-css')
			.test(/ckeditor5-[^/\\]+[/\\].+\.css$/)
			.use('postcss-loader')
			.loader('postcss-loader')
			.tap(() => {
				return {
					postcssOptions: styles.getPostCssConfig({
						themeImporter: {
							themePath: require.resolve('@ckeditor/ckeditor5-theme-lark'),
						},
						minify: true,
					}),
				};
			});
	},
});
