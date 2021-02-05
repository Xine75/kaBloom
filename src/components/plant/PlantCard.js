import React, { useContext } from "react"
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

  ///------------ I WATERED TODAYY BABYY -----------------------

  const UpdateLastWatered = () => {
    const updatedPlant = { ...plant }
    updatedPlant.lastWatered = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(timestamp)
    updatePlant(updatedPlant)
      .then(getPlants)
  }

  //------------------JSX FOR PLANT CARD ----------------------------------
  return (
    <Card className="plant" style={{ width: '20rem'  }}>
      <Card.Body>

        <Row>
          <Col className="plant__left">
            <Card.Img src={plant.imageURL} className="plant__image" />
            <div className="plant_lastWatered">Last watered: {new Date(plant.lastWatered).toLocaleDateString()}</div>
          </Col>

          <Col className="plant__right">
            <Card.Title className="plant__name" >
              <Link to={`/plants/detail/${plant.id}`} style={{ color: "#028" }}>
                {plant.name}
              </Link>
            </Card.Title>
            <div className="plant_type">{plant.type}</div>

            <button className="plant__wateredToday" variant="primary" size="sm" id={plant.id} onClick={UpdateLastWatered}>
              Watered Today!
      </button>

          </Col>
          </Row>
      </Card.Body>
 
    </Card>
  )
}

