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
});
