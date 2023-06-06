import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Megahomecard from '../components/Megahomecard';
export default function Home() {
  return (
    <>
      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <Megahomecard />
        </View>
        <Text style={styles.fetchHeader}>Articles & Blogs </Text>
        <Card />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  fetchHeader: {
    fontSize: 16,
    marginLeft: 14,
    marginVertical: 8,
    fontFamily: 'LibreBaskervilleBold',
  },
});
