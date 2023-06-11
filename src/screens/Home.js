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
      bg: '#FECE2F',
      width: 50,
    },
    {
      id: 2,
      title: 'business',
      bg: '#F8F6F2',
      width: 90,
    },
    {
      id: 3,
      title: 'technology',
      bg: '#F8F6F2',
      width: 100,
    },
    {
      id: 4,
      title: 'entertainment',
      bg: '#F8F6F2',
      width: 110,
    },
    {
      id: 5,
      title: 'sports',
      bg: '#F8F6F2',
      width: 70,
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
          {options.map((option) => (
            <OptionButton key={option.id} details={option} />
          ))}
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
