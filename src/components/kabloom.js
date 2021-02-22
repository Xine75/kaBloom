import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import "./Kabloom.css";

export const Kabloom = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("kabloom_user")) {
          return (
            <>
              <Col className="heading__center"><Link to={"/plants"}><Image className="logo" src="https://res.cloudinary.com/kabloom/image/upload/c_scale,w_101/v1612993232/kabloom/kaBloomLogo2_pismua.png"/></Link></Col>
             
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


