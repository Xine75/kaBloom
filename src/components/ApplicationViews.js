import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { PlantProvider } from "./plant/PlantProvider"
import { PlantList } from "./plant/PlantList"
import { PlantDetail } from "./plant/PlantDetail"
import { PlantForm } from "./plant/PlantForm"

import { NoteProvider } from "./note/NoteProvider"
import { NoteList } from "./note/NoteList"
import { NoteForm } from "./note/NoteForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the Plant List list when http://localhost:3000/ */}
            <PlantProvider>
                <Route exact path="/">
                    <Home />
                </Route>
            </PlantProvider>

            <PlantProvider>
                <Route exact path="/plants">
                    <PlantList />
                </Route>
            </PlantProvider>

            <NoteProvider>
                <PlantProvider>

                    <Route exact path="/plants/detail/:plantId(\d+)">
                        <PlantDetail />
                    </Route>

                    <Route exact path="/plants/detail/:plantId(\d+)">
                        <NoteList />
                    </Route>

                    <Route exact path="/plant/create">
                        <PlantForm />
                    </Route>

                    <Route exact path="/note/create/:plantId(\d+)">
                        <NoteForm />
                    </Route>

                </PlantProvider>
            </NoteProvider>

        </>



    )
}