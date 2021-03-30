import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Video1 from '../src/Components/Video/Video'
import Tab1 from './Tab'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      
        <Stack.Screen name="Tab2" component={Tab1} />
        <Stack.Screen
          name="video"
          component={Video1}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App