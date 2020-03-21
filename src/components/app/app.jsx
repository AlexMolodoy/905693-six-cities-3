import React from "react";
import MainPage from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (quantPlaces, namesPlaces) => {

  return (
    <MainPage
      quantPlaces={quantPlaces}
      namesPlaces={namesPlaces}/>
  );
};

App.propTypes = {
  quantPlaces: PropTypes.number.isRequired,
  namesPlaces: PropTypes.array.isRequired
};

export default App;
