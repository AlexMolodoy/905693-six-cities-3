import React from 'react';
import renderer from 'react-test-renderer';
import DetailedOffer from './detailed-offer.jsx';
// import {offers} from '../../mocks/tests.js';

it(`Should render DetailedOffer correctly`, () => {
  const testOffer = {
    bedrooms: 1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.`,
    features: [`Wifi`, `Heating`, `Cable TV`, `Fridge`, `Coffee machine`, `Towels`],
    guests: 2,
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isStar: true
    },
    id: `01`,
    images: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
    isPremium: false,
    price: 98,
    rating: 90,
    title: `Amazing Studio Loft`,
    type: `Apartment`,
  };

  const tree = renderer
      .create(<DetailedOffer
        offer={testOffer}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
        onNamePlaceClick={() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
