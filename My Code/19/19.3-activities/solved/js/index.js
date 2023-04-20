function fade() {
$('.preloader').fadeOut("slow");
}
setTimeout(fade, 3000);

// Activity 1 - add a click event listener that targets the toggle class
$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});


// Activity 2 - create a click function that targets the class of searchButton
$(".searchButton").on("click", function(){
  $(".searchButton").toggleClass("active");
  if($(".searchButton").hasClass("active")) {
      $(".searchBar").css("height", "100vh");
      $("#searchForm").css("opacity","1");
      $(".searchIcon").removeClass("fa-search").addClass("fa-times");
  }
  else {
      $(".searchBar").css('height', "0vh");
      $("#searchForm").css("opacity","0");
      $(".searchIcon").removeClass("fa-times").addClass("fa-search");  
  }
});
