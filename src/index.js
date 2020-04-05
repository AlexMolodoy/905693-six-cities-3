import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/app/app.js';
import {Operation as DataOperation} from './reducer/data/data.js';
import {createAPI} from './api.js';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

const api = createAPI(() => {});


const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    ));

store.dispatch(DataOperation.loadOffers());


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
