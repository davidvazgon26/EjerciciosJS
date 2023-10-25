<?php
echo "Hola, respuesta desde el servidor ";

// var_dump($_FILES);

if (isset($_FILES["file"])) {
    $name = $_FILES["file"]["name"] ;  
    $file = $_FILES["file"]["tmp_name"]  ; 
    $error = $_FILES["file"]["error"]  ; 
    $destination = "../files/$name";
    move_uploaded_file($file, $destination);
}