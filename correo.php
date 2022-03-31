<?php 
	// Datos para el correo
	$destinatario = 'orellanaariel1998@gmail.com';
	
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];


	$header = "Contacto desde ";

	$carta = 'De: $nombre \n Correo: $email \n Mensaje $mensaje \n';


	// Enviando mensaje
	mail($destinatario, $asunto, $carta, $header);
	echo "<script>alert('correo enviado exitosamente')</script>";
	echo "<script> setTimeout(\"location.href='index.html'\",1000) </script>";

 ?>
