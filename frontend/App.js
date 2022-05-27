import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Nunito_600SemiBold,Nunito_400Regular,Nunito_700Bold,    Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './assets/logo.png'

import Login from './components/LoginComponent'
import Mapa from './components/MapComponent'
import Catalogo from './components/CatalogoComponent'
import Confirma from './components/ConfirmaComponent1'
import Confirma2 from './components/ConfirmaComponent2'
import Agendamento from './components/ScheduleComponent'

const Stack = createStackNavigator();

const App = ()=> {

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{
headerShown: false
  }}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Mapa" component={Mapa}/>
          <Stack.Screen name="Catalogo" component={Catalogo}/>
          <Stack.Screen name="Agendamento" component={Agendamento}/>
          <Stack.Screen name="Confirma" component={Confirma}/>
          <Stack.Screen name="Confirma2" component={Confirma2}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

