// Step 1: Create Tasks
// Create a click function that targets the id of enter
$("#enter").on("click", function () {

    var task = $("#todoItem").val();
    $("#todoList").append(
        "<div class='task'>"
         + task +
        "<i class='x fa-solid fa-xmark'></i></div>"
     );


});


// Step 2: Delete Tasks
// Create a jQuery selector that targets the document
$(document).on("click", ".x", function (){

    $(this).parent().remove();

})


// tep 3: Complete Tasks 
// Create another jQuery selector that targets the documen
// Attach a click event listener to it with three parameters—a click, the class of task, and an anonymous function.

$(document).on("click", ".task", function (){

    $(this).toggleClass("done");

    if ($(this).hasClass("done")){
        $(this).find("i").removeClass("fa-xmark");
        $(this).find("i").addClass("fa-check");
    }
    else {
        $(this).find("i").addClass("fa-xmark");
        $(this).find("i").removeClass("fa-check");
    }

})


