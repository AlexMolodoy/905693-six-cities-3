import React from "react";
import MainPage from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = ({quantPlaces, offers}) => {

  const onNamePlaceClick = () => {};

  return (
    <MainPage
      quantPlaces={quantPlaces}
      offers={offers}
      onNamePlaceClick={onNamePlaceClick}/>
  );
};

App.propTypes = {
  quantPlaces: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Bungalow`, `House`, `Room`, `Studio`, `Villa`]).isRequired,
  })).isRequired,
  onNamePlaceClick: PropTypes.func,
};

export default App;
