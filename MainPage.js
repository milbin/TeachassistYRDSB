import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {styles, Theme, elements} from './Styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
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
      <View>
        {/* main page */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 55,
            borderBottomColor: Theme.mid(),
            borderBottomWidth: 2,
          }}>
          {/* header */}
          {/*            would need to make this into a separate file and import then adjust */}
          <Icon
            style={{marginLeft: 10}} //margin isn't working?
            name="menu"
            color={Theme.light()}
            onPress={console.log('menu button pressed')} // this is triggered when the view loads? and doesn't when pressed?
          />
          {/* menu button */}
          <Text style={[styles.heading]}>Student: {this.state.username}</Text>
          {/*        username isn't showing cause getData is async and doesn't finish fast enough */}
          {/* username text */}
          <Icon
            style={{marginRight: 10}} //margin isn't working?
            name="pencil-outline"
            type="material-community"
            color={Theme.light()}
            onPress={console.log('edit button pressed')} // this is triggered when the view loads? and doesn't when pressed?
          />
          {/* edit button */}
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* main page body */}
          <View style={{alignItems: 'center', marginTop: 50}}>
            {/* overall average */}
            <AnimatedCircularProgress
              size={170}
              width={5}
              fill={92.3} // this would need to be connected to smth obviously: https://github.com/bartgryszko/react-native-circular-progress
              rotation={0}
              lineCap="round"
              tintColor={Theme.punk()}
              backgroundColor={Theme.mid()}>
              {fill => <Text style={styles.title}>92.3%</Text>}
              {/* average text */}
              {/*                   again, needing to be connected */}
            </AnimatedCircularProgress>
            {/* progress circle */}
          </View>
          <View
            style={{
              alignItems: 'center',
              width: '90%',
              marginTop: 30,
            }}>
            {/* course list */}
            <TouchableOpacity
              style={[
                elements.button,
                {
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 120,
                  marginTop: 10,
                  borderWidth: 2,
                  borderColor: Theme.mid(),
                },
              ]}
              activeOpacity={0.25}
              onPress={() => {
                console.log('course pressed');
              }}>
              {/* course card */}
              {/*               this is just the template, not sure how it's supposed to be setup */}
              <View
                style={{
                  flexDirection: 'column',
                  marginTop: 15,
                  marginStart: 15,
                  width: 200,
                }}>
                {/* course card text (left side) */}
                <Text style={[styles.subtitle, {color: Theme.light()}]}>
                  {/* period number */}
                  Period 1
                  <Text style={[styles.body, {color: Theme.light()}]}>
                    {/* room number */}
                    {/*   need a small start margin and for some reason it inherited the fontfamily of the parent text (bold) */}
                    — Rm 141
                  </Text>
                </Text>
                <Text
                  style={[
                    styles.subheading2,
                    {marginTop: 3, color: Theme.light()},
                  ]}>
                  {/* course code */}
                  MCV4U1–01
                </Text>
                <Text
                  style={[
                    styles.subheading3,
                    {
                      marginTop: 3,
                      color: Theme.light(),
                    },
                  ]}>
                  {/* course name */}
                  Calculus and Vectors
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginEnd: 10,
                }}>
                {/* right side of card */}
                <AnimatedCircularProgress
                  size={100}
                  width={5}
                  fill={82.1}
                  rotation={0}
                  lineCap="round"
                  tintColor={Theme.green()}
                  backgroundColor={Theme.mid()}
                  style={{marginEnd: 10}}>
                  {fill => (
                    <Text style={[styles.heading, {fontSize: 20}]}>82.1%</Text>
                  )}
                  {/* average text */}
                </AnimatedCircularProgress>
                {/* course progress circle */}
                <Icon name="chevron-right" type="entypo" color={Theme.mid()} />
                {/* arrow icon */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
