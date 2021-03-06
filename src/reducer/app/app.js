import {extend} from '../../utils.js';
import {SortingType, cities} from '../../const.js';

const initialState = {
  serverError: false,
  city: cities[0],
  offerOnHover: null,
  sortType: SortingType.DEFAULT,
};

const ActionType = {
  CHANGE_CARD_ON_HOVER: `CHANGE_CARD_ON_HOVER`,
  CHANGE_CITY: `CHANGE_CITY`,
  SORT_OFFERS: `SORT_OFFERS`,
  SHOW_ERROR: `SHOW_ERROR`,
};

const ActionCreator = {
  changeCardOnHover: (offerOnHover) => ({
    type: ActionType.CHANGE_CARD_ON_HOVER,
    payload: offerOnHover
  }),
  changeCity: (newCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: newCity
  }),

  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType
  }),
  showError: () => ({
    type: ActionType.SHOW_ERROR
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CARD_ON_HOVER:
      return extend(state, {
        offerOnHover: action.payload,
      });

    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.SORT_OFFERS:
      return extend(state, {
        sortType: action.payload
      });

    case ActionType.SHOW_ERROR:
      return extend(state, {
        serverError: true,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
