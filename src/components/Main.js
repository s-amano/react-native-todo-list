import React, { Component } from 'react'
import {
    View,
    Flatlist,
    StyleSheet
} from 'react-native';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'

function Main() {
      return (
        <View style={styles.container}>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 30 : 0,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",


  }
});
  
export default Main;