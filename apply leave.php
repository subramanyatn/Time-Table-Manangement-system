<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$reason = $_POST['reason'];
	$clgid = $_POST['clgid'];
    $datefrom = $_POST['datefrom'];
    $dateto = $_POST['dateto'];
    

	// Database connection
	$conn = new mysqli('localhost:3309','root','','demo');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into leaveapply(name, email, reason, clgid, datefrom, dateto) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssss", $name, $email, $reason, $clgid, $datefrom, $dateto);
		$execval = $stmt->execute();
		echo $execval;
        echo "Applied successfully...";
        header("Location: dashboard.html");
    
		$stmt->close();
		$conn->close();
	}
?>