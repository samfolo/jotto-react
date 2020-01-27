/* eslint-disable react/forbid-foreign-prop-types */

import React from 'react';
import { shallow } from "enzyme";
import checkPropTypes from 'check-prop-types';

import rootReducer from './reducers';
import { middlewares } from './configureStore';
import { createStore, applyMiddleware } from 'redux';


export const setup = (Component, defaultProps = {}, props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props }
  const wrapper = shallow(<Component { ...setupProps } />);
  if (state) wrapper.setState(state);
  return wrapper;
}

export const findByTestAttr = (wrapper, testAttr) => {
  return wrapper.find(`[data-test='${testAttr}']`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
}

export const connectedSetup = (Component, initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Component store={store} />).dive().dive();
  return wrapper;
}
