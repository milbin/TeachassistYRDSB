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
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Icon name="menu" color={Theme.light()} />
        <Text style={styles.subtitle}>Student: {this.state.username}</Text>
      </View>
    );
  }
}
