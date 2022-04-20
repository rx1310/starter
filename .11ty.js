const mdIt    = require('markdown-it');
const mdAttrs = require('markdown-it-attrs');
const yaml    = require("js-yaml");
const htmlmin = require("html-minifier");

module.exports = function(cnf) {

	cnf.addDataExtension("yaml", contents => yaml.load(contents));
	cnf.addDataExtension('yml', contents => yaml.load(contents));
	cnf.addPassthroughCopy({'_assets': 'assets'});
	cnf.addPassthroughCopy({'_scripts': 'scripts'});

	cnf.setUseGitIgnore(true);

	// ? Конфигурация BrowserConfig
	cnf.setBrowserSyncConfig({

		server: {
			baseDir: ['./dist']
		},

		files: [
			'_styles/**/*.*',
			'_scripts/**/*.*'
		],

		ghostMode: false,
		watch    : true,
		notify   : false,
		ui       : false,
		open     : true,
		browser  : ["chromium-browser"] // "google chrome", "firefox"

	});

	// ? конфигурация html-minifier
	cnf.addTransform("htmlmin", function(content, outputPath) {

		if( outputPath && outputPath.endsWith(".html") ) {

			let minified = htmlmin.minify(content, {
				useShortDoctype   : true,
				removeComments    : true,
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
			input   : '.',
			output  : 'dist',
			includes: '_includes/',
			layouts : '_layouts/',
			data    : "_data"
		},

		templateFormats    : ['md', 'njk'],
		htmlTemplateEngine : 'njk',
		passthroughFileCopy: true,
		jsDataFileSuffix   : ".data"

	}

}
