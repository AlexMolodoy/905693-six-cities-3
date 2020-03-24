import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import {offers} from '../../mocks/tests.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should click on name place card`, () => {
  const onNamePlaceClick = jest.fn();

  const main = mount(
      <Main
        quantPlaces={5}
        offers={offers}
        onNamePlaceClick={onNamePlaceClick}
      />
  );

  const placeCardNames = main.find(`.place-card__name a`);

  placeCardNames.forEach((it) => it.props().onClick());

  expect(onNamePlaceClick.mock.calls.length).toBe(5);
});
