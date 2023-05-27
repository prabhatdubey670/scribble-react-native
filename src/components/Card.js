import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NewsContext } from '../Context/context';
import { ScrollView } from 'react-native';
export default function Card() {
  const { news } = useContext(NewsContext);
  return (
    <>
      {news.map((e, id) => {
        return (
          <ScrollView>
            <View key={e.id}>{e.title}</View>
          </ScrollView>
        );
      })}
    </>
    //
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    marginVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: '0.25',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  textWrapper: {
    height: '10%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  image: {
    height: '120%',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    marginTop: 2,
  },
});
