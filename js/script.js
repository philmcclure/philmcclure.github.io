var wire_size = ["14", "12", "10", "8", "6", "4", "3", "2", "1", "1/0", "2/0", "3/0", "4/0", "250", "300", "350", "400", "500", "600", "700", "750"];
var trade_size = ["1/2", "3/4", "1", "1 1/4", "1 1/2", "2", "2 1/2", "3", "3 1/2", "4", "5", "6"];
var conduit_type = ["Rigid Metal Conduit", "Electical Metallic Tubing (EMT)", "Electrical Nonmetallic Tubing (ENT)", "Intermediate Metal Conduit (IMC)", "PVC Schedule 40", "PVC Schedule 80"];

// wire fill tables
var emt11_2  = [84, 61, 38, 22, 16, 10, 8, 7, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var emt11_4  = [61, 45, 28, 16, 12, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var emt1_2   = [12, 9, 5, 3, 2, 1, 1, 1, 1, 1];
var emt1     = [35, 26, 16, 9, 7, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1];
var emt21_2  = [241, 176, 111, 64, 46, 28, 24, 20, 15, 12, 10, 8, 7, 6, 5, 4, 4, 3, 2, 2, 1];
var emt2     = [138, 101, 63, 36, 26, 16, 13, 11, 8, 7, 6, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1];
var emt31_2  = [476, 347, 219, 126, 91, 56, 47, 40, 29, 25, 20, 17, 14, 11, 10, 9, 8, 6, 5, 4, 4];
var emt3     = [364, 266, 167, 96, 69, 43, 36, 30, 22, 19, 16, 13, 11, 9, 7, 6, 6, 5, 4, 3, 3];
var emt3_4   = [22, 16, 10, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1];
var emt4     = [608, 443, 279, 161, 116, 71, 60, 51, 37, 32, 26, 22, 18, 15, 13, 11, 10, 8, 7, 6, 5];
var ent1_2   = [10, 7, 4, 2, 1, 1, 1, 1, 1];
var ent3_4   = [18, 13, 8, 5, 3, 1, 1, 1, 1, 1, 1, 1];
var ent1     = [32, 23, 15, 8, 6, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1];
var ent11_4  = [58, 42, 26, 15, 11, 7, 5, 5, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var ent11_2  = [80, 58, 36, 21, 15, 9, 8, 6, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var ent2     = [132, 96, 60, 35, 25, 15, 13, 11, 8, 7, 5, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1];
var imc11_2  = [91, 67, 42, 24, 17, 11, 9, 7, 5, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var imc11_4  = [68, 49, 31, 18, 13, 8, 6, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var imc1_2   = [14, 10, 6, 3, 2, 1, 1, 1, 1, 1, 1];
var imc1     = [39, 29, 18, 10, 7, 4, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var imc21_2  = [211, 154, 97, 56, 40, 25, 21, 17, 13, 11, 9, 7, 6, 5, 4, 4, 3, 3, 2, 1, 1];
var imc2     = [149, 109, 69, 39, 28, 17, 15, 12, 9, 8, 6, 5, 4, 3, 3, 2, 2, 1, 1, 1, 1];
var imc31_2  = [436, 318, 200, 115, 83, 51, 43, 36, 27, 23, 19, 16, 13, 10, 9, 8, 7, 6, 5, 4, 4];
var imc3     = [326, 238, 150, 86, 62, 38, 32, 27, 20, 17, 14, 12, 9, 8, 7, 6, 5, 4, 3, 3, 3];
var imc3_4   = [24, 17, 11, 6, 4, 3, 2, 1, 1, 1, 1, 1, 1];
var imc4     = [562, 410, 258, 149, 107, 66, 56, 47, 35, 29, 24, 20, 17, 13, 12, 10, 9, 7, 6, 5, 5];
var rmc1_2   = [13, 9, 6, 3, 2, 1, 1, 1, 1, 1];
var rmc3_4   = [22, 16, 10, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1];
var rmc1     = [36, 26, 17, 9, 7, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var rmc11_4  = [63, 46, 29, 16, 12, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var rmc11_2  = [85, 62, 39, 22, 16, 10, 8, 7, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var rmc2     = [140, 102, 64, 37, 27, 16, 14, 11, 8, 7, 6, 5, 4, 3, 3, 2, 2, 1, 1, 1, 1];
var rmc21_2  = [200, 146, 92, 53, 38, 23, 20, 17, 12, 10, 8, 7, 6, 5, 4, 3, 3, 2, 1, 1, 1];
var rmc3     = [309, 225, 142, 82, 59,36, 31, 26, 19, 16, 13, 11, 9, 7, 6, 5, 5, 4, 3, 3, 3];
var rmc31_2  = [412, 301, 189, 109, 79, 48, 41, 34, 25, 21, 18, 15, 12, 10, 8, 7, 7, 5, 4, 4, 4];
var rmc4     = [531, 387, 244, 140, 101, 62, 53, 44, 33, 27, 23, 19, 16, 13, 11, 10, 8, 7, 6, 5, 5];
var rmc5     = [833, 608, 383, 221, 159, 98, 83, 70, 51, 43, 36, 30, 25, 20, 17, 15, 13, 11, 9, 8, 7];
var rmc6     = [1202, 877, 552, 318, 230, 141, 120, 100, 74, 63, 52, 43, 36, 29, 25, 22, 20, 16, 13, 11, 11];
var pvc41_2  = [11, 8, 5, 3, 1, 1, 1, 1, 1, 1];
var pvc43_4  = [21, 15, 9, 5, 4, 2, 1, 1, 1, 1, 1, 1, 1];
var pvc41    = [34, 25, 15, 9, 6, 4, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1];
var pvc411_4 = [60, 43, 27, 16, 11, 7, 6, 5, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var pvc411_2 = [82, 59, 37, 21, 15, 9, 8, 7, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var pvc42    = [135, 99, 62, 36, 26, 16, 13, 11, 8, 7, 6, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1];
var pvc421_2 = [193, 141, 89, 51, 37, 22, 19, 16, 12, 10, 8, 7, 6, 4, 4, 3, 3, 2, 1, 1, 1];
var pvc43    = [299, 218, 137, 79, 57, 35, 30, 25, 18, 15, 13, 11, 9, 7, 6, 5, 5, 4, 3, 3, 2];
var pvc431_2 = [401, 293, 184, 106, 77, 47, 40, 33, 25, 21, 17, 14, 12, 10, 8, 7, 6, 5, 4, 4, 3];
var pvc44    = [517, 377, 238, 137, 99, 61, 51, 43, 32, 27, 22, 18, 15, 12, 11, 9, 8, 7, 5, 5, 4];
var pvc45    = [815, 594, 374, 216, 156, 96, 81, 68, 50, 42, 35, 29, 24, 20, 17, 15, 13, 11, 9, 8, 7];
var pvc46    = [1178, 859, 541, 312, 225, 138, 117, 98, 73, 61, 51, 42, 35, 28, 24, 21, 19, 16, 13, 11, 11];
var pvc81_2  = [9, 6, 4, 2, 1, 1, 1, 1];
var pvc83_4  = [17, 12, 7, 4, 3, 1, 1, 1, 1, 1, 1, 1];
var pvc81    = [28, 20, 13, 7, 5, 3, 3, 2, 1, 1, 1, 1, 1, 1];
var pvc811_4 = [51, 37, 23, 13, 9, 6, 5, 4, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var pvc811_2 = [70, 51, 32, 18, 13, 8, 7, 6, 4, 2, 1, 1, 1, 1, 1, 1, 1, 1];
var pvc82    = [118, 86, 54, 31, 22, 14, 12, 10, 7, 6, 5, 4, 3, 3, 2, 1, 1, 1, 1, 1, 1];
var pvc821_2 = [170, 124, 78, 45, 32, 20, 17, 14, 10, 9, 7, 6, 5, 4, 3, 3, 3, 2, 1, 1, 1];
var pvc83    = [265, 193, 122, 70, 51, 31, 26, 22, 16, 14, 11, 9, 8, 6, 5, 5, 4, 3, 3, 2, 2];
var pvc831_2 = [358, 261, 164, 95, 68, 42, 35, 30, 22, 18, 15, 13, 10, 8, 7, 6, 6, 5, 4, 3, 3];
var pvc84    = [484, 338, 213, 123, 89, 54, 46, 39, 29, 24, 20, 17, 14, 11, 9, 8, 7, 6, 5, 4, 4];
var pvc85    = [736, 537, 338, 195, 141, 86, 73, 61, 45, 38, 32, 26, 22, 18, 15, 13, 12, 10, 8, 7, 7];
var pvc86    = [1055, 770, 485, 279, 202, 124, 105, 88, 65, 55, 46, 38, 31, 25, 22, 19, 17, 14, 12, 10, 9];

// populate dropdown lists

function addOption(selectbox, text, value) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;
    selectbox.options.add(optn);  
}

// display wirefill number

document.getElementById("conduitType").addEventListener("select", showTheDamnNumber);

function showTheDamnNumber() {
    var wsize = document.getElementById("wireSize").value;
    var csize = document.getElementById("tradeSize").value;
    var ctype = document.getElementById("conduitType").value;

    if (ctype == "Electical Metallic Tubing (EMT)") {
        ctype = "emt"
    } else if (ctype == "Intermediate Metal Conduit (IMC)") {
        ctype = "imc"
    } else if (ctype == "Electrical Nonmetallic Tubing (ENT)") {
        ctype = "ent"
    } else if (ctype == "PVC Schedule 40") {
        ctype = "pvc4"
    } else if (ctype == "PVC Schedule 80") {
        ctype = "pvc8"
    } else {
        ctype = "rmc"
    }

    var cs_nospace = csize.replace(" ", "");
    var cs_final = cs_nospace.replace("/","_");
    
    var walue = wire_size.indexOf(wsize);
    var fill_array = ctype + cs_final
    var output = window[fill_array][walue];
    
    if (output == null) {
        var output = "Won't Fit!";
    }

    document.getElementById("fillNumber").innerHTML = output;
}


function addoption_list() {
var dropdown = document.getElementById("wireSize");
if (dropdown) {
    for (var i=0; i < wire_size.length; ++i) {    
        addOption(dropdown, wire_size[i], wire_size[i]);
    }
}
var dropdown2 = document.getElementById("tradeSize");
if (dropdown2) {
    for (var i=0; i < trade_size.length; ++i) {
        addOption(dropdown2, trade_size[i], trade_size[i]);
    }
}

var dropdown3 = document.getElementById("conduitType");
if (dropdown3) {
    for (var i=0; i < conduit_type.length; ++i) {
        addOption(dropdown3, conduit_type[i], conduit_type[i]);
    }
}
showTheDamnNumber();
}
