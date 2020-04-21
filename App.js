import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <DrawerNavigator />;
}
