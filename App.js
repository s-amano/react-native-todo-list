import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import  Main from './src/components/Main';
import store from './src/store/index';
import { addTodo, toggleTodo,setVisibilityFilter } from './src/actions/index';



export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <Main style={{}} />
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
