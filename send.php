<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

if (isset($_POST['email-send'])) {
    $email = $_POST['email'];
    $title = 'Новая подписка с сайта Universal Magazine';
    $body = "
  <h2>Новая подписка</h2>
  <b>Email:</b> $email<br>
  ";
} elseif (isset($_POST['comment-send'])) {
    $comment = $_POST['comment'];
    $title = 'Новый комментарий с сайта Universal Magazine';
    $body = "
  <h2>Новый комментарий</h2>
  <b>Комментарий:</b></br>$comment
  ";
} elseif (isset($_POST['modal-send'])) {
    $theme = $_POST['theme'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    $title = 'Новая заявка с сайта Universal Magazine';
    $body = "
  <h2>Новая Заявка</h2>
  <b>Тема:</b> $theme<br>
  <b>Email:</b> $email<br><br>
  <b>Сообщение:</b><br>$message<br>
  ";
} else {
    $email = $_POST['email'];
    $comment = $_POST['comment'];
    $theme = $_POST['theme'];
    $message = $_POST['message'];
    $title = 'Ошибочное сообщение с сайта Universal Magazine';
    $body = "
  <h2>Ошибочное сообщение</h2>
  <b>Тема:</b> $theme<br>
  <b>Email:</b> $email<br><br>
  <b>Сообщение:</b><br>$message<br><br>
  <b>Комментарий:</b><br>$comment
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPAuth = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username = 'login@gmail.com'; // Логин на почте
    $mail->Password = '123456'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('login@gmail.com', 'Nadezhda Richter'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('login-2@gmail.com');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $result = 'success';
    } else {
        $result = 'error';
    }
} catch (Exception $e) {
    $result = 'error';
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
