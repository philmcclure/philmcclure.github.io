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

var ac1hp   = ["1/6", "1/4", "1/3", "1/2", "3/4", "1", "1 1/2", "2", "3", "5", "7 1/2", "10"];
var ac1volt   = ["115", "200", "208", "230"];
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

var ac3hp   = ["1/2", "3/4", "1", "1 1/2", "2", "3", "5", "7 1/2", "10", "15", "20", "25", "30", "40", "50", "60", "75", "100", "125", "150", "200", "250", "300", "350", "400", "450", "500"];
var ac3volt   = ["115", "200", "208", "230", "460", "575", "2300"];
var ac_3_1_2  = ["4.4", "2.5", "2.4", "2.2", "1.1", "0.9", ""];
var ac_3_3_4  = ["6.4", "3.7", "3.5", "3.2", "1.6", "1.3", ""];
var ac_3_1    = ["8.4", "4.8", "4.6", "4.2", "2.1", "1.7", ""];
var ac_3_11_2 = ["12.0", "6.9", "6.6", "6.0", "3.0", "2.4", ""];
var ac_3_2    = ["13.6", "7.8", "7.5", "6.8", "3.4", "2.7", ""];
var ac_3_3    = ["", "11.0", "10.6", "9.6", "4.8", "3.9", ""];
var ac_3_5    = ["", "17.5", "16.7", "15.2", "7.6", "6.1", ""];
var ac_3_71_2 = ["", "25.3", "24.2", "22", "11", "9", ""];
var ac_3_10   = ["", "32.2", "30.8", "28", "14", "11", ""];
var ac_3_15   = ["", "48.3", "46.2", "42", "21", "17", ""];
var ac_3_20   = ["", "62.1", "59.4", "54", "27", "22", ""];
var ac_3_25   = ["", "78.2", "74.8", "68", "34", "27", ""];
var ac_3_30   = ["", "92", "88", "80", "40", "32", ""];
var ac_3_40   = ["", "120", "114", "104", "52", "41", ""];
var ac_3_50   = ["", "150", "143", "130", "65", "52", ""];
var ac_3_60   = ["", "177", "169", "154", "77", "62", "16"];
var ac_3_75   = ["", "221", "211", "192", "96", "77", "20"];
var ac_3_100  = ["", "285", "273", "248", "124", "99", "26"];
var ac_3_125  = ["", "359", "343", "312", "156", "125", "31"];
var ac_3_150  = ["", "414", "396", "360", "180", "144", "36"];
var ac_3_200  = ["", "552", "528", "480", "240", "192", "49"];
var ac_3_250  = ["", "", "", "", "302", "242", "60"];
var ac_3_300  = ["", "", "", "", "361", "289", "72"];
var ac_3_350  = ["", "", "", "", "414", "336", "83"];
var ac_3_400  = ["", "", "", "", "477", "382", "95"];
var ac_3_450  = ["", "", "", "", "515", "412", "103"];
var ac_3_500  = ["", "", "", "", "590", "472", "118"];

// power factor

var pf     = ["100%", "90%", "80%"];
var pf_val = ["1", "1.1", "1.25"];

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
    var power_factor = document.getElementById("powerFactor").value;
	
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
var power_factor = document.getElementById("powerFactor").value;
var vtype_lower  = voltage_type.toLowerCase();
var phase        = phase_type.slice(0, -1);
var hpwr_nospace = horse_power.replace(" ", "");
var hpwr_final   = hpwr_nospace.replace("/", "_");
var pf_final     = pf_val[pf.indexOf(power_factor)];

if (voltage_type == "DC") {
    var vvalue = dcvolt.indexOf(voltage_sel);
    var motor_array = vtype_lower + hpwr_final;
} else if (voltage_type == "AC" && phase_type == "1ϕ") {
    var vvalue = ac1volt.indexOf(voltage_sel);
    var motor_array = vtype_lower + '_' + phase + '_' + hpwr_final;
} else {
    var vvalue = ac3volt.indexOf(voltage_sel);
    var motor_array = vtype_lower + '_' + phase + '_' + hpwr_final;
}

var output = window[motor_array][vvalue];
var output_final = ((output * 10) * (pf_final * 10 )) / 100;

if (output == null || output == "") {
    var output_final = "No Such Motor";
}

document.getElementById("currentNumber").innerHTML = output_final;
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

var pwrfactor = document.getElementById("powerFactor");
if (pwrfactor) {
    for (var i=0; i < pf.length; ++i) {
        addOption(pwrfactor, pf[i], pf[i]);
    }
}

}
