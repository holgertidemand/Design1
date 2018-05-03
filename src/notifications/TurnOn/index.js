import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

import ImagePath from '../../../assets/person.png';
import { styles } from './styles';

export default class TurnOn extends Component {
  render() {
    return (
      <View
        style={styles.container}
      >
        <Image
          source={ImagePath}
          style={styles.image}
        />
        <TouchableOpacity style={styles.quitButton} >
          <Entypo
            style={styles.quitIcon}
            name='cross'
            size={32}
          />
        </TouchableOpacity>
        <Text style={styles.text} >
          Turn on push notifications
          so you now when you enter
          a new week and get great offers!
        </Text>
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>
            Yay!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}