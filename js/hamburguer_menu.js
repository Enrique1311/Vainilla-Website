export default function hamburguerMenu(menuIcon, mobileMenu) {
	const d = document;

	d.addEventListener("click", (e) => {
		if (e.target.matches(menuIcon)) {
			d.querySelector(mobileMenu).classList.toggle("is-active");
			d.querySelector(menuIcon).classList.toggle("is-active");
		}
	});
}
