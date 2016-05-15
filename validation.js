

var addressValidation = function (address1, address2, country, city, stateProvince, postal) {
    "use strict";
        var sendToObject = function (key, value) {
      //Add the Key and Value to the JSON Object to send to the textarea  
        };
    
        var values = [address1, address2, country, city, stateProvince, postal], i = 0;
        var keyValues = ["address1", "address2", "country", "city", "stateProvince", "postal"];
        var validateFlag = [address1Valid, address2Valid, countryValid, cityValid, stateProvinceValid, postalValid];

        for (i; i < values.length; i += 1) {
            if (values[i] !== null) {
                sendToObject(keyValues[i], values[i]);
                validateFlag[i] = true;
            } else {
                validateFlag[i] = false;
            }
        }
    
    //Need to add specific validations for country, cityProvince, and postal
    
    
    };