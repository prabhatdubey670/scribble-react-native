import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function NewsDetails({ route }) {
  const { article } = route.params;
  return (
    <View>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text> {article.title} </Text>
      <Text> {article.description} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});
