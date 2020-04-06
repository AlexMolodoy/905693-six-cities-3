import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';
import {testOffers} from '../../test-mocks.js';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

it(`Should render Offer correctly`, () => {
  const store = mockStore({});


  const tree = renderer
  .create(
      <Provider store={store}>
        <Offer
          offer={testOffers[0].offers[0]}
          handlePlaceCardHover={() => {}}
          handlePlaceCardNameClick={() => {}}
          isCitiesClass={true}
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
          handleBookmarkButtonClick={() => {}}
        />
      </Provider>
  )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
