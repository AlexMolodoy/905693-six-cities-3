import NameSpace from '../name-space.js';

const getCity = (state) => {
  return state[NameSpace.APP].city;
};

const getOfferOnHover = (state) => {
  return state[NameSpace.APP].offerOnHover;
};

const getSortType = (state) => {
  return state[NameSpace.APP].sortType;
};

const getServerError = (state) => {
  return state[NameSpace.APP].serverError;
};


export {getCity, getOfferOnHover, getSortType, getServerError};
