document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple response message (you can implement actual sending logic)
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = `Thank you, ${name}! Your message has been sent.`;
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
