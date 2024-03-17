const amountSlider = document.querySelector(
	"body > div:first-of-type > div:nth-of-type(4) > div:first-of-type > div:first-of-type > input[type=range]"
);
const heavinessSlider = document.querySelector(
	"body > div:first-of-type > div:nth-of-type(4) > div:first-of-type > div:nth-of-type(2) > input[type=range]"
);
const clouds = document.querySelectorAll("body > div:nth-of-type(4) > div");

amountSlider.addEventListener("input", function () {
	const value = parseInt(this.value);
	const hideCount = Math.floor((clouds.length * value) / 100);

	clouds.forEach((item, index) => {
		if (index < hideCount) {
			item.style.visibility = "visible";
		} else {
			item.style.visibility = "hidden";
		}
	});
});

heavinessSlider.addEventListener("input", function () {
	const value = parseInt(this.value);
	const opacity = value / 100; // Convert slider value to opacity (0 to 1)

	clouds.forEach((item) => {
		item.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`; // Set background-color with opacity
		item.style.setProperty("--before-opacity", opacity); // Set --before-opacity custom property
		item.style.setProperty("--after-opacity", opacity); // Set --after-opacity custom property
	});
});
