<?php

if(_POST)
{
	//Setting up form variables
	$uin = $_POST['uin'];
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$major = $_POST['major'];
	$family = $_POST['family'];
	$position = $_POST['position'];
	$joined = $_POST['joined'];
	$graduation = $_POST['graduation'];
	$personal_email = $_POST['personal_email'];
	$tamu_email = $_POST['tamu_email'];
	$phone_number = $_POST['phone_number'];

	// Data validation
	if(!$uin) { die("UIN was not entered"); }
	$joined = $joined . '-01';
	$graduation = $graduation . '-01';

	//Setting connection variables
	$hostname="localhost";
	$username="acesan7_max";
	$password="dbpw2669";
	$dbname="acesan7_db";
	$usertable="members";

	//Connect to the database
	$connection = mysql_connect($hostname, $username, $password);
	if (!$connection) { die('Could not connect: ' . mysql_error()); }
	mysql_select_db($dbname, $connection);

	//Setup our query
	$query = "INSERT INTO `$usertable` (`uin`, `first_name`, `last_name`, `major`, `family`, `position`, `joined`, `graduation`, `personal_email`, `tamu_email`, `phone_number`) VALUES ('$uin', '$first_name', '$last_name', '$major', '$family', '$position', '$joined', '$graduation', '$personal_email', '$tamu_email', '$phone_number')";

	//Run the Query
	$result = mysql_query($query);

	// Display feedback
	echo "<h2>Member info updated, thank you " . $first_name . ".<h2>";

	mysql_close($connection);	// Close database connection
}
?>
