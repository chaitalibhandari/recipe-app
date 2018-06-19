<?php
header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");


$host="localhost";
$database="recipe-application";
$username="root";
$password="";


$server=mysqli_connect($host, $username, $password) or die(mysqli_error());
mysqli_select_db($server,$database) or die(mysqli_error());
?>