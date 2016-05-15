/*global $ */
var countryFunction = function () {
    "use strict";
    //Below is the format to access the region names inside of the countries
    console.log(data[0].regions[0].name);
    
    var i = 0, elem = document.getElementById("countrySelect"); 
    for (i; i < data.length; i += 1) {
        $(elem).append("<option>" + data[i].country + "</option>");
    }
   
    //elem.innerHTML += "hello test";
};

var regionFunction = function () {
    "use strict";
    //Below is how to pull the value for the country after clicking it
    var country = document.getElementById("countrySelect").value, i = 0, r = 0, elem2 = document.getElementById("stateProvinceSelect"), elem3 = document.getElementById("Postal Code");
    //elem2.options = null;
    
    for (i; i < data.length; i += 1) {
        if (country === data[i].country) {
            var countryIndex = i;
            console.log(countryIndex);
            break;
        }
    }
    if (country === "Mypos") {
        //Can get this field to disable, but if information was entered before that it doesn't remove it. I can get around this, but it isn't ideal
        $(elem3).trigger('reset');
        $(elem3).prop('disabled', true);
    } else {
        $(elem3).prop('disabled', false);
    }
    
    if (data[countryIndex].regions.length === 0) {
        $(elem2).empty();
        $(elem2).prop('disabled', true);
    } else {
        $(elem2).prop('disabled', false);
        $(elem2).empty().append("<option></option>");
        for (r; r < data[countryIndex].regions.length; r += 1) {
            $(elem2).append("<option>" + data[countryIndex].regions[r].name + "</option>");
        }
    }
    console.log(country);
    console.log(data[1].regions);
};

