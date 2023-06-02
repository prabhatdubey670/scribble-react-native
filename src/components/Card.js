import React, { useContext, Suspense } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NewsContext } from '../Context/context';
import Loading from './Loading';

export default function Card() {
  const navigation = useNavigation();
  const { news } = useContext(NewsContext);
  const newsArticles = news && news.articles ? news.articles : [];

  const navigateToNewsDetails = (article) => {
    navigation.navigate('NewsDetails', { article });
  };

  return (
    <ScrollView>
      <Suspense fallback={<Loading />}>
        {newsArticles.map((e) => {
          const key = e.title;
          return (
            <TouchableOpacity
              style={styles.card}
              key={key}
              onPress={() => navigateToNewsDetails(e)}
              value={{ key }}
            >
              <View style={styles.imageWrapper}>
                <Image
                  source={{
                    uri: e.urlToImage,
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.title}>{e.title.slice(0, 50)}</Text>
              </View>
              <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>
                  {e.description.slice(0, 100)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </Suspense>
    </ScrollView>
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
