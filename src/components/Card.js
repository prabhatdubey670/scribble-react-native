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

export default function Card() {
  const [isLoading, setIsLoading] = useState(false);

  const [isBookmarked, setIsBookmarked] = useState(false);

  const navigation = useNavigation();
  const { news } = useContext(NewsContext);
  const newsArticles = news && news.articles ? news.articles : [];

  const navigateToNewsDetails = (article) => {
    navigation.navigate('NewsDetails', { article });
  };

  const setSingleBookmark = () => {};

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
              <>
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
                      {e.description.split(' ').slice(0, 10).join(' ')} . . .
                    </Text>
                  </View>

                  {isBookmarked ? (
                    <TouchableOpacity onPress={() => setIsBookmarked(false)}>
                      <Image
                        source={require('../../assets/components/screens/home-screen/Bookmark-filled.png')}
                        style={styles.bookmark}
                      />
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={() => setIsBookmarked(true)}>
                      <Image
                        source={require('../../assets/components/screens/home-screen/Bookmark-empty.png')}
                        style={styles.bookmark}
                      />
                    </TouchableOpacity>
                  )}

                  <Text style={styles.timeInfo}>{e.publishedAt}</Text>
                </TouchableOpacity>
              </>
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
    overflow: 'hidden',
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
    position: 'relative',
    top: $top,
    paddingLeft: 122,
    paddingRight: 40,
  },
  descriptionWrapper: {
    marginTop: 10,
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
    position: 'relative',
    top: -80,
    left: 340,
    zIndex: 100,
    height: 25,
    width: 20,
  },
  timeInfo: {
    left: 122,
    fontSize: 11,
    top: -30,
    fontFamily: 'MontserratSemi',
    marginTop: '3%',
  },
});
