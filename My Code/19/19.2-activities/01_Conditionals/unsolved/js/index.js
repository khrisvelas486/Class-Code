
// You already have an event listener
// that listens for a click event in any element with a class of .tab
$('.tab').on("click", function(){

    if ($(this).hasClass("tab1")) {

        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        $("#tabContent1").css("display", "block");
        $("#tabContent2").css("display", "none");
    }

    else if ($(this).hasClass("tab2")) {

        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        $("#tabContent2").css("display", "block");
        $("#tabContent1").css("display", "none");

    }
    
    // Add an if-else statement   

});



