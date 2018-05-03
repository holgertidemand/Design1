import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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

  quitButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    backgroundColor: 'rgb(249, 250, 252)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  quitIcon: {
    marginTop: 3
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
