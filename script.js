$(document).ready(function() {
	$('#teacher-login').click(function() {
		$('#parent-login').css('background-color', '#369').css('color', '#000');
		$('#teacher-login').css('background-color', '#24476b').css('color', '#fff');
		$('#parent-login-wrapper').hide();
		$('#teacher-login-wrapper').show();
	});
	$('#parent-login').click(function() {
		$('#teacher-login').css('background-color', '#369').css('color', '#000');
		$('#parent-login').css('background-color', '#24476b').css('color', '#fff');
		$('#parent-login-wrapper').show();
		$('#teacher-login-wrapper').hide();
	});
	$('#teacher-register').click(function() {
		$('#parent-register').css('background-color', '#369').css('color', '#000');
		$('#teacher-register').css('background-color', '#24476b').css('color', '#fff');
		$('#parent-register-wrapper').hide();
		$('#teacher-register-wrapper').show();
	});
	$('#parent-register').click(function() {
		$('#teacher-register').css('background-color', '#369').css('color', '#000');
		$('#parent-register').css('background-color', '#24476b').css('color', '#fff');
		$('#parent-register-wrapper').show();
		$('#teacher-register-wrapper').hide();
	});
});
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}