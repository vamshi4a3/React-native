/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import VamshiNews from './VamshiNews';
import NewsDetails from './NewsDetails';



const Stack = createStackNavigator();

const App= () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="News" component={VamshiNews} />
      <Stack.Screen name="NewsDetails" component={NewsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  
    </>
  );
};

export default App;
