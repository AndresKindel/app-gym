import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export function SensorDataScreen({ route }) {
  const { value } = route.params;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.31.185:8000/logging');
        
        if (!response.ok) {
          throw new Error('Erro ao buscar dados do backend');
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);

  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do sensor</Text>
      {data ? (
        <Text style={styles.dataText}>{JSON.stringify(data, null, 2)}</Text>
      ) : (
        <Text style={styles.dataText}>Carregando...</Text>
      )}
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
  dataText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
