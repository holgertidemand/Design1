import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Turn on push notifications
          so you now when you enter
          a new week and get great offers!
        </Text>
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

  text: {
    color: 'rgb(255, 255, 255)',
    fontSize: 23,
    textAlign: 'center',
    lineHeight: 33,
    paddingHorizontal: 44

  }
});
