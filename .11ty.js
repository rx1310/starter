const mdIt    = require('markdown-it');
const mdAttrs = require('markdown-it-attrs');
const yaml    = require("js-yaml");
const htmlmin = require("html-minifier");

module.exports = function(cnf) {

	cnf.addDataExtension("yaml", contents => yaml.load(contents));
	cnf.addDataExtension('yml', contents => yaml.load(contents));
	cnf.addPassthroughCopy('app/assets');
	cnf.addPassthroughCopy('app/scripts');

	cnf.setUseGitIgnore(true);

	// ? Конфигурация BrowserConfig
	cnf.setBrowserSyncConfig({

		server: {
			baseDir: [
				'./dist',
			]
		},

		files: [
			'app/styles/**/*.*',
			'app/scripts/**/*.*'
		],

		ghostMode: false,
		watch    : true,
		notify   : false,
		ui       : false,
		open     : true,
		browser  : ["chromium-browser"]

	});

	// ? конфигурация html-minifier
	cnf.addTransform("htmlmin", function(content, outputPath) {

		if( outputPath && outputPath.endsWith(".html") ) {

			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});

			return minified;

		}

		return content;

	});

	// ? Конфигурация markdown-it
	let markdownLibrary = mdIt({
		html   : true,
		breaks : true,
		linkify: true
	}).use(mdAttrs, {
		leftDelimiter    : '{',
		rightDelimiter   : '}',
		allowedAttributes: []
	});

	cnf.setLibrary('md', markdownLibrary);

	return {

		dir: {
			input   : 'app',
			output  : 'dist',
			includes: 'includes/',
			layouts : 'layouts/',
			data    : "data"
		},

		templateFormats    : ['md', 'njk'],
		htmlTemplateEngine : 'njk',
		passthroughFileCopy: true,
		jsDataFileSuffix   : ".data"

	}

}
