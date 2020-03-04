import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, Button} from 'react-native';
import {styles, colors, Theme} from './Styles';
import talogo from './assets/images/talogo.png';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: Theme.dark()}}>
        {/* login page view */}
        <View style={{alignItems: 'center', marginTop: 75}}>
          {/* logo and text view */}
          <Image style={{width: 100, height: 100}} source={talogo} />
          <Text style={styles.title}>Teachassist</Text>
        </View>
      </View>
    );
  }
}
