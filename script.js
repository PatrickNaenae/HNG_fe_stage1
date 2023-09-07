document.addEventListener("DOMContentLoaded", function () {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const today = new Date();
	const currentDay = daysOfWeek[today.getUTCDay()];
	const currentUTCTime = today.toISOString().slice(0, 19) + "Z";

	document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
		currentDay;
	document.querySelector('[data-testid="currentUTCTime"]').textContent =
		currentUTCTime;
});
