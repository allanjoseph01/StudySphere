const mongoose = require('mongoose');

const assignmentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    due_date: {
        type: Date,
        required: true
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class",
        required: true
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    submissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "submission"
        }
    ]
}, {
    timestamps: true
});

module.exports = assignmentSchema;