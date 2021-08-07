const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const contactModel = require('./models/contact');

mongoose.connect('mongodb://localhost:27017/contact-form', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected'));

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/contact', (req, res) => {
    res.render('contactUs')
});

app.get('/contact/submit', (req, res) => {
    res.render('submit')
});

app.post('/contact', async (req, res) => {
    // const form = document.querySelector('#contactForm');
    // form.addEventListener('submit', async event => {
        // event.preventDefault();
        // const serviceID = 'default_service';
        // const templateID = 'contact_form';
        // let userDetails = {
        //     to_name: document.querySelector('#username').value,
        //     user_email: document.querySelector('#userEmail').value,
        // };
        // await emailjs.send(serviceID, templateID, userDetails)
        //     .then(res => {
        //         console.log("success", res.status);
        //         alert('Sent!');
        //     })
            // }, err => {
            //     alert(JSON.stringify(err));
            // });
    // });
    const contactInfo = new contactModel(req.body.contact);
    await contactInfo.save();
    res.redirect(`/contact/submit`);
})

app.listen(1800, () => {
    console.log("Serving on port 1800")
})