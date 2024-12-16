import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Button } from 'react-native';

export function InputScreen({ navigation }) {
  const [value, setValue] = useState(0);

  const sendValueToBackend = async (newValue) => {
    try {
      const response = await fetch('http://192.168.31.185:8000/controller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: newValue }),
      });
      if (!response.ok) {
        console.error('Erro ao enviar valor para o backend');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
    }
  };

  useEffect(() => {
    sendValueToBackend(value);
  }, [value]);

  const increaseValue = () => {
    if (value < 100) {
      setValue(value + 1);
    }
  };

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Limite de temperatura</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(value)}
        onChangeText={(text) => {
          if (text === "") {
            setValue(0);
          } else {
            const numericValue = parseInt(text, 10);
            if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 100) {
              setValue(numericValue);
            }
          }
        }}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increaseValue}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseValue}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <Button
        title="Dados do sensor"
        onPress={() => navigation.navigate('SensorDataScreen', { value })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 100,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
});
