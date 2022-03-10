const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    first_name: String,
    last_name: String,
    gender: String,
    avatar: String,
    job: Object,
    contacts: Object,
    location: Object
}, {versionKey: false});

const User = mongoose.model('User', UserSchema);

module.exports = User;
