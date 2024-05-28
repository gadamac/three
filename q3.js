let startTime = 0;
let intervalId = 0;
let isRunning = false;

const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const displayElement = document.getElementById("stopwatch-display");

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);

function startStopwatch() {
	if (!isRunning) {
		startTime = new Date().getTime();
		intervalId = setInterval(updateStopwatch, 1);
		isRunning = true;
	}
}
function stopStopwatch() {
	if (isRunning) {
		clearInterval(intervalId);
		isRunning = false;
	}
}
function updateStopwatch() {
	const currentTime = new Date().getTime();
	const elapsedTime = currentTime - startTime;
	const hours = Math.floor(elapsedTime / 3600000);
	const minutes = Math.floor((elapsedTime % 3600000) / 60000);
	const seconds = Math.floor(((elapsedTime % 60000) / 1000));
	const milliseconds = Math.floor((elapsedTime % 1000));
	const displayString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
	displayElement.textContent = displayString;
}
