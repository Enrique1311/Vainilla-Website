const d = document;

function toogleMenu(e) {
	d.querySelector(".mobile-menu").classList.toggle("is-active");
}

d.addEventListener("click", (e) => {
	if (e.target.matches(".menu-icon") || e.target.matches(".menu-icon i")) {
		toogleMenu(e);
	}
	if (e.target.matches(".mobile-menu a")) {
		toogleMenu(e);
	}
});
