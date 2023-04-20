// Add an event listener for the click event on the themeChange class.


$(".themeChange").on("click", function () {

    if($(this).hasClass("regular")) {
       $("#theme").attr("href", "css/blank.css");
    }

    else if ($(this).hasClass("blue")) {
        $("#theme").attr("href", "css/blue.css");

    }
    
    else if ($(this).hasClass("dark")) {
        $("#theme").attr("href", "css/dark.css");
        
    }

});

