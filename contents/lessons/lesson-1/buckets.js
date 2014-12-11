$(function() {

	var reset = function() {
		$(".buckets .active").removeClass("active");
		$("#bucketContent").remove();
	};

	var buildDispaly = function(item) {
		reset();
		var $el = $("<div class='alert alert-success' id='bucketContent'></div>");
		$el.html(item.data("tip"));
		$el.insertAfter(item.parent());
		item.addClass("active");
	}

	var _init = function() {
		var $el = $('.buckets');
		var items = $el.find('li');
		var $content = $el.next().find('li');

		var contents = [];

		$content.each(function(){
			var el = $(this);
			var cnt = el.html();
			contents.push(cnt);
		});

		if (items.length === $content.length) {
			items.each(function(i) {
				var $el = $(this);
				$el.data("tip", contents[i]);
				$el.on("click", function() {
					buildDispaly($(this));
				})
			});
		}
		$content.remove();
	}

	_init();
});