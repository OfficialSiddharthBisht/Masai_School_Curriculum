const {Note} = require('../Database/notes');
const jwt = require('jsonwebtoken');

const getAllNotes = async (req, res) => {
    try {
        const {token} = req.headers;
        let user = jwt.decode(token);
        const notes = await Note.find({user: user.id});
        return res.status(200).send(notes);
    } catch (error) {
        // console.log('called');
        return res.status(500).send({message: error.message});
    }
}

const createNote = async (req, res) => {
    try {
        const {token} = req.headers;
        let user = jwt.decode(token);
        let note = req.body;
        note.user = user.id;
        note = new Note(note);
        await note.save();
        return res.status(200).send(note);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

const deleteNote = async (req, res) => {
    try {
        const {id} = req.params;
        await Note.findByIdAndDelete(id);
        return res.status(200).send({message: 'Note deleted'});
        
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}

const updateNote = async (req, res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id, body);
        return res.status(200).send(updatedNote);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
}



module.exports = {getAllNotes, createNote , deleteNote, updateNote};