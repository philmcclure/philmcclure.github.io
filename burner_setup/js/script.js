var burners  = ["4422-4", "4422-5", "4424-3A", "4424-2", "6843-4-25", "4442-6", "BIC 100 BO50", "BIC 140 BO85", "4442-4-S"];

function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);
}

function showTheDamnNumber() {
var burner_array = [
{mfg:"North American", burnerNo:"4422-4",       maxCFH:"5500",  CFH_OSI:"16",   orifice:"558"},
{mfg:"North American", burnerNo:"4422-5",       maxCFH:"9050",  CFH_OSI:"16",   orifice:"588 or 972"},
{mfg:"North American", burnerNo:"4424-3A",      maxCFH:"3540",  CFH_OSI:"16",   orifice:"324"},
{mfg:"North American", burnerNo:"4424-2",       maxCFH:"2340",  CFH_OSI:"16",   orifice:"324"},
{mfg:"North American", burnerNo:"6843-4-25",    maxCFH:"5600",  CFH_OSI:"16",   orifice:"558"},
{mfg:"North American", burnerNo:"4442-6",       maxCFH:"15000", CFH_OSI:"16",   orifice:"1160"},
{mfg:"Krom Schroder",  burnerNo:"BIC 100 BO50", maxCFH:"3070",  CFH_OSI:"3.24", orifice:"265"},
{mfg:"Krom Schroder",  burnerNo:"BIC 140 BO85", maxCFH:"10910", CFH_OSI:"5.32", orifice:"1125"},
{mfg:"North American", burnerNo:"4442-4-S",     maxCFH:"8900",  CFH_OSI:"16",   orifice:"972"}
]

var burner_select = document.getElementById("burnerSelect").value;
var air_select    = document.getElementById("measuredAIR").value;
var gas_select    = document.getElementById("measuredGAS").value;
var excess_air    = document.getElementById("excessAIR").value;
var gas_select_oz = Math.round(gas_select*1.7299940526590531);
var bvalue        = burners.indexOf(burner_select);
var model         = burner_array[bvalue].mfg + ' ' + burner_array[bvalue].burnerNo;
var air_oz        = burner_array[bvalue].CFH_OSI;
var air_wc        = Math.round(air_oz*1.7299940526590531);
var orifice_size  = burner_array[bvalue].orifice;
var max_cfh       = burner_array[bvalue].maxCFH;
var new_burner_ra = (Math.sqrt(gas_select_oz/air_oz))*max_cfh;
var cfh_gas_need  = Math.round((new_burner_ra*((100-excess_air)*0.01))/10);
var new_gas_set   = parseFloat(Math.pow((cfh_gas_need/orifice_size),2)*3.5).toFixed(2);
var new_gas_osi   = Math.round(new_gas_set*1.7299940526590531);
console.log(new_gas_set);
document.getElementById("mfg").innerHTML     = model;
document.getElementById("maxCFH").innerHTML  = "Max CFH: " + max_cfh;
document.getElementById("orifice").innerHTML = "Orifice: " + orifice_size;
console.log(new_gas_osi);
if (new_gas_osi) {
    document.getElementById("notify").innerHTML  = "New Gas Setting: <br>" + new_gas_set + "\"WC or " + new_gas_osi + "OSI";
}
}


function addoption_list() {
var bselect = document.getElementById("burnerSelect");
if (bselect) {
    for (var i=0; i < burners.length; ++i) {
        addOption(bselect, burners[i], burners[i]);
    }
}
    showTheDamnNumber();
}
