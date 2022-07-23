const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    registration_date: { type: Date, default: Date.now }
});

const User = mongoose.model( 'User', UserSchema );
module.exports = User;