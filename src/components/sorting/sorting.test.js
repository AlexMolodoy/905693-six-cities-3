import React from 'react';
import renderer from 'react-test-renderer';
import Sorting from './sorting.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);


it(`Should render Reviews list correctly`, () => {
  const store = mockStore({
    handleSortLinkClick: jest.fn(),
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Sorting />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
