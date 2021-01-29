import React from "react"
import { useHistory } from "react-router-dom"
import "./Plant.css"

//1. Rendering name, type, image and last-watered date of users's plants to the DOM
//2. Rendering a "Watered Today" button that will update "lastWatered" prop on plant
//3. "Last Watered" text field will update to DOM
//4. Rendering a "More" button that will take user to notes for a specific plant

export const PlantCard = ({ plant }) => {
    {console.log("plant", plant)}
    const history = useHistory()
    const timestamp = Date.now()
    
    return (

    <section className="plant">
        <img src={plant.imageURL} className="plant__image"/>
        <h3 className="plant__name">{plant.name}</h3>
        <div className="plant_type">{plant.type}</div>
        <div className="plant_lastWatered">Last watered: {plant.lastWatered}</div>
        <button className = "toNoteListBtn" onClick={() => history.push("/note/NoteList")}>
          More
      </button>
        <button className = "plant__wateredToday" onClick={() => plant.lastWatered = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit'}).format(timestamp)}>
          Watered Today!
      </button>

      {console.log("plant.lastWatered", plant.lastWatered)}
      
    </section> 
  

    )}

