/* eslint-disable react/forbid-foreign-prop-types */

import React from 'react';
import { shallow } from "enzyme";
import checkPropTypes from 'check-prop-types';

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
