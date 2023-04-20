$('.redBlock').on('click', function() {
    var widthValue = $('#widthInput').val();
    
    if(widthValue>10){
      // $('.redBlock').animate({width:widthValue});
      $(this).animate({width: widthValue});
    }
    else{
      alert("Width must be a positive number.");
    }
    
  });