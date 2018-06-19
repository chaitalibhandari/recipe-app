<?php include ('../inc/db_connect.php');

//$data = json_decode(file_get_contents("php://input"));

$users=array("data"=>$_GET['username']);

$check_username="SELECT * FROM  user WHERE username='".$_GET['username']."' ";
$result=mysqli_query($server,$check_username);
$num_rows=mysqli_num_rows($result);

if($num_rows==1)
{
	
	$isExist=true;
	
}
else{
	
	$isExist=false;
}
echo json_encode($isExist,JSON_PRETTY_PRINT);


?>