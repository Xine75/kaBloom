import React from "react";
import { useHistory } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./Home.css"

export const Home = () => {
    const history = useHistory()
    return (
    <>
      <section className="welcome__page">
 
    <h2 className="welcome__text">Welcome to kaBloom!</h2>
    <Card className="welcome__text" border="success">Touch the button below to add your first plant. KaBloom will take it from there!  All your houseplant care in the palm of your frond, er --hand!</Card>
    
    <Button className="welcome__plant__btn" variant="info" size="lg" style={{ width: '20rem'  }} onClick={() => {history.push("/plant/create")}}>
          kaBloom! I got a new plant!
      </Button> 
    
      </section> 
    </>
    )
}


