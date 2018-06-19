<?php include ('../inc/db_connect.php');

$data = json_decode(file_get_contents("php://input"));

if($_SERVER['REQUEST_METHOD']=='POST')
{

	$f=$_FILES;
	$fname=$_POST['fname'];
	$mname=$_POST['mname'];
	$lname=$_POST['lname'];
	$email=$_POST['email'];
	$username=$_POST['username'];
	$password=$_POST['password'];
	$address=$_POST['address'];
	$phone=$_POST['phone'];
	$pincode=$_POST['pincode'];
	$date_of_birth=$_POST['date_of_birth'];
	
	$size=sizeof($_FILES);
	
	print_r($_FILES['avatar']);
	
	
	if($size!=0)
	{
		$target_dir ='../uploads/';
		$image_name=$username.basename($_FILES['avatar']['name']);
		$target_file = $target_dir . $image_name;
		move_uploaded_file($_FILES['avatar']['tmp_name'], $target_file);
		$users=array('target'=> $target_dir);
	}
	else{
	
		$image_name="";
	}
	
	
	
	$query="INSERT INTO user (first_name,last_name,username,password,image,phone,dateofbirth,email)
	VALUES(
	'".$fname."',
	'".$lname."',
	'".$username."',
	'".$password."',
	'".$image_name."',
	'".$phone."',
	'".$date_of_birth."',
	'".$email."'
	)";
	//echo $query;
	$result=mysqli_query($server,$query);
	if($result)
	{
		$success=true;
	}else{
		$success=false;
	}
	
	
}	



//print_r($_FILES['avatar']);	
echo json_encode($success,JSON_PRETTY_PRINT);


?>