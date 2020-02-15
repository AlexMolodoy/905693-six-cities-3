import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';

const Settings = {
  QUANTUM_PLACES: 5
};

ReactDOM.render(
    <App quantPlaces = {Settings.QUANTUM_PLACES}/>,
    document.querySelector(`#root`)
);
