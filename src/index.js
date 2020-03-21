import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';

const Settings = {
  QUANTUM_PLACES: 5,
  TITLES: [
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ],
};

ReactDOM.render(
    <App
      quantPlaces = {Settings.QUANTUM_PLACES}
      namesPlaces = {Settings.TITLES}/>,
    document.querySelector(`#root`)
);
