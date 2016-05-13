var addressValidation = function (address1, address2, country, city, stateProvince, postal) {
   var sendToObject = function (key, value) {
      //Add the Key and Value to the JSON Object to send to the textarea  
    };
    
    var values = [address1, address2, country, city, stateProvince, postal];
    var keyValues = ["address1", "address2", "country", "city", "stateProvince", "postal"];
    var validateFlag = [var address1Valid, var address2Valid, var countryValid, var cityValid, var stateProvinceValid, var postalValid];

    for (i=0; i < values.length; i++)
        {
             if (values[i] !== null)
                {
                    sendToObject(keyValues[i], values[i]);
                    validateFlag[i] = true;
                }
            else
                {
                    validateFlag[i] = false;
                }
        }
    
    //Need to add specific validations for country, cityProvince, and postal
    
    
};