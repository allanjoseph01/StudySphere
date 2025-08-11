const mongoose = require('mongoose');

const classroomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    ],
    notes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "note"
        }
    ],
    assignments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "assignment"
        }
    ],
    photo : {
        type : String,
        default : "classDefault.png"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('class', classroomSchema);