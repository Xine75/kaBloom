import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { NoteContext } from "../note/NoteProvider"
import "./Plant.css"

export const PlantDetail =()=> {
    const { getPlantById, deletePlant } = useContext(PlantContext)
    // const { getNotes, addNote, deleteNote } = useContext(NoteContext)

    const [plant, setPlant] = useState({})
    const {plantId} = useParams()
    const history = useHistory()

    const handleDelete = () => {
        deletePlant(plant.id)
        .then(() => {
            history.push("/")
        })
    }

    useEffect(() => {
        getPlantById(plantId)
        .then((response) => {
            setPlant(response)
        })
    }, [])

    return (
        <section className="plant">
          <h3 className="plant__name">{plant.name}</h3>
          <div className="plant__type">{plant.type}</div>
          {/* What's up with the question mark???? See below.*/}
          <div className="plant__dateAdopted">Date adopted: {plant.dateAdopted}</div>
          <div className="plant__water">Watering instructions: {plant.water}</div>
          <div className="plant__light">Light needs: {plant.light}</div>
          <div className="plant__water">Fertilize?: {plant.fertilize}</div>
          //add a map function to retrieve notes here
          <button onClick={handleDelete}>Delete</button>
        </section>
      )
}