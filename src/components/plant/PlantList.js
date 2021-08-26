import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { PlantCard } from "./PlantCard"
import Button from "react-bootstrap/Button"
import "./Plant.css"

//Create and export PlantList, which will be responsible for:
//1. Rendering current user's plant to the DOM
//2. Rendering an "I got a new plant" button that will take user to PlantForm
//3. This will act as user's home page and will need a scroll bar in CSS

export const PlantList = () => {
    const { plants, getPlants } = useContext(PlantContext)
    const currentUser = parseInt(sessionStorage.getItem("kabloom_user"))
    const history = useHistory()

//--------------REACH OUT AND GET THOSE PLANTS---------------------

    useEffect(() => {
        getPlants()
    }, [])

//----------------FILTER plants FOR those belonging to current user, then feed each object in the array into PlantCard

    return (
        <>
            <div className="plants">
                {
                    plants.filter(p => p.userId === currentUser).map(plant => {
                        
                        return <PlantCard key={plant.id} plant={plant}/>
                    })
                }
                </div>
       <Button className="new__plant__btn" variant="info" size="lg" style={{ width: '20rem'  }} onClick={() => {history.push("/plant/create")}}>
          <b>kaBloom!</b> I got a new plant!
      </Button>           
        
        </>
    )
}