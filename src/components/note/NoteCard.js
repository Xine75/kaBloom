import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider"
import "./Note.css"

//NoteCard creates a function called NoteCard which:
//1. Structures the render of a user's selected plant's notes
//2. Renders the date and text of each note
//3. Allows the user to DELETE a note

export const NoteCard = ({note}) => {

    const { deleteNote, getNotes } = useContext(NoteContext)

//----------------- DELETE NOTE FUNCTION ------------------------

    const handleDelete = () => {
        deleteNote(note.id)
        .then(getNotes)
    }
//----------------JSX FOR NOTE CARD --------------------------
    return (
        <section className="note" id={note.id}>
            <div className="note__date">{note.date}</div>
            <div className="note__text">{note.text}</div>
            <button onClick={handleDelete}>Delete Note</button>
        </section>


    )

}