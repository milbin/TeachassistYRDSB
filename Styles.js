import {StyleSheet} from 'react-native';

export const colors = {
  darkBlack: '#27272f',
  midBlack: '#33333d',
  lightBlack: '#ffffff',
  darkGreen: '#045d56',
  pink: '#ff4181',
  darkWhite: '#000000',
  midWhite: '#e4e4eb',
  lightWhite: '#ffffff',
  lightGreen: '#37efba',
  purple: '#729fff',
};

export const styles = StyleSheet.create({
  headerText: {
    flex: 1,
  },
  title: {
    fontFamily: 'Eczar-Bold',
    fontSize: 20,
  },
  subtitle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 17,
  },
  heading: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 16,
  },
  subheading1: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 14,
  },
  subheading2: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 14,
  },
  body: {
    fontFamily: 'Gilroy-Regular',
    fontSize: 12,
  },
});
