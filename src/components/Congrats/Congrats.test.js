import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { setup, findByTestAttr } from '../../testHelpers';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<Congrats />', () => {
  let wrapper;
  let congratsComponent;

  beforeEach(() => {
    wrapper = setup(Congrats);
    congratsComponent = findByTestAttr(wrapper, 'component-congrats');
  });

  it('renders without crashing', () => {
    expect(congratsComponent).toHaveLength(1);
  });

  it('renders no text when `success` prop is false', () => {
    wrapper = setup(Congrats, { success: false });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.text()).not.toContain('Congratulations, you guessed the word!');
  });

  it('renders congrats message when `success` prop is true', () => {
    wrapper = setup(Congrats, { success: true });
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message');
    expect(congratsMessage.text()).toContain('Congratulations, you guessed the word!');
  });
});
