import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { PlantProvider } from "./plant/PlantProvider"
import { PlantList } from "./plant/PlantList"
import { PlantDetail } from "./plant/PlantDetail"
// import { PlantForm } from "./plant/PlantForm"

import { NoteProvider } from "./note/NoteProvider"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the Plant List list when http://localhost:3000/ */}
            <PlantProvider>
                <Route exact path="/">
                    <PlantList />
                </Route>
            </PlantProvider>

            <NoteProvider>
                <PlantProvider>
                    <Route exact path="/plants/detail/:plantId(\d+)">
                        <PlantDetail />
                    </Route>
                </PlantProvider>
            </NoteProvider>




        </>



    )
}