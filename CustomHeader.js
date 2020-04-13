import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {styles, Theme} from './Styles';

export default class CustomHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.getData();
  }

  async getData() {
    try {
      const value = await AsyncStorage.getItem('username');
      if (value !== null) {
        this.state.username = value;
      }
    } catch (e) {
      // error reading value
    }
    console.log(this.state.username);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around', // for some reason this doesn't work
        }}>
        <View style={{flex: 1}}>
          <Icon
            style={{flex: 1}}
            name="menu"
            color={Theme.light()}
            onPress={console.log('menu button pressed')} // this is triggered when the view loads? and doesn't when pressed?
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={[styles.subtitle]}>Student: {this.state.username}</Text>
        </View>
        <View style={{flex: 1}}>
          <Icon
            style={{flex: 1}}
            name="pencil-outline"
            type="material-community"
            color={Theme.light()}
            onPress={console.log('edit button pressed')} // this is triggered when the view loads? and doesn't when pressed?
          />
        </View>
      </View>
    );
  }
}
