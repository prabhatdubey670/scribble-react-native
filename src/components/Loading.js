import { View, Text } from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View>
      <Image source={require('../../assets/components/loading.gif')} />
      <Text>Loading .....</Text>
    </View>
  );
}
