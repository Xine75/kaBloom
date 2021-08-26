import React, { useState, useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import Button from "react-bootstrap/Button"
import "./Note.css"

//NoteForm defines a function called NoteForm that allows user to add new note
//or Delete a note

export const NoteForm = () => {
    const { addNote, getNoteById } = useContext(NoteContext)
    const history = useHistory()
    const { plantId } = useParams()
    const { noteId } = useParams()
    const timestamp = Date.now()
    const noteDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)

    //------------------SETTING STATE--------------------
    const [isLoading, setIsLoading] = useState(true);
    const [note, setNote] = useState({
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
    //---------------- SAVING NOTE UPON CLICK EVENT ----------------
    const handleClickSaveNote = (e) => {
        e.preventDefault()
        setIsLoading(true)

        addNote({
            plantId: parseInt(plantId),
            text: note.text,
            date: noteDate
        })
            .then(() => history.push(`/plants/detail/${plantId}`))

    }

    //------------------GET NOTE BY ID-------------------------
    useEffect(() => {
        if (noteId) {
            getNoteById(noteId)
                .then(note => {
                    setNote(note)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

    //--------------- JSX FOR ADD NOTE FORM --------------------
    return (
        <form className="noteForm">
            <h3 className="noteForm__title">Add a Note</h3>
            <fieldset className="noteForm__input">
                <div className="form-group">
                    <label htmlFor="text">What's going on?</label>
                    <textarea id="text" onChange={handleControlledInputChange} required autoFocus className="form-control__note" placeholder="Note details" value={note.text} />
                </div>
            </fieldset>
            <Button className="btn btn-info" disabled={isLoading} onClick={handleClickSaveNote}>Save Note</Button>
            <Button className="btn" variant="link" disabled={isLoading} onClick={() => {history.push(`/plants/detail/${plantId}`)}}>Cancel</Button>

        </form>
    )
}