const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:12345678S%40@assignment.mopurbv.mongodb.net/');
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

module.export = {
    User,
}
