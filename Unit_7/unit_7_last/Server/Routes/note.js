const express = require('express');
const { getAllNotes, createNote, deleteNote, updateNote } = require('../Handlers/note');

const noteRouter = express.Router();

noteRouter.get('/getAllNotes', getAllNotes);
noteRouter.post('/createNote', createNote);
noteRouter.delete('/deleteNote/:id', deleteNote);
noteRouter.patch('/updateNote/:id', updateNote);


module.exports = {noteRouter};