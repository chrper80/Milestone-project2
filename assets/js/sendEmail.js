
/*I had a lot of help from the tutor team and my mentor with the code in this file*/

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function () {
            /*Calling Sweet alert with Swal.fire. My mentor helped me here*/
            Swal.fire( 
                'Sent!',
                'Your message was sent.',
                'success'
            );
        }, function () {
            Swal.fire(
                'Error',
                'An error occurred',
                'error'
            );
        })
        
        /*The tutor team helped me here*/
        .then(function () {
            document.getElementById('contact-form').reset();
        });
});




