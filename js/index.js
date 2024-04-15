const d = document;
const w = window;
const $selector = d.querySelectorAll("[data-dark]");

d.addEventListener("DOMContentLoaded", (e) => {
	// Dark Theme Button*******************************

	function changeToLight() {
		d.querySelector(".theme-icon").classList.remove("fa-sun");
		d.querySelector(".theme-icon").classList.add("fa-moon");
		d.querySelector(".theme-icon").classList.remove("dark-theme");
		$selector.forEach((el) => el.classList.remove("dark-theme"));
		localStorage.setItem("theme", "light");
	}

	function changeToDark() {
		d.querySelector(".theme-icon").classList.remove("fa-moon");
		d.querySelector(".theme-icon").classList.add("fa-sun");
		d.querySelector(".theme-icon").classList.add("dark-theme");
		$selector.forEach((el) => el.classList.add("dark-theme"));
		localStorage.setItem("theme", "dark");
	}

	if (localStorage.getItem("theme") === null)
		localStorage.setItem("theme", "light");

	if (localStorage.getItem("theme") === "light") changeToLight();

	if (localStorage.getItem("theme") === "dark") changeToDark();

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

	// Add Events********************************

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
			if (d.querySelector("header").classList.contains("dark-theme")) {
				changeToLight(e);
			} else {
				changeToDark(e);
			}
		}
	});

	// About Us (video) - Responsive Media********************************

	const videoMobileContent = `<a href="https://youtu.be/12Zug5-4Vhs?si=B3POD5B6Fdr5cQnz" target="_blank">Ver video</a>`;
	const videoDesktopContent = `<iframe width="560" height="315" src="https://www.youtube.com/embed/12Zug5-4Vhs?si=4Fc9OrL0rGTFI48J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
	$video = d.getElementById("video");

	function videoResponsiveMedia(e) {
		let windowWidth = window.innerWidth;

		if (windowWidth > 768) {
			$video.innerHTML = videoDesktopContent;
		} else {
			$video.innerHTML = videoMobileContent;
		}
	}
	window.addEventListener("resize", videoResponsiveMedia);
	videoResponsiveMedia();

	// Contact (map) - Responsive Media********************************

	const mapMobileContent = `<a href="https://maps.app.goo.gl/5jcuax1Ut9L989rA8" target="_blank">Ver mapa</a>`;
	const mapDesktopContent = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167135780985!2d-58.38415068794941!3d-34.60373887284167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1713188377133!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

	$map = d.getElementById("map");
	function mapResponsiveMedia(e) {
		let windowWidth = window.innerWidth;

		if (windowWidth > 768) {
			$map.innerHTML = mapDesktopContent;
		} else {
			$map.innerHTML = mapMobileContent;
		}
	}
	window.addEventListener("resize", mapResponsiveMedia);
	mapResponsiveMedia();
});
