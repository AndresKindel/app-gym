import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import News from './news'; 
import Gyms from './gyms'; 
import Tutorial from './tutorial';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="News">
        <Drawer.Screen name="news" component={News} />
        <Drawer.Screen name="gyms" component={Gyms} />
        <Drawer.Screen name="tutorial" component={Tutorial} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}