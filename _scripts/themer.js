/*
 * @file themer.js
 * @author Haba Kudzaev <rx1310@inbox.ru>
 * @copyright Haba Kudzaev, 2022
 */

let keyStorage              = 'themer';
let metaThemeColor          = document.querySelector('meta[name="theme-color"]');
let metaMsTitleColor        = document.querySelector('meta[name="msapplication-TileColor"]');
let metaAppleStatusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');

let mapThemes = {
	theme: {
		light: 'themer-light',
		dark : 'themer-dark'
	},
	color: {
		light: '#fff',
		dark : '#000'
	}
};

function themerSet(theme, color) {

	localStorage.setItem(keyStorage, theme);
	document.documentElement.className = theme;

	if (color) {
		setColorTheme(color);
	} else {
		setColorTheme(mapThemes.color.dark);
	}

}

function themerToggle() {
	if (localStorage.getItem(keyStorage) === mapThemes.theme.dark) {
		themerSet(mapThemes.theme.light, mapThemes.color.light);
	} else {
		themerSet(mapThemes.theme.dark, mapThemes.color.dark);
	}
}

function themerApply() {
	if (localStorage.getItem(keyStorage) === mapThemes.theme.dark) {
		themerSet(mapThemes.theme.dark, mapThemes.color.dark);
	} else {
		themerSet(mapThemes.theme.light, mapThemes.color.light);
	}
} themerApply();

function setColorTheme(value) {

	metaAppleStatusBarStyle.setAttribute('content', value);
	metaMsTitleColor.setAttribute('content', value);
	metaThemeColor.setAttribute('content', value);

}
