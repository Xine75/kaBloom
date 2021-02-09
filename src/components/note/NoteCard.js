import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./Note.css"

//NoteCard creates a function called NoteCard which:
//1. Structures the render of a user's selected plant's notes
//2. Renders the date and text of each note
//3. Allows the user to DELETE a note

export const NoteCard = ({note}) => {

    const { deleteNote, getNotes } = useContext(NoteContext)
    const history = useHistory()

//----------------- DELETE NOTE FUNCTION ------------------------

    const handleDelete = () => {
        deleteNote(note.id)
        .then(getNotes)
    }
//----------------JSX FOR NOTE CARD --------------------------
    return (
        <>
        <Card className="note" border="secondary" style={{ width: '2 rem'}} id={note.id}>
        <Card.Header className="note__date">{note.date}</Card.Header>

            <Card.Body className="note__text">
            <div className="note__text">{note.text}</div>
            </Card.Body>
            <Button variant="link" size="sm" onClick={handleDelete}><i class="fas fa-trash-alt"></i></Button>
        </Card>
        </>
    )

}