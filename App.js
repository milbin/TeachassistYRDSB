//  Copyright © 2020 Benjamin Tran and Sarah Tran. All rights reserved.

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DBHelper from './DBHelper';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

let rememberMe = false;

function getData() {
  rememberMe = DBHelper.getUserSettings().rememberMe;
}
getData();

function Home() {
  return (
    <Stack.Navigator>
      {rememberMe === 'true' ? (
        <React.Fragment>
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{headerShown: false}}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
