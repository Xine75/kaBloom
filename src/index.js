import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route } from "react-router-dom"
import { Kabloom } from "./components/Kabloom"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Route>
      <Kabloom />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);


