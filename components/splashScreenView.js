import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function SplashScreenView() {
  return (
    <View style={styles.container}>
      <Text>(aqui vai uma logo muito pica da academia)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
