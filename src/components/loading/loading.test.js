import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './loading.jsx';


it(`Should render Error correctly`, () => {
  const tree = renderer
    .create(<Loading />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
