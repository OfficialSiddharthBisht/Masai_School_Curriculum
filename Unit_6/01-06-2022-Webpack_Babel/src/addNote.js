let allNotes = [];
let allNotesDiv =  document.createElement('div');
allNotesDiv.setAttribute('id','allNotesDiv');

function add(){

        let enteredNote = document.getElementById('inputBar').value;
        allNotes.push(enteredNote);
        
        allNotesDiv.innerHTML = '';

        allNotes.forEach(element => {
            let note = document.createElement('p');
            note.setAttribute('class','notes');
            note.innerText = element;

            allNotesDiv.append(note);
        });
        document.getElementById('root').append(allNotesDiv);
    
}

export default add;