import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AcademiasDetalhesView() {
    const route = useRoute();
    const { academia } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={academia.imagem ? { uri: academia.imagem } : null} />
            <Text style={styles.title}>{academia.nome}</Text>
            <Text style={styles.description}>{academia.localizacao}</Text>
            <Text style={styles.info}>Horário de Funcionamento: {academia.horarioFuncionamento}</Text>
            <Text style={styles.info}>Mensalidade: {academia.mensalidade}</Text>
            <Text style={styles.info}>Telefone para Contato: {academia.telefoneContato}</Text>
            <Text style={styles.info}>WhatsApp: {academia.whatsapp}</Text>
            <View style={styles.iconContainer}>
                <Icon name="location-on" size={24} color="#000" />
                <Text style={styles.iconText}>Localização</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon name="chat" size={24} color="#25D366" />
                <Text style={styles.iconText}>WhatsApp</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    info: {
        fontSize: 14,
        marginBottom: 5,
    },
    iconContainer: {
        alignItems: 'center',
      },
    iconText: {
        marginTop: 5,
        fontSize: 16,
    },
});
