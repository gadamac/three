function calculateAverage() {
	const num1 = document.getElementById("num1").value;
	const num2 = document.getElementById("num2").value;
	const average = (parseFloat(num1) + parseFloat(num2)) / 2;
	document.getElementById("result").innerHTML = "The average is: " + average;
}
