class SummerTimer {
	constructor() {
		this.date = new Date();
		/**
		 * @type { "toEnd" | "toStart" }
		 */
		this.state = "toEnd";

		this.finishTime = new Date(this.date.getFullYear() + "-08-31");
		// this.finishTime.setMonth(8);
		// this.finishTime.setDate(31);

		this.onSecond = function () {};

		this.interval = 0;
	}

	start() {
		this.interval = setInterval(() => {
			// this.date = new Date();
			this.onSecond();
		}, 1000);
	}
}

window.addEventListener("load", function () {
	const st = new SummerTimer();

	function msToTime(s) {
		var ms = s % 1000;
		s = (s - ms) / 1000;
		var secs = s % 60;
		s = (s - secs) / 60;
		var mins = s % 60;
		var hrs = (s - mins) / 60;
		var days = parseInt(hrs / 24);
		hrs = hrs % 24;
		return {days, hrs, mins, secs, ms};
	}

	const timer = document.querySelector(".timer");

	st.onSecond = function () {
		const ets = msToTime(this.finishTime.getTime() - Date.now());

		if (ets <= 0) {
			// event
		}

		timer.innerHTML = `${ets.days} days, ${ets.hrs} hours, ${ets.secs} seconds`;

		console.log();
	};

	st.start();

	const title = this.document.querySelector(".text");
	let chrs = [...title.innerHTML.replace(/\s/g, "\u2800")];

	title.innerHTML = chrs
		.map((chr, i) => `<div class="key" style="--delay: ${2+parseInt(i * 0.2 * 10) / 10}s;">${chr}</div>`)
		.join(" ");
	// const titles = ["end to summer", "good day"];
	// var titles_it = 0;

	// setInterval(() => {
	// 	document.title = titles[titles_it++];
	// 	titles_it &= 0b01;
	// }, 2000);
});
