/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import rootReducer from './reducers'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Gainage from './components/gainage/Gainage';
import HomeScreen from './components/HomeScreen';


const store = configureStore(
  { reducer: rootReducer },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)





const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle =
    isDarkMode ? styles.dark : styles.light
    ;
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Gainage" component={Gainage} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  dark: {
    backgroundColor: "black",
    color: "white"
  },
  light: {
    backgroundColor: "white",
    color: "black"
  },
  mainDark: {
    backgroundColor: "black",
    color: "white",
    flex: 1
  },
  mainLight: {
    backgroundColor: "white",
    color: "black",
    flex: 1
  },
});

export default App;


