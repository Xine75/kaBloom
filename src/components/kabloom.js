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
            <Row className="iconic__kabloom">
              <Col className="logo__left"></Col>
              <Col className="heading__center"><i className="leaf__left fab fa-pagelines"></i>  <Link to={"/plants"} className="heading">kaBloom</Link>  <i className="leaf__right fab fa-pagelines"></i></Col>
              <Col className="logo__right"></Col>
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

