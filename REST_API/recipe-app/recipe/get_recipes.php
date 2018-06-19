<?php
include ('../inc/db_connect.php');

$query="SELECT * FROM recipe";
$result = mysqli_query($server, $query);
$recipes=array();
while ($row = mysqli_fetch_assoc($result))
	{
		$recipes[]=array('id'=>$row['rec_id'],
					'name'=>$row['rec_name'],
					'ingredients'=>$row['ingredients'],
					'image'=>$row['image'],
					'description'=>$row['description'],
					'created_at'=>$row['created_at'],
					'updated_at'=>$row['updated_at']);
		
	}
	
echo json_encode($recipes,JSON_PRETTY_PRINT);	
?>