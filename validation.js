/*global $ */

var addressValidation = function () {
    "use strict";
    
    var values = [$("#address1")[0], $("#address2")[0], $("#countrySelect")[0], $("#City")[0], $("#stateProvinceSelect")[0], $("#PostalCode")[0]], i = 0, o = 0, address1Valid, address2Valid, countryValid, cityValid, stateProvinceValid, postalValid;
    var keyValues = ["address1", "address2", "country", "city", "stateProvince", "postal"];
    var validateFlag = [address1Valid, address2Valid, countryValid, cityValid, stateProvinceValid, postalValid];

    //Not-Empty validation check
    for (i; i < values.length; i += 1) {
        if (values[i].value != "") {
            //sendToObject(keyValues[i], values[i]);
            validateFlag[i] = true;
        } else {
            validateFlag[i] = false;
        }
    }
     
    //Postal Code validations
    var postalCodeVal = function () {
        switch ($("#countrySelect")[0]) {
        case "Canada":
            var lengthVal, spaceVal, alphaVal, digitVal, finalVal;
                //if statement to determine if it is formatted properly (A1A 1A1)
            if ($("#PostalCode").length == 7) {
                lengthVal = true;
            } else {
                lengthVal = false;
            }
            var postalIndex = $("#PostalCode").split(""), q = 0;
            console.log(postalIndex[2]);
                
            if (postalIndex[3] == " ") {
                spaceVal = true;
            } else {
                spaceVal = false;
            } 
            for (q; q < postalIndex.length; q += 1) {
                if (q == 0 || q == 2 || q == 5) {
                    if (Character.isLetter(postalIndex[q])) {
                        alphaVal = true;
                    } else {
                        alphaVal = false;
                    }
                }
            }
            for (q = 0; q < postalIndex.length; q += 1) {
                if (q == 1 || q == 4 || q == 6) {
                    if (Character.isDigit(postalIndex[q])) {
                        digitVal = true;
                    } else {
                        digitVal = false;
                    }
                }
            }
                
            if (lengthVal == true && spaceVal == true && alphaVal == true && digitVal == true) {
                return true;
            } else {
                return false;
            }
                //Possibly Regex to solve: var regex = /([ABCEGHJKLMNPRSTVWXYZ]\d){3}/i; 
                //or var tmp = new RegExp(/[A-Z][0-9][A-Z][" "][0-9][A-Z][0-9]/i) 
        case "Mypos":
            return false;
        case "United States":
                //if statement to determine if it is formatted properly (11111)
                //if (length == 5) && all digits
            break;
        default:
                //if statement to determine if it is formatted properly (alpha-numeric only)
        }
    };
    
   
    //Need to get the code for region and country to send to the object instead of the straight value
    
    //Flag checking - then error sending or sending the info to the JSON object
    
    var sendToObject = function (key, value) {
      //Add the Key and Value to the JSON Object to send to the textarea  
    };
    
    validateFlag[5] = postalCodeVal();
    
    for (o; o < values.length; o += 1) {
        if (validateFlag[o] == true) {
            console.log(values[o].value);
        }
    }
};