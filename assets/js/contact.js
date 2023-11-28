document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const contactForm = document.getElementById('name').value;
    const contactEmail = document.getElementById('email').value;
    const contactMessage = document.getElementById('message').value;

    console.log("Name: ", contactForm);
    console.log("Email: ", contactEmail);
    console.log("Message: ", contactMessage);
});
