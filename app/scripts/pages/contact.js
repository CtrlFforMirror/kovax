$('.send-button').on('click', function() {
  alert('Thank you for getting in touch. We will get back to you as soon as possible.');
});

function validate_form ()
{
    valid = true;

    if ('.contact-form'.value === "")
    {
        alert ( "Please fill in the required fields");
        valid = false;
    }

    return valid;
}
