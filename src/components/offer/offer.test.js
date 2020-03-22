import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

it(`Should render Offer correctly`, () => {
  const tree = renderer
    .create(<Offer
      onNamePlaceClick={() => {}}
      title={`Beautiful & luxurious apartment at great location`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
