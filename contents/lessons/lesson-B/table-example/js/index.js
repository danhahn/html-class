$(document).ready(function() {
  
  var count = 0;
  
  var $el = $("#table");
  
  $("#addtable").on("click", function() {
    var btn = $(this);
    $('<table>').appendTo($el);
    btn.addClass("disabled");
    $("#addrow").removeClass("disabled");
    $("#addstyle").removeClass("disabled");    
  });
  
  $("#addrow").on("click", function() {
    var btn = $(this);
    $('<tr>').appendTo($el.find("table"));
    $("#addcol, #addheader").removeClass("disabled");
    count++;
    if(count >= 2) {
      $("#fixcol").removeClass("hide");
    }
  });
  
  $("#addcol").on("click", function() {
    var btn = $(this);
    $('<td>').html("Column").appendTo($el.find("tr:last-of-type"));
  });
  
  $("#addheader").on("click", function() {
    var btn = $(this);
    
    $(".header").remove();
    
    var headerRow = $("<tr class='header'>");
    
    var total = [];
    $el.find("tr").each(function(){
      var colCount = $(this).find("td");
      total.push(colCount.length);
    });
    
    var largest = Math.max.apply(Math, total);
      
    for(var i=0; i < largest; i++) {         
      $('<th>').html("Header").prependTo(headerRow);
    }
    
    headerRow.prependTo($el.find("table"));
    
    
  });
  
  $("#addstyle").on("click", function() {
    var btn = $(this);
    $el.find("table").addClass("table table-bordered");
    btn.addClass("disabled");
  });
  
  $("#fixcol").on("click", function() {
    var total = [];
    $el.find("tr:not(.header)").each(function(){
      var colCount = $(this).find("td");
      total.push(colCount.length);
    });
    
    var largest = Math.max.apply(Math, total);
  
    $el.find("tr:not(.header)").each(function(){
      $(this).find("td").remove();
      for(var i=0; i < largest; i++) {         
         $('<td>').html("Column").prependTo($(this));
      }
    });
    
  });
  
});