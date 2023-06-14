import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';

export default function ProfileImg({ dimensions }) {
  return (
    <View
      style={[
        styles.container,
        {
          width: dimensions.width,
          height: dimensions.height,
          position: dimensions.position,
          left: dimensions.left,
          top: dimensions.top,
        },
      ]}
    >
      <Image />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
});
