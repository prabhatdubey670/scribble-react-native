import { View, StyleSheet } from 'react-native';
import React from 'react';

export default function Authbutton() {
  return <View style={styles.container}></View>;
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
  },
});
