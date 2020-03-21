import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  QUANTUM_PLACES: 5,
  NAMES_PLACES: `Beautiful & luxurious apartment at great location`,
};

ReactDOM.render(
    <App quantPlaces = {Settings.QUANTUM_PLACES} namesPlaces = {Settings.NAMES_PLACES}/>,
    document.querySelector(`#root`)
);
