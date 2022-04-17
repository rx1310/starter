const nav               = document.querySelector('.nav');
const navTitle          = document.querySelector('.nav__title');
const navScrollUp       = document.getElementById("scrollUp");
const navScrolledClass  = "nav--scrolled";
const navActionDisabled = "nav__action--disabled";

window.addEventListener('scroll', (e) => {

	if (window.pageYOffset > 100) {

		nav.classList.add(navScrolledClass);
		navTitle.classList.remove('hidden');
		navScrollUp.classList.remove(navActionDisabled);

	} else {

		nav.classList.remove(navScrolledClass);
		navTitle.classList.add('hidden');
		navScrollUp.classList.add(navActionDisabled);

	}

});
