import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles, Theme, elements} from './Styles';
import talogo from './assets/images/talogo.png';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', backgroundColor: Theme.dark()}}>
        {/* login page */}
        <View style={{alignItems: 'center', marginTop: 75}}>
          {/* logo and title */}
          <Image style={{width: 100, height: 100}} source={talogo} />
          {/* logo */}
          <Text style={styles.title}>Teachassist</Text>
          {/* title */}
        </View>
        <View style={{marginTop: 100}}>
          {/* credentials */}
          <TextInput
            style={[
              elements.button,
              {
                width: 250,
                height: 40,
                paddingLeft: 10,
                backgroundColor: Theme.mid(),
              },
            ]}
            placeholder="Username"
            leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
          />
          {/* username */}
          <TextInput
            style={[
              elements.button,
              {
                width: 250,
                height: 40,
                marginTop: 10,
                paddingLeft: 10,
                backgroundColor: Theme.mid(),
              },
            ]}
            placeholder="Password"
            secureTextEntry={true}
          />
          {/* password */}
          <TextInput
            style={[
              elements.button,
              {width: 250, marginTop: 10, backgroundColor: Theme.mid()},
            ]}
            placeholder="Remember Me"
          />
          {/* remember me */}
        </View>
        <TouchableOpacity
          style={[
            elements.button,
            {
              width: 250,
              height: 50,
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Theme.green(),
            },
          ]}
          activeOpacity={0.75}>
          {/* login button */}
          <Text
            style={[styles.subheading1, {fontSize: 25, color: Theme.dark()}]}>
            {/* login text */}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
