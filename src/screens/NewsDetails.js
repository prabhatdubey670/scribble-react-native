import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Line from '../components/Line';
import OptionButton from '../components/OptionButton';
import ProfileImg from '../components/ProfileImg';

export default function NewsDetails({ route }) {
  const { article } = route.params;

  return (
    <View>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title} </Text>
      <Line dimensions={{ bg: '#DCDCDC', width: '93%', left: 12 }} />
      <View style={{ marginVertical: 15 }}>
        <ProfileImg
          dimensions={{
            width: 40,
            height: 40,
            position: 'absolute',
            left: 12,
            top: -7,
          }}
        />

        <View style={styles.followButton}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              fontFamily: 'MontserratSemi',
            }}
          >
            Follow
          </Text>
        </View>
      </View>
      <Line
        dimensions={{
          bg: '#DCDCDC',
          width: '93%',
          left: 12,
          marginBottom: 10,
        }}
      />
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
  line: {
    marginVertical: 10,
  },
  followButton: {
    borderRadius: 10,
    backgroundColor: '#FECE2F',
    height: 30,
    display: 'flex',
    position: 'relative',

    right: -300,
    width: 70,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
