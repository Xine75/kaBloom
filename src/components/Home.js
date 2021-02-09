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
   <body className="welcome__body">
      
    <div className="welcome__card">
    <h2>Welcome to kaBloom!</h2>
    <div>Add your first plant to see how kaBloom can help you manage all your plant care.  All in the palm of your frond, er --hand!</div>
    
    <Button className="welcome__plant__btn" variant="success" size="lg" style={{ width: '20rem'  }} onClick={() => {history.push("/plant/create")}}>
          kaBloom! I got a new plant!
      </Button> 
      </div>
      
      </body>
      </section>
    </>
    )
}


