var thermocoupleList = ["J-Type", "K-Type", "T-Type", "E-Type", "N-Type"];
var j = ["Iron Fe (magnetic)", "Constantan Copper-Nickel Cu-Ni", "j.png", "32 to 1382°F", "0 to 750°C", "–346 to 2193°F", "–210 to 1200°C", "-8.095 to 69.553", "greater of 2.2°C or 0.75%", "greater of 1.1°C or 0.4%", "j-iec.png", "Reducing, Vacuum, Inert. Limited Use in Oxidizing at High Temperatures. Not Recommended for Low Temperatures."];
var k = ["Chromega NickelChromium Ni-Cr", "Alomega Nickel-Aluminum Ni-Al (magnetic)", "k.png", "–328 to 2282°F", "–200 to 1250°C", "–454 to 2501°F", "–270 to 1372°C", "-6.458 to 54.886", "greater of 2.2°C or 0.75%", "greater of 1.1°C or 0.4%", "k-iec.png", "Clean Oxidizing and Inert. Limited Use in Vacuum or Reducing. Wide Temperature Range, Most Popular Calibration"];
var t = ["Copper Cu", "Constantan Copper-Nickel Cu-Ni", "t.png", "–328 to 662°F", "–250 to 350°C", "–454 to 752°F", "–270 to 400°C", "–6.258 to 20.872", "greater of 1.0°C or 0.75%", "greater of 0.5°C or 0.4%", "t-iec.png", "Mild Oxidizing, Reducing Vacuum or Inert. Good Where Moisture Is Present. Low Temperature and Cryogenic Applications"];
var e = ["Chromega NickelChromium Ni-Cr", "Constantan Copper-Nickel Cu-Ni", "e.png", "–328 to 1652°F", "–200 to 900°C", "–454 to 1832°F", "–270 to 1000°C", "–9.835 to 76.373", "greater of 1.7°C or 0.5%", "greater of 1.0°C or 0.4%", "e-iec.png", "Oxidizing or Inert. Limited Use in Vacuum or Reducing. Highest EMF Change Per Degree"];
var n = ["Omega-P Nicrosil Ni-Cr-Si", "Omega-N Nisil Ni-Si-Mg", "n.png", "–450 to 2372°F", "–270 to 1300°C", "–450 to 2372°F", "–270 to 1300°C", "–4.345 to 47.513", "greater of 2.2°C or 0.75%", "greater of 1.1°C or 0.4%", "n-iec.png", "Alternative to Type K. More Stable at High Temps"];

// populate dropdown lists function

function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}

