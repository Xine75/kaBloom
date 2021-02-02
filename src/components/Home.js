import React, { useState } from "react";
import { useHistory } from "react-router-dom"

export const Home = () => {
    const history = useHistory()
    return (
    <>
    <h2>Welcome to kaBloom!</h2>
    <div>Manage all your plant care needs</div>
    <button onClick={() => {history.push("/plant/create")}}>
          kaBloom! I got a new plant!
      </button> 
    </>
    )
}


