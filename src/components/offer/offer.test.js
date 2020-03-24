import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';
import {offers} from '../../mocks/tests.js';

it(`Should render Offer correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={offers[0]}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onNamePlaceClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
