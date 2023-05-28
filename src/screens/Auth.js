import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Authbutton from '../components/Auth-button';

export default function Auth() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/components/screens/auth-screen/Handshake.png')}
        style={styles.headerImg}
      />
      <Text style={styles.header}> Let's Get Started </Text>

      <Authbutton style={{ marginTop: 10 }} />
      <Authbutton style={styles.authRec} />
      <Authbutton style={styles.authRec} />
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
    fontSize: 25,
    lineHeight: 48,
    color: '#000000',
    marginTop: '10%',
  },
  headerImg: {
    width: 195,
    height: 120,
    marginTop: '25%',
  },
});
