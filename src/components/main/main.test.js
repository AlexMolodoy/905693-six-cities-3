import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {offers} from '../../mocks/tests.js';

it(`Should render Main correctly`, () => {
  const tree = renderer
    .create(<Main
      offers={offers}
      onNamePlaceClick={() => {}}
      quantPlaces={5}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
