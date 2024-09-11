import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from './news'
import Gyms from './gyms'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="news" component={News} />
    <Stack.Screen name="gyms" component={Gyms} />
     </Stack.Navigator>
    </NavigationContainer>
  );
}