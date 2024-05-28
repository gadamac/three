function calculateResult() {
	const grade1 = document.getElementById("grade1").value;
	const grade2 = document.getElementById("grade2").value;
	const absences = document.getElementById("absences").value;
	const presence = 20 - absences;
	const average = (Number(grade1) + Number(grade2)) / 2;
	const resultElement = document.getElementById("result");
	
	if (presence / 20 >= 0.7 && average >= 6.5) {
		resultElement.textContent = "Approved";
	} else {
		let reason = "";
		if (presence / 20 < 0.7) {
			reason += "Absences, ";
		}
		if (average < 6.5) {
			reason += "Insufficient grade";
		}
		resultElement.textContent = "Failed: " + reason.trim();
	}
}
