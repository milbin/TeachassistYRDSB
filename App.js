import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/*
export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
*/

///*
function StackNavigator() {
  return (
    <NavigationContainer>
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
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MainPage">
      <Drawer.Screen name="Un" component={MainPage} />
      <Drawer.Screen name="hjf" component={LoginPage} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return <StackNavigator />;
}

//*/
