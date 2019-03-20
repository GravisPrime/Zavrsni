$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});

function dosubmit(){
    document.forms["register-form"].action = "offer.html?" 
    window.event.returnValue = true;
}
function dosubmitLog(){
    document.forms["login-form"].action = "offer.html?" 
    window.event.returnValue = true;
}
// +  document.forms["unos"]["ime"].value + document.forms["unos"]["prezime"].value + document.forms["unos"]["member"].checked + " " + document.forms["unos"]["type"].value;