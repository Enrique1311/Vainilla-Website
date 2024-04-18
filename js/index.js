const d = document;
const w = window;

d.addEventListener("DOMContentLoaded", (e) => {
	// Device Detection********************************

	const ua = navigator.userAgent;
	let isMobile;
	const deviceDetector = () => {
		isMobile = ua.match(/mobile/i) ? true : false;
	};
	deviceDetector();

	// About Us (video) - Mobile or Desktop********************************

	function videoLoader() {
		const videoMobileContent = `<a href="https://youtu.be/12Zug5-4Vhs?si=B3POD5B6Fdr5cQnz" target="_blank">Ver video</a>`;
		const videoDesktopContent = `<video controls="true" src="../assets/coverr-a-woman-picks-lettuce-on-a-farm-2718-1080p.mp4"></video>`;
		const $video = d.getElementById("my-video");

		isMobile
			? ($video.innerHTML = videoMobileContent)
			: ($video.innerHTML = videoDesktopContent);
	}
	videoLoader(isMobile);

	// Images********************************

	function slider() {}
	slider();

	// Contact (map) - Mobile or Desktop********************************

	function mapLoader() {
		const mapMobileContent = `<a href="https://maps.app.goo.gl/5jcuax1Ut9L989rA8" target="_blank">Ver mapa</a>`;
		const mapDesktopContent = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167135780985!2d-58.38415068794941!3d-34.60373887284167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1713188377133!5m2!1ses-419!2sar" width="300px" height="300px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
		const $map = d.getElementById("my-map");

		isMobile
			? ($map.innerHTML = mapMobileContent)
			: ($map.innerHTML = mapDesktopContent);
	}
	mapLoader(isMobile);

	// Dark Theme Button*******************************

	const $selector = d.querySelectorAll("[data-dark]");

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
});

// Network Status********************************

function networkStatus() {
	const isOnline = () => {
		const $div = d.createElement("div");

		if (navigator.onLine) {
			$div.textContent = "Your connection was restored!";
			$div.classList.add("online");
			$div.classList.remove("offline");
		} else {
			$div.textContent = "Lost connection!";
			$div.classList.add("offline");
			$div.classList.remove("online");
		}

		d.body.insertAdjacentElement("afterbegin", $div);
		setTimeout(() => d.body.removeChild($div), 2000);
	};

	w.addEventListener("online", (e) => {
		isOnline();
	});
	w.addEventListener("offline", (e) => {
		isOnline();
	});
}

networkStatus();
