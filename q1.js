function convert()
{
    let temp1= document.getElementById("n1").value;
    let temp2= (temp1*9/5)+32;
    document.getElementById("result").innerHTML= `${temp2}`;

}