import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from "react-router-dom"
import { Kabloom } from "./components/Kabloom"
import './index.css';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Kabloom />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);


