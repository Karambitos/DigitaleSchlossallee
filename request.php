<?php

	date_default_timezone_set('Europe/Berlin');

	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	include_once("lib/phpmailer6/vendor/autoload.php");

	function sendMailSMTP($msg, $recipient){

		$sa = array(
			"host" => "schlossallee-digital.de",
			"secure" => "ssl",
			"port" => "465",
			"login" => "noreply@schlossallee-digital.de",
			"pass" => "jwK\$m068",
			"smtp_debug" => false,
			"frommail" => "noreply@schlossallee-digital.de",
			"fromname" => "Schlossallee Digital"
		);

		$e = array(
			"subject" => "New contact request from ".$_POST["Name"],
			"template" => $msg,
			"recepients" => $recipient
		);

		$mail = new PHPMailer(true);
		$mail->SMTPDebug = $sa["smtp_debug"] ? true : false;
		$mail->CharSet = "UTF-8";
        $mail->IsSMTP();
        $mail->SMTPAuth = true;
        switch($sa["secure"]){
        	case "ssl":
        		$mail->SMTPSecure = 'ssl';
        		break;
        	case "tls":
        		$mail->SMTPSecure = 'tls';
        		break;
        	default:
        		$mail->SMTPSecure = false;
        }
        $mail->Host = $sa["host"];
        $mail->Port = $sa["port"];
        $mail->Username = $sa["login"];
        $mail->Password = $sa["pass"];
        $mail->SMTPAutoTLS = false;
        $mail->SetFrom($sa["frommail"], $sa["fromname"]);
        $mail->Subject = $e["subject"];
        $mail->MsgHTML($e["template"]);
        $mail->AddAddress($e["recepients"]);

		if (!$mail->send()) {
			return false;
		} else {
			return true;
		}
	}

	$msg = "";

	if (count($_POST) > 0){

		$msg .= "<h4>Request details:</h4>";
		foreach($_POST["data"] as $k => $v){
			$msg .= $k.": <b>".$v."</b><br>";
		}
		$msg .= "<hr>";
		$msg .= date("d.m.Y H:i:s");

		file_put_contents(".contact_requests/".date("d_m_Y_H_i_s_").md5($msg).".html", $msg);

		//$rmail = "as@emit.digital"; // test recepient
		//try {
			sendMailSMTP("<h3>Hello!</h3>".$msg, "felicitas.berchtold@aoki.de");
			sendMailSMTP("<h3>Hello!</h3>".$msg, "hello@emit.digital");
		//} catch (Exception $e){

		//}

		die("OK");
	}

?>
