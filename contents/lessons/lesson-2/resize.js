$(function() {
  var sizes = ['25%', '50%', '100%', '150%', '200%'];

  var $list = $('<div>')
    .addClass('button-group')
    .attr('role', 'group');

  for (var i = 0; i < sizes.length; i++) {
    var size = sizes[i];
    var $button = $('<button>')
      .html(size)
      .click(function() {
        $('.content img')
          .css(
            {
              'width': $(this).html()
            }
          )
      });
    $button.appendTo($list);
  }

  $list.insertAfter("#resize");

});
