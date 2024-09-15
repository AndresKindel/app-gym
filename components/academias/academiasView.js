import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import dadosAcademias from './assets/dadosAcademias.json';
import { useNavigation } from '@react-navigation/native';

export default function AcademiasView() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Detalhes Academia', { academia: item })} style={styles.itemContainer}>
      <Image style={styles.image} source={item.imagem} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.nome}</Text>
        <Text style={styles.description}>{item.localizacao}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dadosAcademias}
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
