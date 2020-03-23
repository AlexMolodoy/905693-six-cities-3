import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const Settings = {
  QUANTUM_PLACES: 5,
};

ReactDOM.render(
    <App
      quantPlaces = {Settings.QUANTUM_PLACES}
      offers={offers}/>,
    document.querySelector(`#root`)
);
