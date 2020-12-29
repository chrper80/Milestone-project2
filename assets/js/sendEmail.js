document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function () {
            Swal.fire(
                'Sent!',
                'Your message was sent.',
                'success'
            )
        }, function () {
            Swal.fire(
                'Error',
                'An error occurred',
                'error'
            )
        })
        .then(function () {
            document.getElementById('contact-form').reset();
        })
})




