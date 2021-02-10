import React, { useContext, useState, useEffect } from "react"
import { PlantContext } from "./PlantProvider"
import Button from "react-bootstrap/Button"
import Alert from "react-bootstrap/Alert"
import moment from 'moment';


export const WaterAlert = () => {

    const { getPlants } = useContext(PlantContext)
    const currentUser = parseInt(sessionStorage.getItem("kabloom_user"))
    const today = Date.now()
    

    //--------------REACH OUT AND GET THOSE PLANTS---------------------

    useEffect(() => {
        getPlants()
    }, [])

    //------------FILTER PLANTS FOR THOSE 10 DAYS PAST LAST WATER DATE------

    const userPlants = plants.filter(p => p.userId === currentUser);
    const needWater = userPlants.filter(userPlants => {
//today plant.lastWatered === today - 10

    }

    )
}