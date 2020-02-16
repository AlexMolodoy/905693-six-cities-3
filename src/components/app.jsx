import React from "react";
import MainPage from './main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {quantPlaces} = props;

  return (
    <MainPage quantPlaces={quantPlaces} />
  );
};

export default App;
