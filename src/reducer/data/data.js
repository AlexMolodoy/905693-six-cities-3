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
  currentId: null,
};

const ActionType = {
  GET_LOADED_STATE: `GET_LOADED_STATE`,
  GET_COMMENTS: `GET_COMMENTS`,
  GET_OFFERS_NEARBY: `GET_OFFERS_NEARBY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  SAVE_ID: `SAVE_ID`,
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
  saveId: (id) => ({
    type: ActionType.SAVE_ID,
    payload: id
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

  getDetailedData: (id) => (dispatch, getState, api) => {
    return axios.all([api.get(`comments/${id}`),
      api.get(`hotels/${id}/nearby`)])
    .then(axios.spread((firstResponse, secondResponse) => {
      const transformedComments = firstResponse.data.map((it) => transformCommentShape(it));
      dispatch(ActionCreator.getComments(transformedComments));
      const transformedOffers = secondResponse.data.map((it) => transformOfferShape(it));
      dispatch(ActionCreator.getOffersNearby(transformedOffers));
      dispatch(ActionCreator.saveId(id));
    }));
  },

  toggleFavorite: (offer) => (dispatch, getState, api) => {
    const status = offer.isFavorite ? FavoriteRequiredAction.DELETE : FavoriteRequiredAction.ADD;
    return api.post(`/favorite/${offer.id}/${status}`)
    .then(dispatch(Operation.loadOffers()))
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

    case ActionType.SAVE_ID:
      return extend(state, {
        currentId: action.payload,
      });

    case ActionType.GET_LOADED_STATE:
      return extend(state, {
        isLoaded: true,
      });

  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
