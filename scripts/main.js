
// active-class

$(".list-name-link").click(function() {
	 $(this).parents().find(".active").removeClass("active");
	 $(this).addClass("active");
   $(".name").text($(this).text());
});


// required

$(".personal-data-input").on("focusout", function() {
  if ( $(this).val() == "") {
    $(this).addClass("invalid").after("<span>Поле обязательно к заполнению</span>");
  } else {
    $(this).removeClass("invalid").next().remove();
  }
});

//open students-list

$(".open-list").click(function() {
  $("aside").toggleClass("show");
});

$(window).resize(function() {
  if ($(document).width() > 768) {
    $("aside").removeClass("show");
  }  
});

  

