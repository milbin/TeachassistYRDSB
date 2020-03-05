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
    this.state = {
      rememberMe: {value: false, checkBox: 'check-box-outline-blank'},
    };
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
        <View style={{marginTop: 120}}>
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
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              marginLeft: 30,
            }}
            activeOpacity={1}
            onPress={() => {
              if (this.state.rememberMe.value) {
                this.setState({
                  rememberMe: {
                    value: false,
                    checkBox: 'check-box-outline-blank',
                  },
                });
              } else {
                this.setState({
                  rememberMe: {value: true, checkBox: 'check-box'},
                });
              }
            }}>
            {/* remember me */}
            <Icon name={this.state.rememberMe.checkBox} color={Theme.punk()} />
            <Text style={[styles.subheading2, {paddingLeft: 5}]}>
              {/* remember me text */}
              Remember me
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            elements.button,
            {
              width: 200,
              height: 50,
              marginTop: 150,
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
      </View>
    );
  }
}
