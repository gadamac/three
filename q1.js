function calculate()
{
    var value1=document.getElementById("v1").value;
    var value2=(value1*9/5)+32;
    document.getElementById("result").innerHTML= value2;
}
//question no 2//
let list = document.getElementById("world-cup-years");
let listItem;

for (let year = 2022; year <= 2050; year += 4) {
	listItem = document.createElement("LI");
	listItem.textContent = year;
	list.appendChild(listItem);
}



