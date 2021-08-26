import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { PlantContext } from "./PlantProvider"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import "./Plant.css"

//1. Rendering name, type, image and last-watered date of users's plants to the DOM
//2. Rendering a "Watered Today" button that will update "lastWatered" prop on plant
//3. "Last Watered" text field will update to DOM
//4. Rendering a link on plant's name that will take user to details and notes for a specific plant

export const PlantCard = ({ plant }) => {

  const { updatePlant, getPlants } = useContext(PlantContext)
  const timestamp = Date.now()

  ///------------ UPADATE LAST WATERED DATE -----------------------
  
  const [isWatered, setIsWatered] = useState();

  const UpdateLastWatered = (e) => {
    e.preventDefault()
    if (plant.lastWatered === new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)) {
      setIsWatered(true)
    } else {
    const updatedPlant = { ...plant }
    updatedPlant.lastWatered = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
    setIsWatered(true)
    updatePlant(updatedPlant)
      .then(getPlants)
    }
  }
//-----------------CHECK STATE TO SEE IF PLANT WAS WATERED TODAY-----------------
  useEffect(() => {
    if (plant.lastWatered === new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)) {
      setIsWatered(true)
    } else {
    setIsWatered(false)
    }
  }, [])

  //------------------JSX FOR PLANT CARD ----------------------------------
  return (
    <>
    <Card className="plant__card" border="success">
      <Card.Body>

        <Row className="row__top">

          <Col className="plant__left">
            <Card.Img className="plant__card__image" src={plant.imageURL} />
          </Col>

          <Col className="plant__right">
            <Card.Title className="plant__name" >
              <Link to={`/plants/detail/${plant.id}`} style={{ color: "#028a0f" }}>
                {plant.name}
              </Link>
            </Card.Title>
            <div className="plant__type">{plant.type}</div>
          </Col>

        </Row>


        <Row className="row__bottom">
          <Col><div className="plant_lastWatered">Last watered: <b>{new Date(plant.lastWatered).toLocaleDateString()}</b></div></Col>
          <Col><Button className="plant__wateredToday__btn" variant="info" size="sm" id={plant.id} onClick={UpdateLastWatered}>
            {isWatered ? <i className="fas fa-check"></i> : "I Watered Today!"  }
      </Button>
          </Col>
        </Row>

      </Card.Body>
    </Card>
    <br/>
     </>
  )
}



