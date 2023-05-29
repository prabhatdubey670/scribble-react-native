import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Authbutton from '../components/Auth-button';

export default function Auth() {
  const [image, setImage] = useState(
    require('../../assets/components/screens/auth-screen/taxi-handshake.gif')
  );
  const loadingGif = () => {
    setInterval(() => {
      setImage(
        require('../../assets/components/screens/auth-screen/Handshake.png')
      );
    }, 2500);
  };
  loadingGif();
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.headerImg} />
      <Text style={styles.header}> Let's Get Started </Text>
      <Authbutton
        authtitle="Signin with Google"
        logo={require('../../assets/components/screens/auth-screen/Google.png')}
      />
      <Authbutton
        authtitle="Signin with Apple"
        logo={require('../../assets/components/screens/auth-screen/Apple.png')}
      />
      <Authbutton
        authtitle="Signin with Facebook"
        logo={require('../../assets/components/screens/auth-screen/Facebook.png')}
      />
      <Text style={{ marginTop: '13%' }}>Need Help ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    lineHeight: 48,
    color: '#000000',
    marginTop: '10%',
  },
  headerImg: {
    width: 200,
    height: 120,
    marginTop: '25%',
  },
});
