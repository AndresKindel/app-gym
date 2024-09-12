import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, BackHandler, FlatList, TouchableOpacity, Linking } from 'react-native';


const DataExercicios = [
    { NameExercicio: 'Supino Reto', ImgExercicio: './assets/agachamento-livre.png', IdVideo: 'EZMYCLKuGow', Descricao: 'Trabalha peitoral, tríceps e deltoide anterior. Benefícios: fortalece o peitoral e melhora a estabilidade dos ombros.'},    
    { NameExercicio: 'Agachamento Livre', ImgExercicio: './assets/agachamento-livre.png', IdVideo: 'CaTbpJH49i4', Descricao: 'Trabalha quadríceps, glúteos e lombar. Benefícios: melhora a força das pernas e o equilíbrio do core.' },
    { NameExercicio: 'Elevação Pelvica', ImgExercicio: './assets/elevacao-pelvica.png', IdVideo: 'ptK0azwOXwM', Descricao: 'Trabalha glúteos e isquiotibiais. Benefícios: fortalece os glúteos e melhora a estabilidade do core.' },
    { NameExercicio: 'Remada', ImgExercicio: './assets/remada.png', IdVideo: 'f8AVh4VBbos', Descricao: 'Trabalha costas, bíceps e trapézio. Benefícios: desenvolve a força das costas e melhora a postura.' },
    { NameExercicio: 'Rosca Scott', ImgExercicio: './assets/rosca-scott.png', IdVideo: 'zpTK6eihdSA', Descricao: 'Trabalha bíceps. Benefícios: isola os bíceps, proporcionando maior definição e força.' },
    { NameExercicio: 'Levantamento Terra', ImgExercicio: './assets/levantamento-terra.png', IdVideo: '50AkPBZwACQ', Descricao: 'Trabalha glúteos, lombar e pernas. Benefícios: aumenta a força total e melhora a postura.' },
];

export default function Tutorial({ navigation }) {
    const handlePress = (videoId) => {
        const youtubeAppUrl = `vnd.youtube://${videoId}`;
        const youtubeWebUrl = `https://www.youtube.com/watch?v=${videoId}`;


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
        <TouchableOpacity onPress={() => handlePress(item.IdVideo)} style={styles.itemContainer}>
          <Image style={styles.image} source={item.ImgExercicio} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.NameExercicio}</Text>
            <Text style={styles.description}>{item.Descricao}</Text>
          </View>
        </TouchableOpacity>
      );

    return (
    <FlatList
      data={DataExercicios}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContent}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
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