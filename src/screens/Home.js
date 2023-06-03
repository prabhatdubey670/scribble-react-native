import { View, Text } from 'react-native';
import React from 'react';
import Card from '../components/Card';
export default function Home() {
  return (
    <>
      <View>
        <View>
          <Text>Main image</Text>
        </View>
        <Text>Articles & Blogs </Text>
      </View>
      <Card />
    </>
  );
}
