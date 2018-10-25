function calculator() {
if (document.calc.voltage.value.length != 0) {
    var V = eval(document.calc.voltage.value);
} else {
    var V = 0;
}
    
if (document.calc.amps.value.length != 0) {
    var A = eval(document.calc.amps.value);
} else {
    var A = 0;
}

if (document.calc.kva.value.length != 0) {
    var kVA = eval(document.calc.kva.value);
} else {
    var kVA = 0;
}

var temp = document.getElementById("phase").value;
var Ph = "1.0";

if (temp == "2") {
    var Ph = "1.732";
}

if ((V == 0 ) || (V == 0.0 )) {
    V = (kVA*1000)/(A*Ph);
} else if((A == 0 ) || (A == 0.0 )) {
    A = (kVA*1000)/(V*Ph);
} else if((kVA == 0 ) || (kVA == 0.0 )) {
    kVA = (Ph*V*A)/1000;
} else {
    document.getElementById("notify").innerHTML = "Only two values can be entered.  Please clear the field you want to calculate.";
}

document.calc.voltage.value = V;
document.calc.amps.value = A;
document.calc.kva.value = kVA;
}

function clearnotify() {
    document.getElementById("notify").innerHTML = "";
}
