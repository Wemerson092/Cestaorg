import React from 'react';
import { SvgXml } from 'react-native-svg';
import { StatusBar, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppRotas from './src/rotas/AppRotas';

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppRotas />
    </SafeAreaView>
  )
}