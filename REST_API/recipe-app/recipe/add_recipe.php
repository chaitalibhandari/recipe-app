<?php 

include ('../inc/db_connect.php');

$data = json_decode(file_get_contents("php://input"));

if($_SERVER['REQUEST_METHOD']=='POST')
{
	
	
	$name=$_POST['name'];
	
	$description=$_POST['description'];
	$ingredients= implode(",",$_POST['ingredients']);
	
	
	$f=$_FILES;
	$name=$_POST['name'];
	$size=sizeof($_FILES);
	$date=time();
	 if($size!=0)
	{
		
		$target_dir ='../uploads/';
		$image_name=$date.basename($_FILES['avatar']['name']);
		$target_file = $target_dir . $image_name;
		move_uploaded_file($_FILES['avatar']['tmp_name'], $target_file);
		//$users=array('target'=> $target_dir);
	}
	else{
	
		$image_name=" ";
	}
	 
	$query="INSERT INTO recipe (rec_name,ingredients,image,description) VALUES('".$name."','".$ingredients."','".$image_name."','".$description."')";
	
	$result=mysqli_query($server,$query);
	if($result)
	{
		$success=true;
	}else{
		$success=false;
	} 
$success=true;	
echo json_encode($success,JSON_PRETTY_PRINT);	
	
}


?>