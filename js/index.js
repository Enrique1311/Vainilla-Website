const d = document;

function toogleMenu(e) {
	d.querySelector(".mobile-menu").classList.toggle("is-active");
	d.querySelector(".menu-icon").classList.toggle("is-active");
	d.querySelector(".icon").classList.toggle("fa-bars");
	d.querySelector(".icon").classList.toggle("fa-xmark");
}

d.addEventListener("click", (e) => {
	if (e.target.matches(".menu-icon") || e.target.matches(".menu-icon i")) {
		toogleMenu(e);
	}
	if (e.target.matches(".mobile-menu a")) {
		toogleMenu(e);
	}
});
