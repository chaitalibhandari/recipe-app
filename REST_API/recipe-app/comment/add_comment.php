<?php
include ('../inc/db_connect.php');

if($_SERVER['REQUEST_METHOD']=='POST')
{
$data = json_decode(file_get_contents("php://input"));


$sql = "INSERT INTO comments (rec_id,comment_desc,user_id) VALUES ('".$data->rec_id."','".$data->review."','".$data->user_id."')";


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