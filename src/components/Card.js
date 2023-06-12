import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NewsContext } from '../Context/context';
import Loading from './Loading';

export default function Card() {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const { news } = useContext(NewsContext);
  const newsArticles = news && news.articles ? news.articles : [];

  const navigateToNewsDetails = (article) => {
    navigation.navigate('NewsDetails', { article });
  };

  return (
    <>
      {isLoading ? (
        // Show activity indicator loader while fetching data
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={{ margin: 20 }}
        />
      ) : (
        // Render the fetched items in the view
        <ScrollView>
          {newsArticles.slice(1).map((e) => {
            const key = e.title;
            return (
              <TouchableOpacity
                style={styles.card}
                key={key}
                onPress={() => navigateToNewsDetails(e)}
                value={{ key }}
              >
                {/* Render the item content */}
                <View style={styles.imageWrapper}>
                  <Image
                    source={{
                      uri: e.urlToImage,
                    }}
                    style={styles.image}
                  />
                </View>
                <View style={styles.textWrapper}>
                  <Text style={styles.title}>
                    {e.title.split(' ').slice(0, 6).join(' ')}
                  </Text>
                </View>
                <View style={styles.descriptionWrapper}>
                  <Text style={styles.description}>
                    {e.description.split(' ').slice(0, 12).join(' ')}
                  </Text>
                </View>
                <View>
                  <Image
                    source={require('../../assets/components/screens/home-screen/Bookmark-filled.png')}
                    style={styles.bookmark}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </>
  );
}
let $top = 12;
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fafafa',
    height: 125,
    width: '95%',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: '0.25',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 0.5,
    flex: 1,
  },
  imageWrapper: {
    width: 100,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'absolute',
    top: $top,
    left: 10,
  },
  textWrapper: {
    position: 'absolute',
    top: $top,
    paddingLeft: 122,
    paddingRight: 40,
  },
  descriptionWrapper: {
    marginTop: $top + 47,
    paddingLeft: 122,
    paddingRight: 30,
  },
  image: {
    height: '120%',
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    fontSize: 11,
  },
  bookmark: {
    position: 'absolute',
    right: '3%',
    top: -90,
    height: 25,
    width: 20,
  },
});
