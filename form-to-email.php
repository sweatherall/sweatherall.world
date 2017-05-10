<?php

	if(!isset($_POST['submit']))
	{
		//This page should not be accessed directly. Need to submit the form.
		echo "error; you need to submit the form!";
	}

	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];



	//Validate first
	if(empty($name)||empty($visitor_email)) 
	{
	    echo "Name and email, please :)";
	    exit;
	}

	if(IsInjected($visitor_email))
	{
	    echo "Please enter a valid e-mail";
	    exit;
	}


    $email_from = 'steph@stephweatherall.com';
 
    $email_subject = "New message from website!";
 
    $email_body = "Message from : $name.\n E-mail: $email \n".
                            "Message:\n $message".

 
	$to = "sweather131@gmail.com";
	 
	$headers = "From: $email_from \r\n";
	 
	$headers .= "Reply-To: $visitor_email \r\n";
	 
	mail($to,$email_subject,$email_body,$headers);
	 
	header('Location: contact.html');

	// Function to validate against any email injection attempts
	function IsInjected($str)
	{
	  $injections = array('(\n+)',
	              '(\r+)',
	              '(\t+)',
	              '(%0A+)',
	              '(%0D+)',
	              '(%08+)',
	              '(%09+)'
	              );
	  $inject = join('|', $injections);
	  $inject = "/$inject/i";
	  if(preg_match($inject,$str))
	    {
	    return true;
	  }
	  else
	    {
	    return false;
	  }
	}


?>

