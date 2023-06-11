import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function OptionButton() {
  return (
    <View style={styles.container}>
      <Text>HomeButton</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: 8,
    height: 4,
    backgroundColor: 'yellow',
    position: 'relative',
  },
  optionText: {
    color: 'black',
    fontSize: 8,
    position: 'relative',
    top: '50%',
    left: '50%',
  },
});
