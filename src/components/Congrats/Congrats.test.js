import React from 'react';
import checkPropTypes from 'check-prop-types';
import { setup, findByTestAttr, checkProps } from '../../testHelpers';
import Congrats from './Congrats';

describe('<Congrats />', () => {
  let wrapper;
  let congratsComponent;
  const defaultProps = { success: false };

  beforeEach(() => {
    wrapper = setup(Congrats, defaultProps);
    congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  });

  it('renders without crashing', () => {
    expect(congratsComponent).toHaveLength(1);
  });

  it('renders no text when `success` prop is false', () => {
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.text()).not.toContain('Congratulations, you guessed the word!');
  }); 

  it('renders congrats message when `success` prop is true', () => {
    wrapper = setup(Congrats, defaultProps, { success: true });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.text()).toContain('Congratulations, you guessed the word!');
  });

  it('does not throw warning with expected props', () => {
    const expectedProps = { success: true, }
    checkProps(Congrats, expectedProps);
  }); 
});
