import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {styles, colors} from './Styles';
import talogo from './assets/images/talogo.png';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View>
        <View style={{alignItems: 'center'}}>
          <Image style={{width: 100, height: 100}} source={talogo} />
          <Text style={styles.title}>Teachassist</Text>
        </View>
      </View>
    );
  }
}
