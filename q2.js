function sumit()
{
var nm = document.getElementById("name").value;
var lnm = document.getElementById("lname").value;
var bnm = document.getElementById("birth").value;
var finl= nm + lnm +bnm;
document.getElementById("final").innerHTML = finl;
}
