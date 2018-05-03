import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import ImagePath from './assets/person.png';

export default class App extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Image
          source={ImagePath}
          style={styles.image}
        />
        <Text
          style={styles.text}
        >
          Turn on push notifications
          so you now when you enter
          a new week and get great offers!
        </Text>
        <TouchableOpacity
          style={styles.mainButton}
        >
          <Text
            style={styles.mainButtonText}
          >
            Yay!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(32, 224, 183)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    position: 'absolute',
    top: 21,
    marginHorizontal: 140
  },

  text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 23,
    textAlign: 'center',
    lineHeight: 33,
    paddingHorizontal: 44
  },

  mainButton: {
    position: 'absolute',
    bottom: 52,
    width: 186,
    height: 55,
    borderColor: 'rgb(255, 255, 255)',
    borderWidth: 1,
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainButtonText: {
    color: 'rgb(255, 255, 255)',
    fontSize: 16
  }
});
