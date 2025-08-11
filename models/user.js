const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    mobile_no: Number,
    age: Number,
    password: {
        type: String,
        required: true
    },
    profile_pic: {
        type: String,
        default: 'default.png'
    },
    role: {
        type: String,
        enum: ['student', 'teacher'],
        required: true
    },
    classes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "class"
        }
    ]
}, {
    timestamps: true // Adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('user', userSchema);