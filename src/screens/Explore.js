import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ExploreCard from '../components/ExploreCard';

export default function Explore() {
  return (
    <View style={styles.container}>
      <ExploreCard />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: 'auto',
  },
});
