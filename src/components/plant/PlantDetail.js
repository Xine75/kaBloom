import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
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
        <section className="plant">
            <img src={plant.imageURL} className="plant__image"/>
          <h3 className="plant__name">{plant.name}</h3>
          <div className="plant__type">{plant.type}</div>
          <div className="plant__dateAdopted">Date adopted: {plant.dateAdopted}</div>
          <div className="plant__water">Watering instructions: {plant.water}</div>
          <div className="plant__light">Light needs: {plant.light}</div>
          <div className="plant__water">Fertilize? {plant.fertilize}</div>

          <button onClick={() => {history.push(`/plants/edit/${plant.id}`)}}>Edit</button>
          <button onClick={handleDelete}>Delete Plant</button>
          <button onClick={() => { history.push("/plants") }}>Done</button>

        </section>
      )
}

// plant.lastWatered = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp)
// plant.dateAdopted = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp)
