const mongoose = require("mongoose");

const userSchema = ({
    username:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique: true,
    },
    password:{
        type: String,
        required : true
    },
    confirmPass:{
        type: String,
    },
});

const USER = mongoose.model('users', userSchema);

module.exports = USER;