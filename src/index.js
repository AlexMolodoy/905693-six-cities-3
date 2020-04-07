import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {createAPI} from './api.js';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator as AppActionCreator} from './reducer/app/app.js';
import {Operation as UserOperation, ActionCreator as UserActionCreator} from './reducer/user/user.js';
import {AuthorizationStatus} from './const.js';


const onUnauthorized = () => {
  store.dispatch(UserActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const onServerError = () => {
  store.dispatch(AppActionCreator.showError());
};

const api = createAPI(onUnauthorized, onServerError);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
