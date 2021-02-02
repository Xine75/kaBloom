import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { PlantContext } from "./PlantProvider"
import "./Plant.css"

//PlantForm defines a function called PlantForm that:
//1. Allows user to create and save a new plant
//2. Utilizes Cloudinary to upload and save image of plant

//------------------ SETTING STATE --------------------------
export const PlantForm = () => {
    const { addPlant } = useContext(PlantContext)
    const history = useHistory()
    const currentUser = parseInt(sessionStorage.getItem("kabloom_user"))
    const [imageURL, setImageURL ] = useState("")

    const [plant, setPlant] = useState({
        userId: currentUser,
        type: "",
        name: "",
        dateAdopted: "",
        water: "",
        light: "",
        fertilize: "",
        lastWatered: "",
        imageURL: ""
    })

    //--------------IMAGE UPLOAD HANDLING --------------------
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

        setImageURL(file.secure_url)
        setLoading(false)
    }
        //---------------- SAVING USER INPUT-----------------

    const handleControlledInputChange = (e) => {
        const newPlant = { ...plant }
        newPlant[e.target.id] = e.target.value
        setPlant(newPlant)
    }
        //---------------- SAVING NEW PLANT UPON CLICK EVENT ----------------
    const handleClickSavePlant = (e) => {
        e.preventDefault()
        const newPlant = { ...plant, imageURL }
        addPlant(newPlant)
            .then(() => history.push("/plants"))
    }

        //---------------- THE ADD NEW PLANT FORM --------------------------
    return (
        <form className="plantForm">
            <h2>Newly Adopted Plant</h2>

            <div className="image">
                <div>Upload Image</div>
                <input type="file" name="file" placeholder="Upload an image" onChange={uploadImage}/>
                {loading ? (
                    <h3>Loading...</h3>
                ) : (
                        <img src={imageURL} style={{ width: "100px" }} />
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
                    <select value={plant.water} name="water" id="water" className="form-control" onChange={handleControlledInputChange}>
                    <option value="0">How thirsty am I?</option>
                    <option value="Keep soil moist">Keep soil moist</option>
                    <option value="Let top of soil dry before watering">Let top of soil dry before watering</option>
                    <option value="Let soil dry between waterings">Let soil dry completely between waterings</option>
                    <option value="Water infrequently (succulents and cacti)">Water infrequently (succulents and cacti)</option>
                    <option value="Plant is dormant, water with caution (succulents and cacti)">Plant is dormant, water with caution (succulents and cacti)</option>
                </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Light needs:</label>
                    <select value={plant.light} name="light" id="light" className="form-control" onChange={handleControlledInputChange}>
                    <option value="0">How much sun do I like?</option>
                    <option value="Low">Low</option>
                    <option value="Bright indirect">Bright indirect</option>
                    <option value="Medium">Medium</option>
                    <option value="Direct">Direct</option>
                    <option value="s much direct sun as possible (succulents and cacti)">As much direct sun as possible (succulents and cacti)</option>
                </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Fertilize?</label>
                    <select value={plant.fertilize} name="fertilize" id="fertilize" className="form-control" onChange={handleControlledInputChange}>
                    <option value="0">Even plants gotta eat</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Every other month">Every other month</option>
                    <option value="Every 6 months">Every 6 months</option>
                    <option value="Yearly">Yearly</option>
                </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Last watered:</label>
                    <input type="date" id="lastWatered" onChange={handleControlledInputChange} required className="form-control"  value={plant.lastWatered} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSavePlant}>Save</button>
        </form>
    )
}
//<input type="text" id="fertilize" onChange={handleControlledInputChange} required className="form-control" placeholder="Feed me" value={plant.fertilize} />

