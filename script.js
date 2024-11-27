document.querySelectorAll('a[href^="https://mail.google.com/mail/u/1/inbox"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('https://mail.google.com/mail/')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
emailjs.init('service_cktk581'); 
document.getElementById('contact').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    
    emailjs.sendForm('service_cktk581', 'template_dy6kc5b', this)
        .then(function(response) {
            console.log('Success:', response);
            alert('Your message has been sent!');
        
            document.getElementById('contact').reset();
        }, function(error) {
            console.log('Error:', error);
            alert('Oops! Something went wrong.');
        });
});