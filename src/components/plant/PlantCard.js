import React, { useContext } from "react"
import { useHistory, Link } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import "./Plant.css"

//1. Rendering name, type, image and last-watered date of users's plants to the DOM
//2. Rendering a "Watered Today" button that will update "lastWatered" prop on plant
//3. "Last Watered" text field will update to DOM
//4. Rendering a link on plant's name that will take user to details and notes for a specific plant

export const PlantCard = ({ plant }) => {

    const { updatePlant, getPlants } = useContext(PlantContext)
    const history = useHistory()
    const timestamp = Date.now()

    ///------------ I WATERED TODAYY BABYY -----------------------

    const UpdateLastWatered = () => {
        const updatedPlant = { ...plant }
        updatedPlant.lastWatered= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp)
        updatePlant(updatedPlant)
        .then(getPlants)
    }

  //------------------JSX FOR PLANT CARD ----------------------------------
    return (
    <section className="plant">
        <img src={plant.imageURL} className="plant__image"/>
        <h3 className="plant__name">
          <Link to={`/plants/detail/${plant.id}`}>
            { plant.name }
          </Link>
        </h3>
        <div className="plant_type">{plant.type}</div>
        <div className="plant_lastWatered">Last watered: {new Date(plant.lastWatered).toLocaleDateString()}</div>
        <button className="plant__wateredToday" id={plant.id} onClick={UpdateLastWatered}>
          Watered Today!
      </button>
      
    </section> 
    )}

