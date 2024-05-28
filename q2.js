function func(){
    var classification = ["John Hill", "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green"];
    var top = classification.slice(3, 6);
    document.getElementById("result").innerHTML = top.join();
}