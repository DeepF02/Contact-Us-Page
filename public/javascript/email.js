// const form = document.querySelector('#contactForm');
// const serviceID = 'default_service';
// const templateID = 'contact_form';
// const sendmail = () => {
//     let userDetails = {
//         to_name: document.querySelector('#username').value,
//         user_email: document.querySelector('#userEmail').value,
//     };
//     const serviceID = 'default_service';
//     const templateID = 'contact_form';
//     emailjs.sendForm(serviceID, templateID, userDetails)
//         .then(res => console.log("success", res.status))
//         .catch(err => console.log(err))
// }

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     sendmail();
// })

// const btn = document.querySelector('#button');
const form = document.querySelector('#contactForm');

form.addEventListener('submit', e => {
    // e.preventDefault();

    // btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'contact_form';
    let userDetails = {
        to_name: document.querySelector('#username').value,
        user_email: document.querySelector('#userEmail').value,
    };
    emailjs.send(serviceID, templateID, userDetails)
        .then(res => {
            // btn.value = 'Send Email';
            console.log("success", res.status);
            alert('Sent!');
        }, err => {
            // btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});

// module.exports = email.js;
