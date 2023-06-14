import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Line({ dimensions }) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: dimensions.bg,
          width: dimensions.width,
          position: dimensions.position,
          top: dimensions.top,
          left: dimensions.left,
          marginBottom: dimensions.marginBottom,
        },
      ]}
    ></View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 1,
  },
});
