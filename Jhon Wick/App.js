import  React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
 
} from 'react-native';
//import FirstPage from './FirstPage'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator } from '@react-navigation/drawer'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
function FirstPage() {
    return (
        <View>
            <Text>THis is the Home page</Text>
        </View>
     
    );
  }

function firstScreenStack({ navigation }) {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={FirstPage}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: ()=>
              <NavigationDrawerStructure
                navigationProps={navigation}
              />,
            headerStyle: {
              backgroundColor: 'lightgrey', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
  );
}


function FeaturedProffesional() {
    return (
        <View>
            <Text>THis is the Featured Proffesional </Text>
        </View>
    
    );
  }

  
function Employees() {
    return (
        <View>
            <Text>THis is the Emplloyee page</Text>
        </View>
    
    );
  }

  
function CommunityForum() {
    return (
        <View>
            <Text>THis is the Community Forum</Text>
        </View>
    
    );
  }
  function ResumeWritingService() {
    return (
        <View>
            <Text>THis is the Resume Writing Service</Text>
        </View>
    
    );
  }
  
  function News() {
    return (
        <View>
            <Text>THis is the News</Text>
        </View>
    
    );
  }
  
  function MyProfile() {
    return (
        <View>
            <Text>THis is the my profile</Text>
        </View>
    
    );
  }
  function myjob() {
    return (
        <View>
            <Text>THis is the my jobs</Text>
        </View>
    
    );
  }
  function Shareapp() {
    return (
        <View>
            <Text>THis is the Share App</Text>
        </View>
    
    );
  }
  function Setting() {
    return (
        <View>
            <Text>THis is the Setting </Text>
        </View>
    
    );
  }
  function logout() {
    return (
        <View>
            <Text>THis is the logout</Text>
        </View>
    
    );
  }
  function Agents() {
    return (
        <View>
            <Text>THis is the Agents</Text>
        </View>
    
    );
  }
  
  


const  App=()=> {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
            backgroundColor: '#0dd1a3',
          activeTintColor: '#000',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={firstScreenStack} />
        <Drawer.Screen
          name="Featured Proffesional"
          options={{ drawerLabel: 'Featured Proffesional' }}
          component={FeaturedProffesional} />
           <Drawer.Screen
          name="Employees"
          options={{ drawerLabel: 'Employees' }}
          component={Employees} />
           <Drawer.Screen
          name="Agents"
          options={{ drawerLabel: 'Agents' }}
          component={Agents} />
           <Drawer.Screen
          name="Community / Forum"
          options={{ drawerLabel: 'Community / Forum' }}
          component={CommunityForum} />
           <Drawer.Screen
          name="Resume Writing Service"
          options={{ drawerLabel: 'Resume Writing Service' }}
          component={ResumeWritingService} />
           <Drawer.Screen
          name="News"
          options={{ drawerLabel: 'News' }}
          component={News} />
          <Drawer.Screen
          name="My Profile"
          options={{ drawerLabel: 'My Profile' }}
          component={MyProfile} />
          <Drawer.Screen
          name="my Job"
          options={{ drawerLabel: 'my Job' }}
          component={myjob} />
          <Drawer.Screen
          name="Share App"
          options={{ drawerLabel: 'Share App' }}
          component={Shareapp} />
          <Drawer.Screen
          name="Setting"
          options={{ drawerLabel: 'Setting' }}
          component={Setting} />
          <Drawer.Screen
          name="logout"
          options={{ drawerLabel: 'logout' }}
          component={logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;