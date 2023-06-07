import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import { NewsContext } from '../Context/context';
export default function Megahomecard() {
  const { news } = useContext(NewsContext);
  const newsArticles = news && news.articles ? news.articles : [];

  return (
    <>
      <View style={styles.container}>
        <Text>Mega-card-home</Text>
      </View>
    </>
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
