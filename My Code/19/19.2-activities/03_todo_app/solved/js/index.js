// Step 1: Create Tasks
$("#enter").on("click", function(){
  var task = $("#todoItem").val();
  $("#todoList").append(
      "<div class='task'>" 
      + task + 
      "<i class='x fa-solid fa-xmark'></i></div>"
  );
});

// Step 2: Delete Tasks
$(document).on("click", ".x", function(){
  $(this).parent().remove();
});

// tep 3: Complete Tasks 
$(document).on("click", ".task", function(){
  $(this).toggleClass("done");
  if ($(this).hasClass("done")) {
      $(this).find("i").removeClass("fa-xmark");
      $(this).find("i").addClass("fa-check");
  }
  else {
      $(this).find("i").addClass("fa-xmark");
      $(this).find("i").removeClass("fa-check");
  }
});

