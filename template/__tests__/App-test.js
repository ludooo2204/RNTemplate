/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { renderWithRedux } from '../test-utils';
import '@testing-library/jest-native/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import GainageTimer from '../components/gainage/GainageTimer';
import { act } from 'react-test-renderer';
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


describe('GainageTimer', () => {
  it('timer exists', async () => {

    const { store } = renderWithRedux(<GainageTimer />);

    // Find the "Start" button and press it
    // const startButton = screen.getByText(/Start/i);
    // fireEvent.press(startButton);


    // Wait for 100ms to pass
    await waitFor(() => expect(screen.getByText(/\d+ms/i)).toBeTruthy(), { timeout: 200 });


  })
  it('starts timer make appear stop button ', async () => {

    const { store } = renderWithRedux(<GainageTimer />);

    // Find the "Start" button and press it
    const startButton = screen.queryByText(/Start/i);
    const stopButton = screen.queryByText(/Stop/i);
    expect(stopButton).toBeNull()
    fireEvent.press(startButton);

    const stopButton2 = await screen.getByText(/Stop/i);

    expect(stopButton2).toBeTruthy()


  })
  it('stop button will give a time', async () => {

    const { store } = renderWithRedux(<GainageTimer />);
    expect(screen.getByTestId('timer')).toHaveTextContent(/^0ms/)
    // Find the "Start" button and press it
    const startButton = screen.queryByText(/Start/i);
    fireEvent.press(startButton);

    await waitFor(() => expect(screen.getByTestId('timer')).not.toHaveTextContent(/^0ms/), { timeout: 200 })



  })
  it('reset Button reset ', async () => {

    const { store } = renderWithRedux(<GainageTimer />);
    expect(screen.getByTestId('timer')).toHaveTextContent(/^0ms/)
    // Find the "Start" button and press it
    const startButton = screen.queryByText(/Start/i);
    fireEvent.press(startButton);

    await waitFor(() => expect(screen.getByTestId('timer')).not.toHaveTextContent(/^0ms/), { timeout: 200 })
  })
  it('gainage AddToStore() works', async () => {

    const { store } = renderWithRedux(<GainageTimer />);
    const initialState = store.getState().gainage.elapsedTime
    store.dispatch({ type: 'ADD_GAINAGE_SESSION', payload: 500 });
    const state = store.getState().gainage.elapsedTime
    expect(initialState).not.toEqual(state)
  })


})