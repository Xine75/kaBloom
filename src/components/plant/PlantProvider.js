import React, { useState, createContext } from "react"

//Create PlantContext to be used by components that need the data
export const PlantContext = createContext()

//name and create all the functions within PlantProvider
export const PlantProvider = (props) => {

//Set a value that will mutate (plants) and the function that will update it (setPlants())
    const [plants, setPlants] = useState([])

//-------------------GET THOSE PLANTS BABY---------------------
    const getPlants = () => {
        return fetch("http://localhost:8080/plants?_embed=notes")
        .then(res => res.json())
        .then(setPlants)
    }

//--------------KABLOOM GOT A NEW PLANT BABY------------------------
    const addPlant = plantObj => {
        return fetch("http://localhost:8080/plants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plantObj)
        })
        .then(getPlants)
    }
//-------------WHICH PLANT?? DON'T SAY "THE ONE WITH LEAVES"------------------

const getPlantById = (id) => {
    return fetch(`http://localhost:8080/plants/${id}?_embed=notes`)
    .then(res => res.json())
}
//-----------------------Uh oh! Delete a plant------------------------------

const deletePlant = plantId => {
    return fetch(`http://localhost:8080/plants/${plantId}`, {
        method: "DELETE"
    })
    .then(getPlants)
}
//----------------Let's water today or make another change!-----------------------------
const updatePlant = plant => {
    return fetch(`http://localhost:8080/plants/${plant.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(plant)
    })
    .then(getPlants)
}
//--------------LET'S GOOOOOOOOOO BABY!------Allow exposure to data via Context.Provider-------------
return (
    <PlantContext.Provider value={{
        plants, getPlants, addPlant, getPlantById, deletePlant, updatePlant
    }}>
        {props.children}
    </PlantContext.Provider>
    )
}