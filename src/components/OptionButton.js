import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function OptionButton({ details }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: details.bg, width: details.width },
      ]}
    >
      <Text style={styles.optionText}>{details.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,

    height: 30,

    display: 'flex',
    position: 'relative',
    marginLeft: 13,
    marginVertical: 6,
    padding: 2,
    paddingBottom: 3,
  },
  optionText: {
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    left: 14,
    top: 4,
  },
});
