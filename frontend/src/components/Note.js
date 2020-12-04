import React ,{useState} from 'react'
import NoteForm from './NoteForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
function Note ({notes, completeNote , removeNote, updateNote}){
    const[edit, setEdit] = useState({
        id:null,
        value :''
    });
    const submitUpdate =value => {
        updateNote(edit.id, value)
        setEdit({
            id:null,
            value: ''
        })
    }
    if(edit.id){
        return <NoteForm edit ={edit} onSubmit={submitUpdate}/>
    }
    return notes.map((note, index) => (
        <div
        className ={note.isComplete ? 'note-row complete':'note-row'}
         key ={index}>
               <div key ={Note.id} onClick={() => completeNote(note.id)}>
                   {note.text}
               </div>
                    <div className="icons">
                     <RiCloseCircleLine
                     onClick ={() => removeNote(note.id)}
                     className ='delete-icon'
                     />
                     <TiEdit onClick={() => setEdit({id: note.id ,value:note.text})}
                     className='edit-icon'
                     />
                    </div>
               </div>
    ))
}
export default Note