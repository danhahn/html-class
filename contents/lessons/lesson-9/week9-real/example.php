<!doctype html>
<html>
<head>
	<title>PHP Example</title>
	<link rel="stylesheet" href="style.css"/>
</head>
<body>

<div class="site">
	<h1>PHP Example</h1>
	<div class="row">
		First Name : <?=$_GET["first-name"]?>
	</div>
	<div class="row">
		Last Name : <?=$_GET["last-name"]?>
	</div>
	<div class="row">
		Email : <?=$_GET["email"]?>
	</div>
	<div class="row">
		Delivery : <?=$_GET["delivery"]?>
	</div>
	<div class="row">
		Pizza Type : <?=$_GET["pizza"]?>
	</div>
	<div class="row">
		Toppings : <?$toppings = $_GET["toppings"];if($toppings){for($i=0;$i<sizeof($toppings);$i++){?><?=$toppings[$i]?>,<?}}?>
	</div>
	<div class="row">
		Address : <?=$_GET["address"]?>
	</div>
	<div class="row">
		City : <?=$_GET["city"]?>
	</div>
	<div class="row">
		State : <?=$_GET["state"]?>
	</div>
	<div class="row">
		Notes: <?=$_GET["notes"]?>
	</div>
	<a href="forms-example.html"> &lt; Back to Example</a>
</div>

</body>
</html>