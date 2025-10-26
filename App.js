import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native' // ← tambahkan Text di sini

import AppNavigator from './navigation/AppNavigator'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center', // biar teks di tengah
    alignItems: 'center'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}

        <AppNavigator />

        {/* tambahkan teks uji di sini */}
        <Text style={{ fontSize: 18, marginTop: 20 }}>
          Hello from Dockerized Expo App 🚀
        </Text>
      </View>
    )
  }
}
