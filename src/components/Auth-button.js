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
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#FAFAFA"
      onPress={() => {}}
      style={styles.container}
    >
      <View>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.authtitle}>{authtitle}</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 31,
    height: 62,
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    borderRadius: 15,
    borderWidth: 1,
    width: '90%',
    height: '10%',
    marginTop: '7%',
    flexDirection: 'row',
    position: 'relative',
    elevation: 0.1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
  },
  logo: {
    position: 'absolute',
    top: '25%',
    left: 45,
  },
  authtitle: {
    position: 'absolute',
    top: '25%',
    left: 92,
    fontSize: 16,
  },
});
