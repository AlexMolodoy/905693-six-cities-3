import React from "react";
import MainPage from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({quantPlaces, namesPlaces}) => {

  const onNamePlaceClick = () => {};

  return (
    <MainPage
      quantPlaces={quantPlaces}
      namesPlaces={namesPlaces}
      onNamePlaceClick={onNamePlaceClick}/>
  );
};

App.propTypes = {
  quantPlaces: PropTypes.number.isRequired,
  namesPlaces: PropTypes.array.isRequired,
  onNamePlaceClick: PropTypes.func.isRequired,
};

export default App;
