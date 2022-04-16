// test
const storageKey = "themer";
const themes = {
	light: "theme-light",
	dark: "theme-dark"
};

const colors = {
	light: "#ffffff",
	dark: "#161b22"
};

function themerSet(theme, color) {
	localStorage.setItem(storageKey, theme);
	document.documentElement.className = theme;
	if (color) {
		setColorTheme(color);
	} else {
		setColorTheme(colors.dark);
	}
}

function themerToggle() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.light, colors.light);
	} else {
		themerSet(themes.dark, colors.dark);
	}
}

function themerApply() {
	if (localStorage.getItem(storageKey) === themes.dark) {
		themerSet(themes.dark, colors.dark);
	} else {
		themerSet(themes.light, colors.light);
	}
} themerApply();

function setColorTheme(value) {

	let themeColor = document.querySelector('meta[name="theme-color"]');
	let msTitleColor = document.querySelector('meta[name="msapplication-TileColor"]');
	let appleStatusBarStyle = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');

	themeColor.setAttribute('content', value);
	appleStatusBarStyle.setAttribute('content', value);
	msTitleColor.setAttribute('content', value);

}
