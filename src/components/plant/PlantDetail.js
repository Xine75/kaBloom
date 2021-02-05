import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { NoteList } from "../note/NoteList"
import Button from "react-bootstrap/Button"
import "./Plant.css"

export const PlantDetail =()=> {
    const { getPlantById, deletePlant } = useContext(PlantContext)
    const [plant, setPlant] = useState({})
    const {plantId} = useParams()
    const history = useHistory()

    //-----------------HANDLE DELETE --------------------

    const handleDelete = () => {
        deletePlant(plant.id)
        .then(() => {
            history.push("/plants")
        })
    }

//-------------------- FIND THE CORRECT PLANT USING PLANT ID IN PARAMS ------------

    useEffect(() => {
        getPlantById(plantId)
        .then((response) => {
            setPlant(response)
        })
    }, [])

//---------------------- JSX FOR PLANT DETAILS -----------------------------

    return (
        <>
        <section className="plant">
            <img src={plant.imageURL} className="plant__image"/>
          <h3 className="plant__name">{plant.name}</h3>
          <div className="plant__type">{plant.type}</div>
          <div className="plant__dateAdopted">Date adopted: {new Date(plant.dateAdopted).toLocaleDateString()}</div>
          <div className="plant__water">Watering instructions: {plant.water}</div>
          <div className="plant__light">Light needs: {plant.light}</div>
          <div className="plant__water">Fertilize? {plant.fertilize}</div>

          <Button variant="outline-success" size="sm" onClick={() => {history.push(`/plants/edit/${plantId}`)}}>Edit</Button>
          <Button variant="outline-danger" size="sm" onClick={handleDelete}>Delete Plant</Button>
          <Button variant="outline-secondary" size="sm" onClick={() => { history.push("/plants") }}>Done</Button>
        </section>

        <NoteList />
        </>
      )
}

