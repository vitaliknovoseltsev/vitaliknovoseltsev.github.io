<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$type = $_POST['user_type'];
$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
// $file = $_FILES['myfile'];

// Формирование самого письма
$title = "$type";
$body = "
<b>Имя:</b> $name<br>
<b>Почта:</b> $tel
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host = 'smtp.mail.ru';
	
	 $mail->Username = 'chel.detalis@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
	 $mail->Password = 'TcUYYoi32ii`'; // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';
	 $mail->Port       = 465;

    $mail->setFrom('chel.detalis@mail.ru', 'Челдеталь'); // ТУТ УКАЗЫВАЕМ ПОЧТУ КУДА БУДУТ ПРИХОДИТЬ ЗАЯВКУ

    // Получатель письма
    $mail->addAddress('andrewstarcevmarty@gmail.com');

   
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);