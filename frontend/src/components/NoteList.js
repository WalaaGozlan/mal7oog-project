import React, {useState} from 'react'
import NoteForm from './NoteForm'
import Note from './Note';
function NoteList(){
    const [notes, setNotes] = useState([])
    const addNote = note => {
        if(!note.text || /^\s*$/.test(note.text)){
            return ;
        }
        const newNotes =[note, ...notes]
        setNotes(newNotes);
    };
    const updateNote = (noteId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setNotes(prev => prev.map(item =>(item.id === noteId ? newValue :item ))
        );
    }
    const removeNote = id => {
        const removeArr =[...notes].filter(note => note.id !== id);
        setNotes(removeArr);
    }
    const completeNote = id =>{
        let updatedNotes = notes.map(note => {
            if(note.id === id){
               note.isComplete = !note.isComplete;
            }
            return note;
        });
        setNotes(updatedNotes);
    };
    return(
        <div>
             <h1 style={{fontFamily:"Fantasy"}} className="text-info"> Write Your Notes </h1>
           <NoteForm onSubmit ={addNote}  className="btn btn-outline-info" />
           <Note notes ={notes} completeNote={completeNote} removeNote ={removeNote} updateNote={updateNote}/>
        </div>
    )
}
export default NoteList;