import React from "react";
import { useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button"

export const Home = () => {
    const history = useHistory()
    return (
    <>
    <h2>Welcome to kaBloom!</h2>
    <div>Manage all your plant care needs</div>
    <Button className="newPlant" variant="success" size="lg" style={{ width: '20rem'  }} onClick={() => {history.push("/plant/create")}}>
          kaBloom! I got a new plant!
      </Button> 
    </>
    )
}


