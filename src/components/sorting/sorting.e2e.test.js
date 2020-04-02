import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorting from './sorting.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);

describe(`Events`, () => {

  it(`Get function on sorting click`, () => {
    const store = mockStore();
    store.dispatch = jest.fn();

    const placeCard = mount(
        <Provider store={store}>
          <Sorting
            handleSortTypeClick={store.dispatch}
          />
        </Provider>
    );

    placeCard.find(`.places__sorting-type`).simulate(`click`);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
