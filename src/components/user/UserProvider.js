import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {

    const [users, setUsers ] = useState([])

    const addUser = userObj => {
        return fetch ("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })
        .then(getUsers)
 }}