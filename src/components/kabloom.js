import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kabloom.css";

export const Kabloom = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("kabloom_user")) {
          return (
            <>
              <div className="heading">kaBloom</div>
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);