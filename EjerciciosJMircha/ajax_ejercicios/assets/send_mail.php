<?php
if(isset($_POST)){
    error_reporting(0); // Para que no mande codigo HTML en las cabeceras
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $comments = $_POST["comments"];
   
    $domain = $_SERVER["HTTP_HOST"];
    $to = "davidvazgon@hotmail.com";
    $subject="Constacto desde el formulario del sitio $domain: $subject";
    $message = "
    <p>
    Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
    <li>Nombre: <b>$name</b></li>
    <li>Email: <b>$email</b></li>
    <li>Asunto: <b>$subject</b></li>
    <li>Comentarios: <b>$comments</b></li>
    </ul>
    ";

    $headers = "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n"."From: Envio Automatico No Responder <no-reply@$domain>";

    $send_mail = mail($to, $subject, $message, $headers);

    if ($send_mail) {
        $res=[
            "err"=>false,
            "message"=>"Tus datos han sido enviados"
        ];
    }else{
        $res=[
            "err"=>true,
            "message"=>"Error, envia tus datos nuevamente."
        ];
    }

    header("Access-Control-Allow-Origin: *");
    // header("Access-Control-Allow-Origin: https://davidvazquez.com");
    header('Content-type: application/json');
    echo json_encode($res);
    exit;
}
?>
