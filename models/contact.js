const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String,
    email: String,
    year: Number,
    message: String
})

const contactModel = mongoose.model('contactModel', ContactSchema);
module.exports = contactModel;