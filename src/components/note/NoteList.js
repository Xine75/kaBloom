import React, { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import Button from "react-bootstrap/Button"
import "./Note.css"

//Create and export NoteList, which will be responsible for:
//1. Rendering notes for user's selected plant 
//2. Allow user to add a note

export const NoteList = () => {
    const { notes, getNotes } = useContext(NoteContext)
    const history = useHistory()
    const { plantId } = useParams()

//--------------Reach out and get those Notes--------------------------
   
     useEffect(() => {
        getNotes()
    }, [])

//---------------Filter notes for those whose note.plantId matches the current detail/plantId, then feed each object in the array into NoteCard*/}

    return (
        <>
         <h4 className="notes__header">Notes</h4>
            <div className="notes">
                {
                    notes.filter(note => note.plantId === parseInt(plantId)).map(note => {

                        return <NoteCard key={note.id} note={note} />
                    })
                }
                </div>
                <div>
                <Button className="notes__btn" size="sm" variant="info" onClick={() => { history.push(`/note/create/${plantId}`) }}>
                    Add a Note
                </Button>
            </div>
        </>
    )
}


