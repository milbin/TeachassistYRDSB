import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import CustomHeader from './CustomHeader';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

const Stack = createStackNavigator();

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
          options={{headerTitle: props => <CustomHeader />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
