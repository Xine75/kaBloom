import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./Kabloom.css";

export const Kabloom = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("kabloom_user")) {
          return (
            <>

            <Row></Row>
            <Row>
              <Col></Col>
              <Col><Link to={"/plants"} className="heading">kaBloom</Link></Col>
              <Col></Col>
              </Row>
              <Row></Row>
             
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

