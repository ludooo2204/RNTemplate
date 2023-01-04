/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { renderWithRedux } from '../test-utils';

import { render, screen, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import GainageTimer from '../components/gainage/GainageTimer';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe("rendu du composant App",
  () => {
    it('doit rendre correctement App', () => {
      render(<App />);

    })
    it('doit rendre le titre Fitness', () => {
      render(<App />);
      expect(screen.getByText(/Fitness/)).toBeTruthy();

    }
    )
  }
)
describe('Testing react navigation', () => {


  test('clicking on Séance de gainage button navigate to the gainageComponent', async () => {
    render(<App />);
    const toClick = await screen.findByText(/GAINAGE/i);
    fireEvent(toClick, 'press');
    const newHeader = await screen.findByText(/Start/i);
    expect(newHeader).toBeTruthy();
  });
});
describe('Testing react navigation', () => {

  test('adds a new todo to redux store ', () => {
    const { store } = renderWithRedux(<GainageTimer />);
    const initialStateCounter = store.getState().counter
    const button = screen.getByText(/increment/i);
    expect(button).toBeTruthy();
    fireEvent(button, 'press');
    const counter = store.getState().counter
    expect(initialStateCounter).not.toEqual(counter)
    expect(counter).toEqual(2)

  })
})