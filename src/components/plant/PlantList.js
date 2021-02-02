import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { PlantCard } from "./PlantCard"
import "./Plant.css"

//Create and export PlantList, which will be responsible for:
//1. Rendering current user's plant to the DOM
//2. Rendering an "I got a new plant" button that will take user to PlantForm
//3. This will act as user's home page and will need a scroll bar in CSS

export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const currentUser = parseInt(sessionStorage.getItem("kabloom_user"))
    const history = useHistory()

    useEffect(() => {
        getPlants()
    }, [])

    return (
        <>
            <div className="plants">
                {/*map over plants and grab only those belonging to current user, then feed each object in the array into PlantCard*/}
                {
                    plants.filter(p => p.userId === currentUser).map(plant => {
                        
                        return <PlantCard key={plant.id} plant={plant}/>
                    })
                }
       <button onClick={() => {history.push("/plant/create")}}>
          kaBloom! I got a new plant!
      </button>           
            </div>
        </>
    )
}