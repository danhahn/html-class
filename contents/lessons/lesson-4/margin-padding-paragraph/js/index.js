$(document).ready(function() {
  
  var count = 0;
  
  var $el = $("#content");

	var reset = function() {
		return $(".active").removeClass("active");
	}
  
  $("#padding").on("click", function() {
	  reset();
	  $(this).addClass("active");
    $el.find("p").removeClass("margin");
    $el.find("p").addClass("padding");

  });
  
  $("#margin").on("click", function() {
	  reset();
	  $(this).addClass("active");
	  $el.find("p").removeClass("padding");
    $el.find("p").addClass("margin")                 
  });

	$("#reset").on("click", function() {
		reset();
		$el.find("p").removeClass("padding");
		$el.find("p").removeClass("margin");
	});

	$("#color").on("click", function() {
		$(this).toggleClass("btn-warning");
		$el.find("p").toggleClass("color");
	});
  
});