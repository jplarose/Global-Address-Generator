/*global $ */




var countryFunction = function () {
    "use strict";
    
    console.log(data);
    console.log("testing");
    
    
    var i = 0, elem = document.getElementById("countrySelect");
    
     
    for (i; i < data.length; i += 1) {
        $(elem).append("<option>" + data[i].country + "</option>");
    }
   
    //elem.innerHTML += "hello test";
};

