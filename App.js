import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather from './components/Weather';

export default function App() {
  return (
    <View style={styles.container}>
      <Weather zipcode="90110"/>
      <StatusBar style="auto"/>
    </View>
  )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});
