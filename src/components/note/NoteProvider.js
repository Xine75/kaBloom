import React, { useState, createContext } from "react"

export const NoteContext = createContext()

export const NoteProvider = (props) => {

    //Set a value that will mutate (notes) and the function that will update it (setPlants())
        const [notes, setNotes] = useState([])
    
    //Get notes from the API
        const getNotes = () => {
            return fetch("http://localhost:8080/notes")
            .then(res => res.json())
            .then(setNotes)
        }
    
    //Add new Note to the API
        const addNote = noteObj => {
            return fetch("http://localhost:8080/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(noteObj)
            })
            .then(getNotes)
        }
   
    //Alright, good job! Delete a note
    const deleteNote = noteId => {
        return fetch(`http://localhost:8080/notes/${noteId}`, {
            method: "DELETE"
        })
        .then(getNotes)
    }
//Get details of a particular note
const getNoteById = (id) => {
    return fetch(`http://localhost:8080/notes/${id}?`)
    .then(res => res.json())
}
    //Oops I spelled that wrong - edit note!
    const updateNote = note => {
        return fetch(`http://localhost:8080/notes/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
        .then(getNotes)
    }


    //Allow exposure to data via Context.Provider
    return (
        <NoteContext.Provider value={{
            notes, getNotes, addNote, deleteNote, updateNote, getNoteById
        }}>
            {props.children}
        </NoteContext.Provider>
        )
    }