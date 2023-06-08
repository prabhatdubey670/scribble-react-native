import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Card from '../components/Card';
import Megahomecard from '../components/Megahomecard';
import OptionButton from '../components/OptionButton';
export default function Home() {
  const options = [
    {
      id: 1,
      title: 'All',
      bg: '',
    },
    {
      id: 2,
      title: '',
    },
    {
      id: 3,
      title: '',
    },
    {
      id: 4,
      title: '',
    },
    {
      id: 5,
      title: '',
    },
  ];

  return (
    <>
      <ScrollView>
        <View style={{ marginVertical: 10 }}>
          <Megahomecard />
        </View>
        <View>
          <Text style={styles.fetchHeader}>Articles & Blogs </Text>
        </View>
        <ScrollView horizontal={true}>
          <OptionButton />
        </ScrollView>

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
