<?php
include ('../inc/db_connect.php');
$where="rec_id='".$_GET['id']."'";
$sql = "SELECT * FROM recipe WHERE ".$where;
$result = mysqli_query($server, $sql);
$recipes=array();

$comments="SELECT * FROM comments c INNER JOIN user u ON c.user_id =u.user_id WHERE c.rec_id='".$_GET['id']."'";

$comments_result=mysqli_query($server, $comments);
$comments=array();
while($comment_row=mysqli_fetch_assoc($comments_result))
{
	$comments[]=array(
	'id'=>$comment_row['comment_id'],
	'desc'=>$comment_row['comment_desc'],
	'user_id'=>$comment_row['user_id'],
	'user_name'=>$comment_row['username']
	);
}
//print_r($comments);
while ($row = mysqli_fetch_assoc($result))
	{
		$recipes=array('id'=>$row['rec_id'],
					'name'=>$row['rec_name'],
					'ingredients'=>$row['ingredients'],
					'image'=>$row['image'],
					'description'=>$row['description'],
					'created_at'=>$row['created_at'],
					'updated_at'=>$row['updated_at'],
					'comments'=>$comments
					);
		
	}
	//$recipes=array('comments'=>$comments);
echo json_encode($recipes,JSON_PRETTY_PRINT);	
?>