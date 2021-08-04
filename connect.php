<?php 

$host="localhost:3309";
$user="root";
$password="";
$db="demo";

mysql_connect($host,$user,$password);
mysql_select_db($db);

if(isset($_REQUEST["submit"]))
{
    $username =$_REQUEST["username"];
    $password =$_REQUEST["password"];
    $query= mysql_query("select * from newuser where username='$username' && password='$password'");
    $rowcount= mysql_num_rows($query);
    if($rowcount==true){
        echo "Success !";
        header("Location: loading.html");
    }
    else{
        echo "Try again !";
    }
}
?>