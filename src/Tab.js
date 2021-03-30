import React from 'react';
import { Text } from 'react-native';
import Home from './Components/Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeIcon from 'react-native-vector-icons/Foundation'
import SearchIcon from 'react-native-vector-icons/FontAwesome'
import SerchScreen from './Components/Screens/Serchscreen'
const Tab = createMaterialBottomTabNavigator();
const Tab1 = () => {
    return (

       

            <Tab.Navigator style={{backgroundColor:"#fff"}}>
                <Tab.Screen name="Home" component={Home} 
                options={{
                   
                    tabBarIcon: ({ color }) => (
                      <HomeIcon name="home"  size={26} />
                    ),
                  }}
                />
                 <Tab.Screen name="search" component={SerchScreen} 
                options={{
                   
                    tabBarIcon: ({ color }) => (
                      <SearchIcon name="search"  size={26} />
                    ),
                  }}
                />
                   <Tab.Screen name="Home2" component={Home} 
                options={{
                   
                    tabBarIcon: ({ color }) => (
                      <HomeIcon name="home"  size={26} />
                    ),
                  }}
                />
                   <Tab.Screen name="Home3" component={Home} 
                options={{
                   
                    tabBarIcon: ({ color }) => (
                      <HomeIcon name="home"  size={26} />
                    ),
                  }}
                />
                  <Tab.Screen name="Home4" component={Home} 
                options={{
                   
                    tabBarIcon: ({ color }) => (
                      <HomeIcon name="home"  size={26} />
                    ),
                  }}
                />
                
            </Tab.Navigator>
       

    );
}

export default Tab1;