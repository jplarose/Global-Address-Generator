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
    var country = document.getElementById("countrySelect").value;
    //Need to search through the data object to get the index number, then I can list out the regions below it
    //Need to research how to gray out a form if there are no options for it i.e. Mypos
    
    console.log(country);
};

