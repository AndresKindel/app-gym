import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InputScreen } from './components/inputScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { SensorDataScreen } from './components/sensorDataScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="InputScreen" component={InputScreen} options={{ title: 'Limite de temperatura' }} />
        <Stack.Screen name="SensorDataScreen" component={SensorDataScreen} options={{ title: 'Dados do sensor' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
