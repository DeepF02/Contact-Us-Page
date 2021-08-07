const form = document.querySelector('#contactForm');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const serviceID = 'default_service';
    const templateID = 'contact_form';
    let userDetails = {
        to_name: document.querySelector('#username').value,
        user_email: document.querySelector('#userEmail').value,
    };
    await emailjs.send(serviceID, templateID, userDetails)
        .then(res => {
            console.log("success", res.status);
            alert('Sent!');
        }, err => {
            alert(JSON.stringify(err));
        });

    form.submit();
});

