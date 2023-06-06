import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Megahomecard() {
  return (
    <View style={styles.container}>
      <Text>Mega-card-home</Text>
      {/* <Image /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    width: '95%',
    height: 200,
    marginHorizontal: 12,
  },
  image: {},
});