function showTheDamnNumber() {
    var tcouple = document.getElementById("thermocouple").value;

    if (tcouple == "J-Type") {
        document.getElementById("pluslead").innerHTML            = '<strong>+ Lead: </strong>' + j[0];
        document.getElementById("neglead").innerHTML             = '<strong>- Lead: </strong>' + j[1];
        document.getElementById("grade").src                     = 'img/' + j[2];
        document.getElementById("maxUsefulTempFahr").innerHTML   = '<strong>Max Useful Temp Range: </strong>' + j[3] + ' / ' + j[4];
        document.getElementById("maxGradeTempFahr").innerHTML    = '<strong>Max Grade Temp Range: </strong>' + j[5] + ' / ' + j[6];
        document.getElementById("emfOverMaxTempRange").innerHTML = '<strong>EMF (mV) Over Max Temp Range: </strong>' + j[7];
        document.getElementById("standardLimitError").innerHTML  = '<strong>Standard Limits of Error: </strong>' + j[8];
        document.getElementById("specialLimitError").innerHTML   = '<strong>Special Limits of Error: </strong>' + j[9];
        document.getElementById("iec584_3").src                  = 'img/' + j[10];
        document.getElementById("comments").innerHTML            = '<strong>Comments: </strong>' + j[11];
    }

    if (tcouple == "K-Type") {
        document.getElementById("pluslead").innerHTML            = '<strong>+ Lead: </strong>' + k[0];
        document.getElementById("neglead").innerHTML             = '<strong>- Lead: </strong>' + k[1];
        document.getElementById("grade").src                     = 'img/' + k[2];
        document.getElementById("maxUsefulTempFahr").innerHTML   = '<strong>Max Useful Temp Range: </strong>' + k[3] + ' / ' + k[4];
        document.getElementById("maxGradeTempFahr").innerHTML    = '<strong>Max Grade Temp Range: </strong>' + k[5] + ' / ' + k[6];
        document.getElementById("emfOverMaxTempRange").innerHTML = '<strong>EMF (mV) Over Max Temp Range: </strong>' + k[7];
        document.getElementById("standardLimitError").innerHTML  = '<strong>Standard Limits of Error: </strong>' + k[8];
        document.getElementById("specialLimitError").innerHTML   = '<strong>Special Limits of Error: </strong>' + k[9];
        document.getElementById("iec584_3").src                  = 'img/' + k[10];
        document.getElementById("comments").innerHTML            = '<strong>Comments: </strong>' + k[11];
    }

    if (tcouple == "T-Type") {
        document.getElementById("pluslead").innerHTML            = '<strong>+ Lead: </strong>' + t[0];
        document.getElementById("neglead").innerHTML             = '<strong>- Lead: </strong>' + t[1];
        document.getElementById("grade").src                     = 'img/' + t[2];
        document.getElementById("maxUsefulTempFahr").innerHTML   = '<strong>Max Useful Temp Range: </strong>' + t[3] + ' / ' + t[4];
        document.getElementById("maxGradeTempFahr").innerHTML    = '<strong>Max Grade Temp Range: </strong>' + t[5] + ' / ' + t[6];
        document.getElementById("emfOverMaxTempRange").innerHTML = '<strong>EMF (mV) Over Max Temp Range: </strong>' + t[7];
        document.getElementById("standardLimitError").innerHTML  = '<strong>Standard Limits of Error: </strong>' + t[8];
        document.getElementById("specialLimitError").innerHTML   = '<strong>Special Limits of Error: </strong>' + t[9];
        document.getElementById("iec584_3").src                  = 'img/' + t[10];
        document.getElementById("comments").innerHTML            = '<strong>Comments: </strong>' + t[11];
    }

    if (tcouple == "E-Type") {
        document.getElementById("pluslead").innerHTML            = '<strong>+ Lead: </strong>' + e[0];
        document.getElementById("neglead").innerHTML             = '<strong>- Lead: </strong>' + e[1];
        document.getElementById("grade").src                     = 'img/' + e[2];
        document.getElementById("maxUsefulTempFahr").innerHTML   = '<strong>Max Useful Temp Range: </strong>' + e[3] + ' / ' + e[4];
        document.getElementById("maxGradeTempFahr").innerHTML    = '<strong>Max Grade Temp Range: </strong>' + e[5] + ' / ' + e[6];
        document.getElementById("emfOverMaxTempRange").innerHTML = '<strong>EMF (mV) Over Max Temp Range: </strong>' + e[7];
        document.getElementById("standardLimitError").innerHTML  = '<strong>Standard Limits of Error: </strong>' + e[8];
        document.getElementById("specialLimitError").innerHTML   = '<strong>Special Limits of Error: </strong>' + e[9];
        document.getElementById("iec584_3").src                  = 'img/' + e[10];
        document.getElementById("comments").innerHTML            = '<strong>Comments: </strong>' + e[11];
    }

    if (tcouple == "N-Type") {
        document.getElementById("pluslead").innerHTML            = '<strong>+ Lead: </strong>' + n[0];
        document.getElementById("neglead").innerHTML             = '<strong>- Lead: </strong>' + n[1];
        document.getElementById("grade").src                     = 'img/' + n[2];
        document.getElementById("maxUsefulTempFahr").innerHTML   = '<strong>Max Useful Temp Range: </strong>' + n[3] + ' / ' + n[4];
        document.getElementById("maxGradeTempFahr").innerHTML    = '<strong>Max Grade Temp Range: </strong>' + n[5] + ' / ' + n[6];
        document.getElementById("emfOverMaxTempRange").innerHTML = '<strong>EMF (mV) Over Max Temp Range: </strong>' + n[7];
        document.getElementById("standardLimitError").innerHTML  = '<strong>Standard Limits of Error: </strong>' + n[8];
        document.getElementById("specialLimitError").innerHTML   = '<strong>Special Limits of Error: </strong>' + n[9];
        document.getElementById("iec584_3").src                  = 'img/' + n[10];
        document.getElementById("comments").innerHTML            = '<strong>Comments: </strong>' + n[11];
    }
}

function addoption_list() {
var tdropdown = document.getElementById("thermocouple");
if (tdropdown) {
    for (var i=0; i < thermocoupleList.length; ++i) {
        addOption(tdropdown, thermocoupleList[i], thermocoupleList[i]);
    }
}

showTheDamnNumber();
}

document.getElementById("thermocouple").addEventListener("select", showTheDamnNumber);
