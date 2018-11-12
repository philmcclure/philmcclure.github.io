// last modified
function lastModified() {
    var x = document.lastModified;
    document.getElementById("footer").innerHTML = "Last modified: " + x;
}

// voltage type

var volt_type = ["AC", "DC"];

// phase selection

var phase = ["1ϕ", "3ϕ"];

// dc motor hp/voltage/currents

var dchp     = ["1/4", "1/3", "1/2", "3/4", "1", "1 1/2", "2", "3", "5", "7 1/2", "10", "15", "20", "25", "30", "40", "50", "60", "75", "100", "125", "150", "200"];
var dcvolt    = ["90", "120", "180", "240", "500", "550"];
var dc1_4     = ["4.0", "3.1", "2.0", "1.6", "", ""];
var dc1_3     = ["5.2", "4.1", "2.6", "2.0", "", ""];
var dc1_2     = ["6.8", "5.4", "3.4", "2.7", "", ""];
var dc3_4     = ["9.6", "7.6", "4.8", "3.8", "", ""];
var dc1       = ["12.2", "9.5", "6.1", "4.7", "", ""];
var dc11_2    = ["", "13.2", "8.3", "6.6", "", ""];
var dc2       = ["", "17", "10.8", "8.5", "", ""];
var dc3       = ["", "25", "16", "12.2", "", ""];
var dc5       = ["", "40", "27", "20", "", ""];
var dc71_2    = ["", "58", "", "29", "13.6", "12.2"];
var dc10      = ["", "76", "", "38", "18", "16"];
var dc15      = ["", "", "", "55", "27", "24"];
var dc20      = ["", "", "", "72", "34", "31"];
var dc25      = ["", "", "", "89", "43", "38"];
var dc30      = ["", "", "", "106", "51", "46"];
var dc40      = ["", "", "", "140", "67", "61"];
var dc50      = ["", "", "", "173", "83", "75"];
var dc60      = ["", "", "", "206", "99", "90"];
var dc75      = ["", "", "", "255", "123", "111"];
var dc100     = ["", "", "", "341", "164", "148"];
var dc125     = ["", "", "", "425", "205", "185"];
var dc150     = ["", "", "", "506", "246", "222"];
var dc200     = ["", "", "", "675", "330", "294"];

// single-phase AC motor hp/voltage/currents

var ac1hp     = ["1/6", "1/4", "1/3", "1/2", "3/4", "1", "1 1/2", "2", "3", "5", "7 1/2", "10"];
var ac1volt   = ["115", "200", "208", "230"];
var ac1115cb  = ["15", "15", "15", "20", "25", "30", "40", "50", "70", "90", "110", ""]; 
var ac1115fs  = ["6.25", "9", "10", "15", "20", "25", "30", "30", "50", "80", "100", ""];
var ac1115ol  = ["B4.85", "B6.25", "B8.20", "B11.5", "B15.5", "B19.5", "B28.0", "B36.", "B40.", "CC64.3", "CC87.7", ""];
var ac1230cb  = ["14", "15", "15", "15", "15", "15", "20", "25", "35", "60", "80", "90"];
var ac1230fs  = ["3.2", "4.5", "5.6", "7", "10", "12", "15", "20", "25", "40", "60", "60"];
var ac1230ol  = ["B2.40", "B3.30", "B4.15", "B5.50", "B7.70", "B9.10", "B14.", "B17.5", "B22.", "B28.0", "B40.", "CC50.1"];
var ac_1_1_6  = ["4.4", "2.5", "2.4", "2.2"];
var ac_1_1_4  = ["5.8", "3.3", "3.2", "2.9"];
var ac_1_1_3  = ["7.2", "4.1", "4.0", "3.6"];
var ac_1_1_2  = ["9.8", "5.6", "5.4", "4.9"];
var ac_1_3_4  = ["13.8", "7.9", "7.6", "6.9"];
var ac_1_1    = ["16", "9.2", "8.8", "8.0"];
var ac_1_1_2  = ["20", "11.5", "11", "10"];
var ac_1_2    = ["24", "13.8", "13.2", "12"];
var ac_1_3    = ["34", "19.6", "18.7", "17"];
var ac_1_5    = ["56", "32.2", "30.8", "28"];
var ac_1_71_2 = ["80", "46", "44", "40"];
var ac_1_10   = ["100", "57.5", "55", "50"];

