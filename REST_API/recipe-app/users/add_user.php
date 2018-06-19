<?php
include ('../inc/db_connect.php');

if($_SERVER['REQUEST_METHOD']=='POST')
{
$data = json_decode(file_get_contents("php://input"));


$sql = "INSERT INTO user (name,username,email,password,usertype) VALUES ('".$data->firstname."','".$data->username."','".$data->email."','".$data->password."','1')";


$result = mysqli_query($server, $sql);
if($result)
	{
		$success=true;
	}
else{
		$success=false;
	} 

		
echo json_encode($success,JSON_PRETTY_PRINT);
}

?>