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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { Provider } from 'react-redux';
import configureStore from './store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';





const store = configureStore();
// export default function App() {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" />
//         <AddTodo />
//         <TodoList />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 32,
//   },
// });






function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: "black" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: "black" }}>
      <Text>Details Screen</Text>
      <AddTodo />
      <TodoList />
    </View>
    // <View style={isDarkMode ? styles.mainDark : styles.mainLight}>
    //   <Text style={backgroundStyle}>
    //     MyFitness
    //   </Text>
    // </View>
  );
}

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
          <Stack.Screen name="Details" component={DetailsScreen} />
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


// import * as React from 'react';
// import { StyleSheet, View, StatusBar } from 'react-native';
// import { Provider } from 'react-redux';
// import configureStore from './store';
// import AddTodo from './components/AddTodo';
// import TodoList from './components/TodoList';

// const store = configureStore();
// export default function App() {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <StatusBar barStyle="dark-content" />
//         <AddTodo />
//         <TodoList />
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 32,
//   },
// });
// TODO recuperer la navigation. Puis faire un TEMPLATE PERSO !!!!