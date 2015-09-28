$("form").on("submit", function() {
  
  var username = $("#username");
  var password = $("#password");
  
  if(username.val() == "") {
    username.addClass("error");
    $('[for="username"]').addClass("error");
    $('<p>').html('Please Enter your UserName').insertAfter('[for="username"]');
  }
  if(password.val() == "") {
    password.addClass("error");
    $('[for="password"]').addClass("error");
    $('<p>').html('Please Enter your password').insertAfter('[for="password"]');
  }
  
  return false;
})