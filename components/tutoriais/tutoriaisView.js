import * as React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import dadosTutoriais from './assets/dadosTutoriais.json';

export default function TutoriaisView() {
  const handlePress = (idVideo) => {
    const youtubeAppUrl = `vnd.youtube://${idVideo}`;
    const youtubeWebUrl = `https://www.youtube.com/watch?v=${idVideo}`;

    Linking.canOpenURL(youtubeAppUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(youtubeAppUrl);
        } else {
          return Linking.openURL(youtubeWebUrl);
        }
      })
      .catch((err) => Alert.alert('Erro', 'Não foi possível abrir o link.'));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item.idVideo)} style={styles.itemContainer}>
      <Image style={styles.image} source={{ uri: item.imgExercicio }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.tituloExercicio}</Text>
        <Text style={styles.description}>{item.descricao}</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{item.videoLength}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dadosTutoriais}
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
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  timer: {
    fontSize: 12,
    color: 'red',
    textAlign: 'right',
  },
});