// three-phase AC motor hp/voltage/currents

var ac3hp      = ["1/2", "3/4", "1", "1 1/2", "2", "3", "5", "7 1/2", "10", "15", "20", "25", "30", "40", "50", "60", "75", "100", "125", "150", "200", "250", "300", "350", "400", "450", "500"];
var ac3volt    = ["115", "200", "208", "230", "460", "575", "2300"];
var ac_3_1_2   = ["4.4", "2.5", "2.4", "2.2", "1.1", "0.9", ""];
var ac3200cb   = ["15", "15", "15", "15", "15", "20", "35", "50", "60", "90", "100", "110", "125", "175", "200", "250", "300", "400", "600", "600", "800"];
var ac3200fs   = ["4", "6.25", "8", "10", "10", "17.5", "25", "40", "50", "60", "90", "100", "125", "175", "200", "250", "300", "400", "500", "600", ""];
var ac3200ol   = ["B3.30", "B4.85", "B6.90", "B10.2", "B11.5", "B15.5", "B28.0", "B45", "B56", "CC74.6", "CC94.0", "CC143", "CC143", "CC180", "B3.70", "B4.15", "B5.50", "B2.65", "B3.30", "B4.15", ""];
var ac3230cb   = ["15", "15", "15", "15", "15", "20", "30", "45", "60", "80", "90", "100", "110", "150", "200", "225", "250", "350", "450", "600", "800"];
var ac3230fs   = ["4", "5.6", "8", "10", "10", "15", "25", "30", "40", "60", "80", "100", "100", "150", "200", "200", "300", "350", "400", "500", "600"];
var ac3230ol   = ["B3.30", "B4.15", "B6.25", "B9.10", "B10.2", "B14", "B25", "B36", "B45", "B79", "CC87.7", "CC112", "CC156", "CC167", "CC208", "B3.70", "B4.15", "B6.25", "B3.00", "B3.30", "B4.85"];
var ac3460cb   = ["15", "15", "15", "15", "15", "15", "15", "20", "25", "40", "60", "70", "80", "90", "100", "110", "125", "200", "225", "250", "350"];
var ac3460fs   = ["2", "3.2", "4", "5.6", "6.25", "8", "15", "20", "20", "30", "40", "50", "60", "80", "100", "100", "150", "175", "200", "250", "350"];
var ac3460ol   = ["B1.45", "B2.40", "B3.00", "B4.15", "B4.85", "B6.90", "B11.5", "B17.5", "B25", "B32", "B45", "B62", "CC59.4", "CC81.5", "CC103", "CC112", "CC156", "CC196", "B3.70", "B4.15", "B6.25"];
var ac3575cb   = ["15", "15", "15", "15", "15", "15", "15", "15", "20", "35", "45", "60", "60", "80", "90", "100", "110", "150", "200", "200", "250"];
var ac3575fs   = ["1.8", "2.5", "3.2", "4", "5", "6.25", "10", "15", "20", "25", "30", "40", "50", "60", "80", "90", "100", "150", "175", "200", "300"];
var ac3575ol   = ["B1.30", "B1.88", "B2.40", "B3.30", "B3.70", "B4.85", "B9.10", "B12.8", "B17.5", "B25", "B36", "B45", "CC46.6", "CC64.3", "CC81.5", "CC87.7", "CC112", "CC156", "B3.00"];
var ac_3_3_4   = ["6.4", "3.7", "3.5", "3.2", "1.6", "1.3", ""];
var ac_3_1     = ["8.4", "4.8", "4.6", "4.2", "2.1", "1.7", ""];
var ac_3_11_2  = ["12.0", "6.9", "6.6", "6.0", "3.0", "2.4", ""];
var ac_3_2     = ["13.6", "7.8", "7.5", "6.8", "3.4", "2.7", ""];
var ac_3_3     = ["", "11.0", "10.6", "9.6", "4.8", "3.9", ""];
var ac_3_5     = ["", "17.5", "16.7", "15.2", "7.6", "6.1", ""];
var ac_3_71_2  = ["", "25.3", "24.2", "22", "11", "9", ""];
var ac_3_10    = ["", "32.2", "30.8", "28", "14", "11", ""];
var ac_3_15    = ["", "48.3", "46.2", "42", "21", "17", ""];
var ac_3_20    = ["", "62.1", "59.4", "54", "27", "22", ""];
var ac_3_25    = ["", "78.2", "74.8", "68", "34", "27", ""];
var ac_3_30    = ["", "92", "88", "80", "40", "32", ""];
var ac_3_40    = ["", "120", "114", "104", "52", "41", ""];
var ac_3_50    = ["", "150", "143", "130", "65", "52", ""];
var ac_3_60    = ["", "177", "169", "154", "77", "62", "16"];
var ac_3_75    = ["", "221", "211", "192", "96", "77", "20"];
var ac_3_100   = ["", "285", "273", "248", "124", "99", "26"];
var ac_3_125   = ["", "359", "343", "312", "156", "125", "31"];
var ac_3_150   = ["", "414", "396", "360", "180", "144", "36"];
var ac_3_200   = ["", "552", "528", "480", "240", "192", "49"];
var ac_3_250   = ["", "", "", "", "302", "242", "60"];
var ac_3_300   = ["", "", "", "", "361", "289", "72"];
var ac_3_350   = ["", "", "", "", "414", "336", "83"];
var ac_3_400   = ["", "", "", "", "477", "382", "95"];
var ac_3_450   = ["", "", "", "", "515", "412", "103"];
var ac_3_500   = ["", "", "", "", "590", "472", "118"];


