/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react-native';
import configureStoreForTesting from './store';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export function renderWithRedux(ui, options) {
  const store = options?.store ?? configureStoreForTesting(options?.initialState);
  const queries = render(<Provider store={store}>{ui}</Provider>);
  return { ...queries, store };
}
// export function renderWithRedux(preloadedState) {
//   return configureStore({
//     reducer: rootReducer,
//     preloadedState
//   })
// }