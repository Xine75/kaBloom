import React, { useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { NoteContext } from "./NoteProvider"
import { NoteCard } from "./NoteCard"
import "./Note.css"

//Create and export NoteList, which will be responsible for:
//1. Rendering notes for user's selected plant to Plant Detail view

export const NoteList = () => {
    const { notes, getNotes } = useContext(NoteContext)
    const history = useHistory()
    const { plantId } = useParams()
    console.log("plantId", plantId)

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <>
            <div className="notes">
                <h3 className="notes__header">Notes:</h3>
                {/*map over notes and grab only those whose note.plantId matches the current detail/plantId, then feed each object in the array into NoteCard*/}
                {
                    notes.map(note => {
                        { console.log("notes", notes) }

                        return <NoteCard key={note.id} note={note} />
                    })

                }
                <button onClick={() => { history.push("/note/create") }}>
                    Add a Note
                </button>
            </div>
        </>
    )
}


//.filter(note => note.plantId === plantId)

