import React, { useState, useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import "./Note.css"

//NoteForm defines a function called NoteForm that allows user to add new note
//or Delete a note

export const NoteForm = () => {
    const { addNote, updateNote, getNoteById } = useContext(NoteContext)
    const history = useHistory()
    const {plantId} = useParams()
    const {noteId} = useParams()
    const timestamp = Date.now()
    const noteDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp)

    //------------------SETTING STATE--------------------
    const [isLoading, setIsLoading] = useState(true);
    const [note, setNote ] = useState({
        plantId: 0,
        date: "",
        text: ""

    })
        //---------------- SAVING USER INPUT-----------------

     const handleControlledInputChange = (e) => {
        const newNote = { ...note }
        newNote[e.target.id] = e.target.value
        setNote(newNote)
        } 
       //---------------- SAVING NEW or EDITED NOTE UPON CLICK EVENT ----------------
       const handleClickSaveNote = (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (noteId){
            updateNote({
                id: note.id,
                plantId: parseInt(plantId),
                text: note.text,
                date: noteDate
            })
            .then(() => history.push(`/plants/detail/${noteId}`))        
        } else {
            addNote({
                plantId: parseInt(plantId),
                text: note.text,
                date: noteDate
            })
            .then(() => history.push(`/plants/detail/${plantId}`))
        }    
    }

    //------------------GET NOTE BY ID-------------------------
    useEffect(() => {
        if (noteId){
          getNoteById(noteId)
          .then(note => {
              setNote(note)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
    }, [])



    //--------------- THE ADD/EDIT NOTE FORM --------------------
return(
    <form className="noteForm">
        <h2 className="noteForm__title">{noteId ? "Edit Note" : "New Note"}</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="text">What's going on?</label>
                <input type="textarea" id="text" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Note details" value={note.text}/>
            </div>
        </fieldset>
        <button className="btn btn-primary" disabled={isLoading} onClick={handleClickSaveNote}>
        {noteId ? <>Save Changes</> : <>New Note</>}</button>
    </form>
)



}