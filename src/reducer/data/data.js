import {extend, transformOfferShape, transformCommentShape} from '../../utils.js';
import {FavoriteRequiredAction, AppRoute, Error} from '../../const.js';
import history from '../../history.js';
import axios from 'axios';

const initialState = {
  allOffers: [],
  currentOffer: null,
  commentsList: [],
  offersNearby: [],
  isLoaded: false,
};

const ActionType = {
  GET_LOADED_STATE: `GET_LOADED_STATE`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_OFFERS_NEARBY: `GET_OFFERS_NEARBY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  OPEN_DETAILED_OFFER: `OPEN_DETAILED_OFFER`,
};

const ActionCreator = {
  getLoadedState: () => ({
    type: ActionType.GET_LOADED_STATE,
  }),
  getComments: (comments) => ({
    type: ActionType.GET_COMMENTS,
    payload: comments
  }),
  getOffersNearby: (offers) => ({
    type: ActionType.GET_OFFERS_NEARBY,
    payload: offers
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  openDetailedOffer: (offer) => ({
    type: ActionType.OPEN_DETAILED_OFFER,
    payload: offer
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`hotels`)
    .then((response) => {
      dispatch(ActionCreator.loadOffers(response.data));
      dispatch(ActionCreator.getLoadedState());
    });
  },

  openDetailedOffer: (offer) => (dispatch, getState, api) => {
    return axios.all([api.get(`comments/${offer.id}`),
      api.get(`hotels/${offer.id}/nearby`)])
    .then(axios.spread((firstResponse, secondResponse) => {
      const transformedComments = firstResponse.data.map((it) => transformCommentShape(it));
      dispatch(ActionCreator.getComments(transformedComments));
      const transformedOffers = secondResponse.data.map((it) => transformOfferShape(it));
      dispatch(ActionCreator.getOffersNearby(transformedOffers));
      dispatch(ActionCreator.openDetailedOffer(offer));
    }));
  },

  toggleIsFavorite: (offer) => (dispatch, getState, api) => {
    const status = offer.isFavorite ? FavoriteRequiredAction.DELETE : FavoriteRequiredAction.ADD;
    return api.post(`/favorite/${offer.id}/${status}`)
    .catch((err) => {
      if (err.response.status === Error.UNAUTHORIZED) {
        history.push(AppRoute.LOGIN);
      }
    });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMMENTS:
      return extend(state, {
        commentsList: action.payload,
      });

    case ActionType.GET_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload,
      });

    case ActionType.LOAD_OFFERS:
      return extend(state, {
        allOffers: action.payload,
      });

    case ActionType.OPEN_DETAILED_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });

    case ActionType.GET_LOADED_STATE:
      return extend(state, {
        isLoaded: true,
      });

  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
