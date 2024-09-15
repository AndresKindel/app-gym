import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import dadosNoticias from './assets/dadosNoticias.json';

export default function NoticiasView() {
  const handlePress = (urlNoticia) => {
    Linking.canOpenURL(urlNoticia)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(urlNoticia);
        } else {
          Alert.alert('Erro', 'Não foi possível abrir o link.');
        }
      })
      .catch((err) => Alert.alert('Erro', 'Não foi possível abrir o link.'));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.urlNoticia)} style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.imgNoticia}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.tituloNoticia}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dadosNoticias}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContent}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});
