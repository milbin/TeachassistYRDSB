import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles, Theme, elements} from './Styles';
import talogo from './assets/images/talogo.png';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.rememberMe = false;
  }

  render() {
    return (
      <View
        style={{
          flex: 100,
          alignItems: 'center',
          backgroundColor: Theme.dark(),
        }}>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {/* username */}
            <Icon name="person-outline" color={Theme.light()} />
            {/* username icon */}
            <TextInput
              style={[
                elements.button,
                {
                  width: 250,
                  height: 35,
                  paddingLeft: 10,
                  marginLeft: 10,
                  marginRight: 25,
                  backgroundColor: Theme.mid(),
                },
              ]}
              placeholder="Username"
            />
            {/* username field */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            {/* password */}
            <Icon name="lock-outline" color={Theme.light()} />
            {/* password icon */}
            <TextInput
              style={[
                elements.button,
                {
                  width: 250,
                  height: 35,
                  paddingLeft: 10,
                  marginLeft: 10,
                  marginRight: 25,
                  backgroundColor: Theme.mid(),
                },
              ]}
              placeholder="Password"
              secureTextEntry={true}
            />
            {/* password field */}
          </View>
          {/* remember me */}
        </View>
        <TouchableOpacity
          style={[
            elements.button,
            {
              width: 200,
              height: 50,
              marginTop: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Theme.green(),
            },
          ]}
          activeOpacity={0.25}>
          {/* login button */}
          <Text
            style={[styles.subheading1, {fontSize: 25, color: Theme.dark()}]}>
            {/* login text */}
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.rememberMe = true;
          }}>
          {this.rememberMe ? (
            <Icon name="check-box-outline-blank" />
          ) : (
            <Icon name="check-box" />
          )}
          >
        </TouchableOpacity>
      </View>
    );
  }
}
