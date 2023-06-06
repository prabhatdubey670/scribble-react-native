import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function NewsDetails({ route }) {
  const { article } = route.params;

  return (
    <View>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title} </Text>
      <View>
        <Text>Author, follow button , lines </Text>
      </View>
      <Text style={styles.description}>{article.description} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 210,
  },
  title: {
    fontSize: 18,
    position: 'relative',
    marginVertical: 12,
    marginLeft: 10,
    paddingHorizontal: 3.5,
    fontFamily: 'MontserratSemi',
  },
  description: {
    fontSize: 14,
    position: 'relative',
    marginLeft: 10,
    paddingHorizontal: 3.5,
    fontFamily: 'MontserratLight',
  },
});
