/*global $ */

var addressValidation = function () {
    "use strict";
    var sendToObject = function (key, value) {
      //Add the Key and Value to the JSON Object to send to the textarea  
    };
    
    var values = [$("#address1")[0], $("#address2")[0], $("#countrySelect")[0], $("#City")[0], $("#stateProvinceSelect")[0], $("#PostalCode")[0]], i = 0, o = 0, address1Valid, address2Valid, countryValid, cityValid, stateProvinceValid, postalValid;
    var keyValues = ["address1", "address2", "country", "city", "stateProvince", "postal"];
    var validateFlag = [address1Valid, address2Valid, countryValid, cityValid, stateProvinceValid, postalValid];

    for (i; i < values.length; i += 1) {
        if (values[i] != "") {
            //sendToObject(keyValues[i], values[i]);
            validateFlag[i] = true;
        } else {
            console.log(keyValues[i] + "is false.");
            validateFlag[i] = false;
        }
    }
    
    for (o; o < values.length; o += 1) {
        if (validateFlag[o] == true) {
            console.log(values[o].value);
        }
    }
    
    //Need to add specific validations for country, cityProvince, and postal
    
    
};