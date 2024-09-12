import * as React from 'react';
import { View, Text, Image, Button, StyleSheet, BackHandler } from 'react-native';
import { FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native'

const DataExercicios = [
    {NameExercicio: 'Supino Reto', ImgExercicio: 'https://treinomestre.com.br/wp-content/uploads/2014/01/supino-reto.jpg.webp', LinkVideo: 'https://www.youtube.com/watch?v=EZMYCLKuGow', Descricao: 'O supino reto é um exercício que trabalha principalmente o peitoral maior, o deltoide anterior e o tríceps braquial. É um dos exercícios mais populares e eficazes para o desenvolvimento do peitoral.' },
    {NameExercicio: 'Agachamento Livre', ImgExercicio: '', LinkVideo: '', Descricao: ''},
    {NameExercicio: 'Elevação Pelvica', ImgExercicio: '', LinkVideo: '', Descricao: ''},
    {NameExercicio: 'Remada', ImgExercicio: '', LinkVideo: '', Descricao: ''},
    {NameExercicio: 'Rosca Scott', ImgExercicio: '', LinkVideo: '', Descricao: ''},
    {NameExercicio: 'Levantamento Terra', ImgExercicio: '', LinkVideo: '', Descricao: ''},
  ];

export default function Tutorial({ navigation }) {
    const handlePress = () => {
        const url = 'https://www.google.com'; // A URL que você quer abrir
    
        return Linking.openURL(url)
    };
  return (
    <View>
        <TouchableOpacity onPress={handlePress} style={styles.buttonView}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
        <Text style={styles.title} >Tutorial 1</Text>
      </View>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button title="Ver Contatos" onPress={() => navigation.navigate('gyms')} />
      </View>
      <View style={styles.button}>
        <Button title="Sair" onPress={() => BackHandler.exitApp() } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 60,
  },
  logo: {
    height: 70,
    width: 70,
  },
  title: {
    padding: 30,
    fontSize: 18,
  },
  button: {
    padding: 15
  }
});