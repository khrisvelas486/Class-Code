// .on event listener documentation - https://api.jquery.com/on/#on-events-selector-data-handler

// Step 1: Hide a div
// target the button1 ID (#button1)
// specify the click event as the event you want to trigger the function (click)
$(" ").on(" ", function(){
    // target the hideMe class
    // slideToggle() on this selected class
    // $('.hideMe').slideToggle();


});

// Step 2: Change a color
$('#button2').on("click", function(){
    // target the cssChange class
    // Call the built-in jQuery function css() on this selected class
    // Change the background-color property of the cssChange class to red
    // $('.cssChange').css("background-color","red");


});

// Step 3: Append content
$('#button3').on("click", function(){
    // Target the appendMe class
    // Call the built-in jQuery function append() on this selected class
    //Append "<div class='child'>I got appended! Nice!</div>"
    // $('.appendMe').append("<div class='child'>I got appended! Nice!</div> ");



});


// Step 4: Animate a DIV
// Make a click event listener that targets button tag.
//  Target the animate class.
//      Call the built-in jQuery function animate() on this selected class.
//          Add values below to the animate function
//              {left: '250px'}, 1000
//                  $('.animate').animate( {left: '250px'}, 1000 );
