import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TranscationScreen from './Screen/Transaction';
import SearchScreen from './Screen/Search';
import {CreateAppContainer} from 'react-natvigation';
import {CreateBottomTabNavigator} from 'react-natvigation-tabs'



export default class App extends React.Component
{
  render()
  {
    return(
      <AppContainer/>
    )
  }
}



const TabNavigator = CreateBottomTabNavigator({
  Search: {Screen: SearchScreen},
  Transcation: {Screen: TranscationScreen}
})

const AppContainer = CreateAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
