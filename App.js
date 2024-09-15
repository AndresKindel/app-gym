import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NoticiasView from './components/noticias/noticiasView'; 
import TutoriaisView from './components/tutoriais/tutoriaisView';
import { SplashScreenView } from './components/splashScreenView';
import AcademiasStackNavigator from './components/academias/academiasStackNavigator';

const Drawer = createDrawerNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreenView />;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Notícias" component={NoticiasView} />
        <Drawer.Screen name="Academias" component={AcademiasStackNavigator} />
        <Drawer.Screen name="Tutoriais" component={TutoriaisView} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
