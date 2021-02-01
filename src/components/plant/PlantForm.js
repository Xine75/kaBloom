import React, { useState, useContext } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { PlantContext } from "./PlantProvider"
import { NoteContext } from "../note/NoteProvider"
import "./Plant.css"

//PlantForm defines a function called PlantForm that:
//1. Allows user to create and save a new plant
//2. Utilizes Cloudinary to upload and save image of plant

export const PlantForm = () => {
    ////--------------IMAGE UPLOAD HANDLING --------------------

    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "kabloom")
        setLoading(true)
        const response = await fetch(
            "https://api.cloudinary.com/v1_1/kabloom/image/upload",
            {
                method: "POST",
                body: data
            }
        )
        const file = await response.json()

        setImage(file.secure_url)
        setLoading(false)
    }
    ///-----------Rest of plant details handling----------------
    const { addPlant } = useContext(PlantContext)
    const { addNote } = useContext(NoteContext)
    const history = useHistory()

    const [plant, setPlant] = useState({
        id: 0,
        userId: 0,
        type: "",
        name: "",
        dateAdopted: "",
        water: "",
        light: "",
        fertilize: "",
        lastWatered: "",
        imageURL: ""
    })

    const handleControlledInputChange = (e) => {
        const newPlant = { ...plant }
        newPlant[e.target.id] = e.target.value
        setPlant(newPlant)
    }

    const handleClickSavePlant = () => {
        addPlant({
            id: plant.id,
            userId: parseInt(plant.userId),
            type: plant.type,
            name: plant.name,
            dateAdopted: plant.dateAdopted,
            water: plant.water,
            light: plant.light,
            fertilize: plant.fertilize,
            lastWatered: plant.lastWatered,
            imageURL: plant.imageURL
        })
            .then(() => history.push(`/plants/detail/${plant.id}`))
    }


    return (
        <form className="plantForm">
            <h2>Newly Adopted Plant</h2>

            <div className="image">
                <div>Upload Image</div>
                <input
                    type="file"
                    name="file"
                    placeholder="Upload an image"
                    onChange={uploadImage}
                />
                {loading ? (
                    <h3>Loading...</h3>
                ) : (
                        <img src={image} style={{ width: "100px" }} />
                    )}
            </div>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Plant name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Plant name" value={plant.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Plant type:</label>
                    <input type="text" id="type" onChange={handleControlledInputChange} required className="form-control" placeholder="Scientific or common" value={plant.type} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Date adopted:</label>
                    <input type="date" id="dateAdopted" onChange={handleControlledInputChange} required className="form-control"  value={plant.dateAdopted} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Watering instructions:</label>
                    <input type="text" id="water" onChange={handleControlledInputChange} required className="form-control" placeholder="How thirsty am I?" value={plant.water} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Light needs:</label>
                    <input type="text" id="light" onChange={handleControlledInputChange} required className="form-control" placeholder="How much sun do I like?" value={plant.light} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Fertilize?:</label>
                    <input type="text" id="fertilize" onChange={handleControlledInputChange} required className="form-control" placeholder="Feed me" value={plant.fertilize} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Last watered:</label>
                    <input type="date" id="lastWatered" onChange={handleControlledInputChange} required className="form-control"  value={plant.lastWatered} />
                </div>
            </fieldset>


        </form>
    )
}