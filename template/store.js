import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const initialStore = {
    todos: [],
};

export default function configureStoreForTesting(initialState = initialStore) {
    return configureStore({ reducer: rootReducer, initialState });
}