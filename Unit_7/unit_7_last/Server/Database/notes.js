const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: String,
    note: String,
    label: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);

module.exports = {Note};