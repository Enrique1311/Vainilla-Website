const d = document;
const w = window;

// Mobile-menu********************************

function toogleMenu() {
	d.querySelector(".mobile-menu").classList.toggle("is-active");
	d.querySelector(".menu-icon").classList.toggle("is-active");
	d.querySelector(".icon").classList.toggle("fa-bars");
	d.querySelector(".icon").classList.toggle("fa-xmark");
}

// Dark Theme Button*******************************
const $selector = d.querySelectorAll("[data-dark]");
console.log($selector);

function changeTheme() {
	d.querySelector(".theme-icon").classList.toggle("fa-moon");
	d.querySelector(".theme-icon").classList.toggle("fa-sun");
	d.querySelector(".theme-icon").classList.toggle("dark-theme");

	$selector.forEach((el) => el.classList.toggle("dark-theme"));
}

// Top Button********************************

w.addEventListener("scroll", (e) => {
	let scrollTop = document.documentElement.scrollTop;

	if (scrollTop > 100) {
		d.querySelector(".top-btn").classList.remove("hidden-btn");
	} else {
		d.querySelector(".top-btn").classList.add("hidden-btn");
	}
});

d.addEventListener("click", (e) => {
	// Menu Click Events********************************
	if (e.target.matches(".menu-icon") || e.target.matches(".menu-icon i")) {
		toogleMenu(e);
	}
	if (e.target.matches(".mobile-menu a")) {
		toogleMenu(e);
	}

	// Top Button Click Events********************************
	if (e.target.matches(".top-btn") || e.target.matches(".top-btn i")) {
		w.scrollTo({ behavior: "smooth", top: 0 });
	}

	if (e.target.matches(".theme-btn") || e.target.matches(".theme-btn i")) {
		changeTheme();
	}
});
