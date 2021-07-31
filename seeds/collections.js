const mongoose = require('mongoose');
const contactModel = require('../models/contact');

mongoose.connect('mongodb://localhost:27017/contact-form', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Database connected'));



const seedDB = async () => {
    // await contactModel.deleteMany({});
    const form = new contactModel({
        name: `heman mahabali`,
        email: `hemanmahabali@gmail.com`,
        year: 23,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum illum voluptas, in aut rerum. Illum, tenetur incidunt nulla consectetur nesciunt magni ab ad, eligendi tempore odit quis aliquam laborum.'
    })
    await form.save();
}

seedDB().then(() => {
    db.close()
})