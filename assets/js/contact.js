const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            contactForm.reset()

        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)