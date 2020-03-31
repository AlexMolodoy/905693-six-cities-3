import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';
import {offers} from '../../mocks/tests.js';

it(`Should render Offer correctly`, () => {
  // const offer = {
  //   bedrooms: 1,
  //   coords: [52.3909553943508, 4.85309666406198],
  //   description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.`,
  //   features: [`Wifi`, `Heating`, `Cable TV`, `Fridge`, `Coffee machine`, `Towels`],
  //   guests: 2,
  //   host: {
  //     avatar: `img/avatar-angelina.jpg`,
  //     name: `Angelina`,
  //     isStar: true
  //   },
  //   id: `01`,
  //   images: [`img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`, `img/room.jpg`],
  //   isPremium: false,
  //   price: 98,
  //   rating: 90,
  //   title: `Amazing Studio Loft`,
  //   type: `Apartment`,
  // };

  const tree = renderer
    .create(<Offer
      offer={offers[0].offers[0]}
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      onNamePlaceClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
