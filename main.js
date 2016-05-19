/*global $ */
var countryFunction = function () {
    "use strict";
    
    var i = 0, elem = $("#countrySelect")[0];
    for (i; i < data.length; i += 1) {
        $(elem).append("<option>" + data[i].country + "</option>");
    }
};

var regionFunction = function () {
    "use strict";
    var country = $("#countrySelect")[0].value, i = 0, r = 0, elem2 = $("#stateProvinceSelect")[0], elem3 = $("#PostalCode")[0];
    
    for (i; i < data.length; i += 1) {
        if (country === data[i].country) {
            var countryIndex = i;
            break;
        }
    }
    if (country === "Mypos") {
        //I can get this field to disable, but if information was entered before that it doesn't remove it. I can get around this, but it isn't ideal
        $(elem3).prop('disabled', true);
    } else {
        $(elem3).prop('disabled', false);
    }
    if (countryIndex < 0 || countryIndex == null) {
        $(elem2).empty();
    } else if (data[countryIndex].regions.length === 0) {
        $(elem2).empty();
        $(elem2).prop('disabled', true);
    } else {
        $(elem2).prop('disabled', false);
        $(elem2).empty().append("<option></option>");
        for (r; r < data[countryIndex].regions.length; r += 1) {
            $(elem2).append("<option>" + data[countryIndex].regions[r].name + "</option>");
        }
    }
};

