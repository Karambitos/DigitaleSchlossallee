$(document).ready(() => {

	$('.form-section .checkbox-wrapper input').css({
		position: "absolute",
		opacity: 0,
		right: 0,
		width: "auto",
		height: "auto",
		zIndex: -1
	});

	$('#contact-form').submit(event => {
		event.preventDefault();

		var formData = {
			Thema: $('#thema').val(),
			Firma: $('#user_firma').val(),
			Name: $('#user_name').val(),
			Email: $('#user_email').val(),
			Nachricht: $('#user_message').val(),
			Legal: $('#legal').is(":checked") ? "akzeptiert" : "-"
		}

		$.post("request.php", { data: formData }, function(resp){
			if (resp == "OK"){
				$(".form-section").removeClass('active');
				$(".success-section").addClass('active');
				$(".form-data").val("");
				$("#legal").prop("checked", false);
			} else {
				alert("Error sending message!");
			}
		});

		return false;
	});

});

