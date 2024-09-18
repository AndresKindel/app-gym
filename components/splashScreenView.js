import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function SplashScreenView() {
  return (
    <View style={styles.container}>
     <Image style={styles.image} source={"https://cdn-icons-png.flaticon.com/512/755/755298.png" ? { uri: "https://cdn-icons-png.flaticon.com/512/755/755298.png" } : null} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 10,
    resizeMode: 'contain',
  }
});
