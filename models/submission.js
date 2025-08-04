const mongoose = require('mongoose');

const submissionSchema = mongoose.Schema({
    assignment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "assignment",
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    file_url: {
        type: String,
        required: true
    },
    submitted_at: {
        type: Date,
        default: Date.now
    },
    grade: {
        type: Number
    },
    feedback: String
}, {
    timestamps: true
});

module.exports = submissionSchema;