import {StyleSheet} from 'react-native';

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
  headerText: {
    flex: 1,
  },
  title: {
    fontFamily: 'Eczar-Bold',
    fontSize: 20,
    color: Theme.light(),
  },
  subtitle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 17,
    color: Theme.light(),
  },
  heading: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
    color: Theme.light(),
  },
  subheading1: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
    color: Theme.light(),
  },
  subheading2: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
    color: Theme.light(),
  },
  body: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 12,
    color: Theme.light(),
  },
});
