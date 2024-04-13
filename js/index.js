const d = document;
const w = window;

// Mobile-menu********************************

function toogleMenu() {
	d.querySelector(".mobile-menu").classList.toggle("is-active");
	d.querySelector(".menu-icon").classList.toggle("is-active");
	d.querySelector(".icon").classList.toggle("fa-bars");
	d.querySelector(".icon").classList.toggle("fa-xmark");
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
});
