import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../../components/Home/Home';
import store from '../../redux/configureStore';

describe('Component test snapshot', () => {
  it('Profile renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
