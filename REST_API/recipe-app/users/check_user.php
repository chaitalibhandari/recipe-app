<?php
include ('../inc/db_connect.php');

$data = json_decode(file_get_contents("php://input"));

$sql = "SELECT * FROM user WHERE username='".$data->username."' AND password='".$data->password."'";

$users=array();
$result = mysqli_query($server, $sql);
$num_rows=mysqli_num_rows($result);
if($num_rows==1)
{
$row = mysqli_fetch_assoc($result);
$users=array('isValid'=>true,
			 'id'=>$row['user_id'],
			 'username'=>$row['username'],
			 'password'=>$row['password'],
			 'usertype'=>$row['usertype']);
}
else{
$users=array('isValid'=>false);
}		
echo json_encode($users,JSON_PRETTY_PRINT);

?>