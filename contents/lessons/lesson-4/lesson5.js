$(function(){
	var count = 0;
	var active = 'label-success';
	var styles = Object.create(null);

	var setData = function (data) {
		var realData = data.split(",");
		return realData;
	}

	function cleanData(item) {
		if(item.indexOf('"') == -1 ) {
			item = item.replace(":", "");
			item = item.replace(" ", "");
			item = item.replace("*", "");
			item = item.replace(" ", "");
			item = item.replace("<strong>", "");
			item = item.replace("</strong>", "");
		}
		return item;
	};

	var displayStyle = function(row, prop, val, el) {
		//remove active class
		el.parent().find("span").removeClass(active);
		//add active class
		el.addClass(active);
		//apply styles to element
		$(row).css(prop, val);
	};

	var getInputValue = function () {

	};

	var dataSetup = function(event) {
		var el = $(this);
		var row = "#"+event.data.item;
		var prop = event.data.prop;
		var val = event.data.value;
		if(event.data.unit != null) {
			var unit = event.data.unit;
			var userData = prompt("Please enter size you want to apply.");
			if(unit == "percent") {	val = userData + "%"; }
			if(unit == "length"){ val = userData + "px"; }
			if(unit == "color") { val = userData; }
		}
		displayStyle(row, prop, val, el);
	};

	$("table:first-of-type tr").each(function(){
		var $row = $(this);
		var $td = $row.find('td');
		var rowName = 'row'+count;
		var rowData = Object.create(null);
		$td.each(function(i){
			var $el = $(this);

			if(i == 0) {
				$el.attr('id', rowName);
				rowData.prop = cleanData($el.html());
			}
			if(i == 1) {
				if($el.html().indexOf("<br") == -1) {
					var tempData = setData($el.html());
					rowData.value = tempData;
					var addBack = $("<div>");
					for (var i = 0; i < tempData.length; i++) {
						var addContent = $('<span class="label label-default">');
						var styleValue = cleanData(tempData[i]);
						var data = {
							"item": rowName,
							"prop": rowData.prop,
							"value": styleValue
						};
						addContent.html(styleValue);
						if(styleValue == "length" || styleValue == "percent" || styleValue == "color"){
							data.unit = styleValue;
							//console.log(data);
							addContent.on("click", data, dataSetup);
						}
						else {
							addContent.on("click", data, dataSetup);
						}
						addBack.append(addContent);

					}
					$el.html(addBack);
				}
			}

		});
		count++;
		styles[rowName] = rowData;

	});
	//console.log(styles);
});