// function to fill select lists

function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}

// Show the damn number

function showTheDamnNumber(val) {
    var voltage_type = document.getElementById("acdc").value;
    var phase_type   = document.getElementById("phase").value;
    var voltage_sel  = document.getElementById("voltage").value;
    var horse_power  = document.getElementById("horsePower").value;
	
if (val == "DC" || val == "AC" ) {
    if (voltage_type == "DC") {
        removeOptions(document.getElementById("phase"));
		removeOptions(document.getElementById("horsePower"));
		removeOptions(document.getElementById("voltage"));
        var phase_sel = document.getElementById("phase");
		var horsepower = document.getElementById("horsePower");
		var voltage = document.getElementById("voltage");
        phase_sel.style.display = 'none';
		if (horsepower) {
			for (var i=0; i < dchp.length; ++i) {
				addOption(horsepower, dchp[i], dchp[i]);
			}
		}
		if (voltage) {
			for (var i=0; i < dcvolt.length; ++i) {
				addOption(voltage, dcvolt[i], dcvolt[i]);
			}
		}
    } else {
        removeOptions(document.getElementById("phase"));
		removeOptions(document.getElementById("horsePower"));
		removeOptions(document.getElementById("voltage"));
		var phase_sel = document.getElementById("phase");
		var horsepower = document.getElementById("horsePower");
		var voltage = document.getElementById("voltage");
		phase_sel.style.display = 'inline';
		if (phase_sel) {
            var phase = ["1ϕ", "3ϕ"];
		    for (var i=0; i < phase.length; ++i) {
       			addOption(phase_sel, phase[i], phase[i]);
    		}
		}
		if (horsepower) {
			for (var i=0; i < ac1hp.length; ++i) {
				addOption(horsepower, ac1hp[i], ac1hp[i]);
			}
		}
		if (voltage) {
			for (var i=0; i < ac1volt.length; ++i) {
				addOption(voltage, ac1volt[i], ac1volt[i]);
			}
		}
	}
}

if (val == "1ϕ") {
	removeOptions(document.getElementById("voltage"));
	var voltages = document.getElementById("voltage");
	var horsepower = document.getElementById("horsePower");
	if (voltages) {
		for (var i=0; i < ac1volt.length; ++i) {
			addOption(voltages, ac1volt[i], ac1volt[i]);
		}
	}
	if (horsepower) {
		for (var i=0; i < ac1hp.length; ++i) {
			addOption(horsepower, ac1hp[i], ac1hp[i]);
		}
	}
} 

if (val == "3ϕ") {
	removeOptions(document.getElementById("voltage"));
	removeOptions(document.getElementById("horsePower"));
	var voltages = document.getElementById("voltage");
	var horsepower = document.getElementById("horsePower");
	if (voltages) {
		for (var i=0; i < ac3volt.length; ++i) {
			addOption(voltages, ac3volt[i], ac3volt[i]);
		}
	}
	if (horsepower) {
		for (var i=0; i < ac3hp.length; ++i) {
			addOption(horsepower, ac3hp[i], ac3hp[i]);
		}
	}
}	

var voltage_type = document.getElementById("acdc").value;
var phase_type   = document.getElementById("phase").value;
var voltage_sel  = document.getElementById("voltage").value;
var horse_power  = document.getElementById("horsePower").value;
var vtype_lower  = voltage_type.toLowerCase();
var phase        = phase_type.slice(0, -1);
var hpwr_nospace = horse_power.replace(" ", "");
var hpwr_final   = hpwr_nospace.replace("/", "_");

if (voltage_type == "DC") {
    var vvalue = dcvolt.indexOf(voltage_sel);
    var motor_array = vtype_lower + hpwr_final;
} else if (voltage_type == "AC" && phase_type == "1ϕ") {
    var vvalue = ac1volt.indexOf(voltage_sel);
    var motor_array = vtype_lower + '_' + phase + '_' + hpwr_final;
    var horse_power  = document.getElementById("horsePower").value;
    var hpvalue      = ac1hp.indexOf(horse_power);
    if (voltage_sel == "115") {
        var cbreaker = ac1115cb[hpvalue];
        var fused = ac1115fs[hpvalue];
        var oloads = ac1115ol[hpvalue];
    } else if (voltage_sel == "230") {
        var cbreaker = ac1230cb[hpvalue];
        var fused = ac1230fs[hpvalue];
        var oloads = ac1230ol[hpvalue];
    } else {
        var cbreaker = "";
        var fused = "";
        var oloads = "";
    }
} else {
    var vvalue       = ac3volt.indexOf(voltage_sel);
    var motor_array  = vtype_lower + '_' + phase + '_' + hpwr_final;
    var hpvalue      = ac3hp.indexOf(horse_power);
    if (voltage_sel == "200") {
        var cbreaker = ac3200cb[hpvalue];
        var fused    = ac3200fs[hpvalue];
        var oloads   = ac3200ol[hpvalue];
    } else if (voltage_sel == "230") {
        var cbreaker = ac3230cb[hpvalue];
        var fused    = ac3230fs[hpvalue];
        var oloads   = ac3230ol[hpvalue];
    } else if (voltage_sel == "460") {
        var cbreaker = ac3460cb[hpvalue];
        var fused    = ac3460fs[hpvalue];
        var oloads   = ac3460ol[hpvalue];
    } else if (voltage_sel == "575") {
        var cbreaker = ac3575cb[hpvalue];
        var fused    = ac3575fs[hpvalue];
        var oloads   = ac3575ol[hpvalue];
    } else {
        var cbreaker = "";
        var fused    = "";
        var oloads   = "";
    }
}

var output = window[motor_array][vvalue];

if (output == null || output == "") {
    var output = "No Such Motor";
}

document.getElementById("currentNumber").innerHTML = 'Full load current: ' + output;

if (cbreaker == undefined || cbreaker == null || cbreaker == "") {
    document.getElementById("breaker").innerHTML = '';
    document.getElementById("fuses").innerHTML = '';
    document.getElementById("overloads").innerHTML = '';
} else {
    document.getElementById("breaker").innerHTML = 'Circuit Breaker: ' + cbreaker + 'A';
    document.getElementById("fuses").innerHTML = 'Fuses: ' + fused + 'A';
    document.getElementById("overloads").innerHTML = 'Overloads: ' + oloads;
}
lastModified();
}

// remove select items

function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
    {
        selectbox.remove(i);
    }
}

// populate the pulldowns

function addoption_list() {
var vtype = document.getElementById("acdc");
if (vtype) {
    for (var i=0; i < volt_type.length; ++i) {
        addOption(vtype, volt_type[i], volt_type[i]);
    }
}

var phase_sel = document.getElementById("phase");
if (phase_sel) {    
    for (var i=0; i < phase.length; ++i) {
        addOption(phase_sel, phase[i], phase[i]);
    }
}

var voltages = document.getElementById("voltage");
if (voltages) {
    for (var i=0; i < ac1volt.length; ++i) {
        addOption(voltages, ac1volt[i], ac1volt[i]);
    }
}

var horsepower = document.getElementById("horsePower");
if (horsepower) {
    for (var i=0; i < ac1hp.length; ++i) {
        addOption(horsepower, ac1hp[i], ac1hp[i]);
    }
}
showTheDamnNumber();
}
