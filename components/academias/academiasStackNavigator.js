import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AcademiasView from './academiasView'; 
import AcademiasDetalhesView from './academiasDetalhesView';

const Stack = createStackNavigator();

export default function AcademiasStackNavigator() {
  return (
    <Stack.Navigator initialRouteName='AcademiasView'>
      <Stack.Screen name="Franquias" component={AcademiasView} />
      <Stack.Screen name="Detalhes Academia" component={AcademiasDetalhesView} />
    </Stack.Navigator>
  );
}
