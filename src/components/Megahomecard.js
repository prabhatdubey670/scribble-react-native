import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext } from 'react';
import { NewsContext } from '../Context/context';
export default function Megahomecard() {
  const { news } = useContext(NewsContext);
  const newsArticles = news && news.articles ? news.articles : [];

  return (
    <>
      {newsArticles.length > 0 && (
        <View style={styles.container} key={newsArticles[0].title}>
          <Text>{newsArticles[0].title}</Text>
          <Image
            source={{ uri: newsArticles[0].urlToImage }}
            style={styles.image}
          />
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#D9D9D9',
    // borderRadius: 10,
    // width: '95%',
    // height: 200,
    // marginHorizontal: 12,
  },
  image: {
    width: '95%',
    height: 200,
    marginHorizontal: 12,
  },
});
