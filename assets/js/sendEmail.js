document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        })
        .then(function() {
            document.getElementById('contact-form').reset(); 
        })
})

