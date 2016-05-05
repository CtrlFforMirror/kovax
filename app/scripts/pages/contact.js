$('.send-button').on('click', function (e) {
	var formIsValid = document.getElementById('contactForm').checkValidity();

	e.preventDefault();

	if (formIsValid) {
		alert('Thank you for getting in touch! We will contact you as soon as possible');
	} else {
		return false
	}

});
