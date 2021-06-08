const mongoose = require('mongoose');
const { Schema } = mongoose;
const personSchema = new Schema({
    nombre: String,
    edad: Number,
    nacimiento: Date,
    sangre: String
});
module.exports = mongoose.model('person', personSchema);      