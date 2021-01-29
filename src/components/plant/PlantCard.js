import React from "react"
import { useHistory } from "react-router-dom"
import "./Plant.css"

//1. Rendering name, type, image and last-watered date of users's plants to the DOM
//2. Rendering a "Watered Today" button that will update "lastWatered" prop on plant
//3. "Last Watered" text field will update to DOM
//4. Rendering a "More" button that will take user to notes for a specific plant

const history = useHistory()

export const PlantCard = ({plant}) => {

    <section className="plant">
        <img className="plant__image">{plant.imageURL}</img>
        <h3 className="plant__name">{plant.name}</h3>
        <div className="plant_type">{plant.type}</div>
        <div className="plant_lastWatered">{plant.lastWatered}</div>
        <button className = "toNoteListBtn" onClick={() => history.push("/note/NoteList")}>
          More
      </button>
        <button className = "toNoteListBtn" onClick={() => plant.lastWatered = new Date(noteObject.timestamp).toLocaleDateString('en-US')}>
          Watered Today!
      </button>

    </section>  
}
