import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';
import React from 'react';

export default function Authbutton({ authtitle, logo }) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.authtitle}>{authtitle}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 31,
    height: 62,
    backgroundColor: '#ffffff',
    borderColor: '#b7b7b7',
    borderRadius: 15,
    borderWidth: 1,
    width: '90%',
    height: '10%',
    marginTop: '7%',
    flexDirection: 'row',
    position: 'relative',
    elevation: 0.5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
  },
  logo: {
    position: 'relative',
    top: '4.3%',
    left: '65%',
  },
  authtitle: {
    position: 'relative',
    top: '4.8%',
    left: '80%',
    fontSize: 16,
  },
});
