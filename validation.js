/*global $ */

var addressValidation = function () {
    "use strict";
    
    var postalValid;
    
    //Postal Code validations
    var postalCodeVal = function () {
        switch ($("#countrySelect")[0].value) {
        case "Canada":
            $("#postalError")[0].innerHTML = "";
            var postalIndex = $("#PostalCode")[0].value;
            if (/[A-Z][0-9][A-Z][" "][0-9][A-Z][0-9]/i.test(postalIndex)) {
                return true;
            } else {
                $("#postalError")[0].innerHTML += "This is a required field and must be formatted as: A1A 1A1";
                return false;
            }
        case "Mypos":
            $("#postalError")[0].innerHTML = "";
            return false;
        case "United States":
            $("#postalError")[0].innerHTML = "";
            if (/[0-9]{5}/.test($("#PostalCode")[0].value)) {
                return true;
            } else {
                $("#postalError")[0].innerHTML += "This is a required field and must be 5 numbers";
                return false;
            }
        default:
            $("#postalError")[0].innerHTML = "";
            if (/^[A-Z0-9]+$/i.test($("#PostalCode")[0].value)) {
                return true;
            } else {
                $("#postalError")[0].innerHTML += "This is a required field and must contain letters and numbers only";
            }
        }
    };
    
   
    //Getting the Country Code
    var countryCode = function () {
        var i;
        for (i = 0; i < data.length; i += 1) {
            if ($("#countrySelect")[0].value == data[i].country) {
                var cCode = data[i].code;
                return cCode;
            }
        }
    };
    //Getting the Region Code
    var regionCode = function () {
        var u;
        if ($("#countrySelect")[0].value == "Mypos") {
            return "";
        } else {
            var i;
            for (i = 0; i < data.length; i += 1) {
                if ($("#countrySelect")[0].value == data[i].country) {
                    var countryIndex = i;
                    for (u = 0; u < data[countryIndex].regions.length; u += 1) {
                        if ($("#stateProvinceSelect")[0].value == data[countryIndex].regions[u].name) {
                            return data[countryIndex].regions[u].code;
                        }
                    }
                }
            }
        }
        
    };
    
    //Flag checking - will return a single true or false that determines if a JSON object is populated
    var flagCheck = function (address1, country, city, region, postalFlag) {
        if (country == "Mypos") {
            $("#address1Error")[0].innerHTML = "";
            $("#cityError")[0].innerHTML = "";
            if (address1 != "" && city != "") {
                return true;
            } else {
                if (address1 == "") {
                    $("#address1Error")[0].innerHTML = "This is a required field";
                }
                if (city == "") {
                    $("#cityError")[0].innerHTML = "This is a required field";
                }
                return false;
            }
        } else {
            var gettingTheIndex = function () {
                var i;
                for (i = 0; i < data.length; i += 1) {
                    if (country == data[i].country) {
                        return i;
                    }
                }
            };
            var countryIndex = gettingTheIndex();
            $("#address1Error")[0].innerHTML = "";
            $("#countryError")[0].innerHTML = "";
            $("#cityError")[0].innerHTML = "";
            $("#regionError")[0].innerHTML = "";
            
            if (address1 != "" && country != "" && city != "" && postalFlag == true) {
                if (data[countryIndex].regions.length < 0 && region == "") {
                    return true;
                } else if (data[countryIndex].regions.length >= 0 && region != "") {
                    return true;
                }
            } else {
                if (address1 == "") {
                    $("#address1Error")[0].innerHTML = "This is a required field";
                }
                if (country == "") {
                    $("#countryError")[0].innerHTML = "This is a required field";
                }
                if (city == "") {
                    $("#cityError")[0].innerHTML = "This is a required field";
                }
                if (region == "") {
                    $("#regionError")[0].innerHTML = "This is a required field";
                } else {
                    $("#regionError")[0].innerHTML = "This is a required field";
                }
                return false;
            }
        }
    };
    //Creating the JSON Object, populating it and sending it as a string to the output area
    var sendToObject = function (address1, address2, country, city, region, postal) {
        var outputObject = new Object();
        var values = [address1, address2, country, city, region, postal], i;
        var keyValues = ["address1", "address2", "country", "city", "region", "postal"];
        if (country == "MP") {
            values[5] = "";
        }
        
        for (i = 0; i < values.length; i += 1) {
            if (values[i] != "") {
                var name = keyValues[i];
                outputObject[name] = values[i];
            }
        }
        $("#outputArea")[0].innerHTML = JSON.stringify(outputObject);
    };
    
    postalValid = postalCodeVal();
    var newCountryCode = countryCode();
    var newRegionCode = regionCode();
    var finalFlagCheck = flagCheck($("#address1")[0].value, $("#countrySelect")[0].value, $("#City")[0].value, $("#stateProvinceSelect")[0].value, postalValid);
    if (finalFlagCheck == true) {
        sendToObject($("#address1")[0].value, $("#address2")[0].value, newCountryCode, $("#City")[0].value, newRegionCode, $("#PostalCode")[0].value);
    } else {
        $("#outputArea")[0].innerHTML = "";
    }
};