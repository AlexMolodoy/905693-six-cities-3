import React from "react";
import MainPage from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {quantPlaces} = props;
  // eslint-disable-next-line react/prop-types
  const {namesPlaces} = props;

  return (
    <MainPage quantPlaces={quantPlaces} namesPlaces={namesPlaces}/>
  );
};

export default App;
