//  Copyright © 2020 Benjamin Tran and Sarah Tran. All rights reserved.

import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export const colors = {
  darkBlack: '#27272f',
  midBlack: '#33333d',
  lightBlack: '#ffffff',
  darkGreen: '#045d56',
  pink: '#ff4181',
  lightWhite: '#ffffff',
  midWhite: '#e4e4eb',
  darkWhite: '#000000',
  lightGreen: '#37efba',
  purple: '#729fff',
};

export class Theme {
  static dark(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      return colors.darkBlack;
    } else {
      return colors.lightWhite;
    }
  }
  static mid(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      return colors.midBlack;
    } else {
      return colors.midWhite;
    }
  }
  static light(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      return colors.lightBlack;
    } else {
      return colors.darkWhite;
    }
  }
  static green(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      return colors.darkGreen;
    } else {
      return colors.lightGreen;
    }
  }
  static punk(isDarkModeEnabled) {
    if (isDarkModeEnabled) {
      return colors.pink;
    } else {
      return colors.purple;
    }
  }
}

export const styles = StyleSheet.create({
  appName: {
    fontFamily: 'Eczar-Bold',
    fontSize: 20,
    color: Theme.light(), //in use (login page)
  },
  title: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 25,
    color: Theme.light(), //in use (login button, overall average)
  },
  subtitle: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 20,
    letterSpacing: 1,
    color: Theme.light(), //in use (period number)
  },
  heading: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 17,
    color: Theme.light(), //in use (student number in heading)
  },
  subheading1: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    color: Theme.light(),
  },
  subheading2: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    color: Theme.light(), //in use (remember me)
  },
  subheading3: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    letterSpacing: 1,
    color: Theme.light(), //in use (course name in card)
  },
  body: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 12,
    color: Theme.light(),
  },
});

export const elements = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 55,
    borderBottomColor: Theme.mid(),
    borderBottomWidth: 2,
  },
});
