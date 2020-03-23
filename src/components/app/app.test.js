import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {offers} from '../../mocks/tests.js';

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      quantPlaces={5}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
