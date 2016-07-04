$(window).on("load", function () {
    // Unfortunately this component is not working properly on Chico UI v2.x.x

    // Implementation on Chico UI v1.0.0
    
    var $carousel = $(".ch-carousel").carousel({
            "arrows": true,
            "limitPerPage": 3,
            "pagination": false
        }  
    );
});