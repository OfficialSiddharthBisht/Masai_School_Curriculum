import React from 'react'
import './Notes.css'
// import { useNavigate } from 'react-router-dom';

function Notes() {
    const [notes, setNotes] = React.useState([]);
    const [note, setNote] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [label, setLabel] = React.useState('');
    const [editedNote, setEditedNote] = React.useState('');
    const [editedTitle, setEditedTitle] = React.useState('');
    const [editedLabel, setEditedLabel] = React.useState('');
   
    const handleAddNote = async(e) => {
        e.preventDefault();
        const newNote = {
            title: title,
            note: note,
            label: label
        }
        let token = localStorage.getItem('token');
        try {
            await fetch(`http://localhost:8080/createNote`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(newNote)
            });
            setNotes([...notes, newNote]);
            setNote('');
            setTitle('');
            setLabel('');
        } catch (error) {
            console.log(error);
        }
    }

    const getAllNotes = async() => {
        let token = localStorage.getItem('token');
        try {
            const response = await fetch(`http://localhost:8080/getAllNotes`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                }
            });
            const data = await response.json();
            // console.log(data);
            setNotes(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteNote = async(id) => {
        try {
            await fetch(`http://localhost:8080/deleteNote/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            getAllNotes();
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdateNote = async(id) => {
        const updatedNote = {
            note: editedNote,
            title: editedTitle,
            label: editedLabel
        }
        try {
            await fetch(`http://localhost:8080/updateNote/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedNote)
            });
            getAllNotes();
            setEditedNote('');
            setEditedTitle('');
            setEditedLabel('');
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(()=>{
        getAllNotes();
    },[]);

  return (
    <div className='note-box'>
        <div className='note-form-box'>
            <form onSubmit={handleAddNote}>
                <h3>Add Note</h3>
                <input type="text" placeholder='Add a Title' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                <input type="text" placeholder="Add a Note" value={note} onChange={(e)=>{setNote(e.target.value)}}/>
                <input type="text" placeholder="Add a Label" value={label} onChange={(e)=>{setLabel(e.target.value)}}/>
                <input type="submit" value='Add'/>
            </form>
        </div>
        <div>
            {
                notes?.map((note,index) =>{
                    return <div key={index} className='single-note-box'>
                        <h3>Title: {note.title}</h3>
                        <p>Note: {note.note}</p>
                        <p>Label: {note.label}</p>
                        <div>
                        <input type="text" placeholder='Updated Note' value={editedNote} onChange={(e)=>{setEditedNote(e.target.value)}}/>
                        <input type="text" placeholder='Updated Title' value={editedTitle} onChange={(e)=>{setEditedTitle(e.target.value)}}/>
                        <input type="text" placeholder='Updated Label' value={editedLabel} onChange={(e)=>{setEditedLabel(e.target.value)}}/>
                        <button onClick={()=>{handleUpdateNote(note._id)}}>Update</button>
                        <button onClick={()=>{handleDeleteNote(note._id)}}>Delete</button>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Notes