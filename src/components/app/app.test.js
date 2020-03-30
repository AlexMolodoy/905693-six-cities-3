import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
// import {offers} from '../../mocks/tests.js';

it(`Render App`, () => {
  const testOffers = [
    {
      bedrooms: 1,
      coords: [52.3909553943508, 4.85309666406198],
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
    }, {
      bedrooms: 3,
      coords: [52.369553943508, 4.85309666406198],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.`,
      features: [`Wifi`, `Kitchen`, `Cable TV`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`],
      guests: 3,
      host: {
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        isStar: false
      },
      id: `02`,
      images: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
      isPremium: false,
      price: 34,
      rating: 80,
      title: `Big Vintage Room`,
      type: `Room`,
    }, {
      bedrooms: 2,
      coords: [52.3909553943508, 4.929309666406198],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.`,
      features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`],
      guests: 4,
      host: {
        avatar: `img/avatar-angelina.jpg`,
        name: `Angelina`,
        isStar: true
      },
      id: `03`,
      images: [`img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`, `img/apartment-02.jpg`],
      isPremium: false,
      price: 70,
      rating: 85,
      title: `Small House in the city center`,
      type: `House`,
    }, {
      bedrooms: 5,
      coords: [52.3809553943508, 4.939309666406198],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing enim eu turpis egestas pretium aenean pharetra magna. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus.`,
      features: [`Wifi`, `Kitchen`, `Cable TV`, `Fridge`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`],
      guests: 10,
      host: {
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        isStar: false
      },
      id: `04`,
      images: [`img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`, `img/apartment-03.jpg`],
      isPremium: true,
      price: 320,
      rating: 95,
      title: `Villa with amazing view`,
      type: `Villa`,
    },
  ];
  const tree = renderer
    .create(<App
      offers={testOffers}
      quantPlaces={5}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
