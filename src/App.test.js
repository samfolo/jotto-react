import React from 'react';
import { setup, findByTestAttr, checkProps } from './testHelpers';
import App from './App';

describe('<App />', () => {
  let wrapper;
  let appComponent;
  const defaultProps = {};

  beforeEach(() => {
    wrapper = setup(App, defaultProps);
    appComponent = findByTestAttr(wrapper, 'component-app');
  });

  it('renders without crashing', () => {
   expect(appComponent).toHaveLength(1);
  });

  it('renders a <Congrats /> component', () => {
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats');
    expect(congratsComponent).toHaveLength(1);
  });

  it('renders a <GuessedWords /> component', () => {
    const guessedWordsComponent = findByTestAttr(wrapper, 'component-guessed-words');
    expect(guessedWordsComponent).toHaveLength(1);
  });
});
