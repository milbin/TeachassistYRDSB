import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {styles, Theme, elements} from './Styles';
import talogo from './assets/images/talogo.png';
import ParseTA from './ParseTA';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      rememberMe: {value: true, icon: 'check-box'},
      username: '',
      password: '',
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
          <Text style={styles.appName}>Teachassist</Text>
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
              onChangeText={username => this.setState({username})} // not sure if we need this line?
              value={this.state.username}
            />
            {/* username field */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
            }}>
            {/* password icon*/}
            <Icon name="lock-outline" color={Theme.light()} />
            {/* password */}
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
              onChangeText={password => this.setState({password})} // not sure if we need this line?
              value={this.state.password}
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
                    icon: 'check-box-outline-blank',
                  },
                });
              } else {
                this.setState({
                  rememberMe: {
                    value: true,
                    icon: 'check-box',
                  },
                });
              }
            }}>
            {/* remember me */}
            <Icon name={this.state.rememberMe.icon} color={Theme.punk()} />
            {/* remember me icon */}
            <Text style={[styles.subheading3, {paddingLeft: 5}]}>
              {/* remember me text */}
              Remember Me
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
          activeOpacity={0.25}
          onPress={async () => {
            console.log(this.state.username);
            console.log(this.state.password);
            console.log('pressed login');
            //let ta = new ParseTA();
            //let sessionToken = await ta.getSessionToken(
            //this.state.username,
            //this.state.password,
            //);
            //console.log(sessionToken);
            AsyncStorage.setItem('username', this.state.username);
            AsyncStorage.setItem('password', this.state.password);
            AsyncStorage.setItem(
              'rememberMe',
              JSON.stringify(this.state.rememberMe.value),
            );
            this.navigation.replace('MainPage');
          }}>
          {/* login button */}
          <Text style={[styles.title, {color: Theme.dark()}]}>
            {/* login text */}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
