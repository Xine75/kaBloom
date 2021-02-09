import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import { NoteList } from "../note/NoteList"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
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
        <>
        
        <section className="plant" style={{ width: '20rem' }}>
        <Row>
            <Col>
            <img src={plant.imageURL} className="plant__detail__image"/>
            </Col>

            <Col>
            <Button className="plant__done__btn" variant="link" size="sm" onClick={() => { history.push("/plants") }}>Done</Button>

            </Col>
   
            

        </Row>
        <br/>
       
          <h3 className="plant__detail__name">{plant.name}</h3>
          <div className="plant__detail__type">{plant.type}</div>
          <div className="plant__dateAdopted">Date adopted: <b>{new Date(plant.dateAdopted).toLocaleDateString()}</b></div>
          <div className="plant__water">Water: <b>{plant.water}</b></div>
          <div className="plant__light">Light: <b>{plant.light}</b></div>
          <div className="plant__water">Fertilize? <b>{plant.fertilize}</b></div>
       
        <br/>
        <section className="plant__btns">
          <Button className="plant__edit__btn" variant="link" onClick={() => {history.push(`/plants/edit/${plantId}`)}}><i class="far fa-edit"></i></Button>{' '}
          <Button className="plant__delete__btn" variant="link" onClick={handleDelete}><i class="fas fa-trash-alt"></i></Button>
          </section>
        </section>
        <br/>

        <NoteList />
        </>
      )
}

