import React, { Component } from 'react'
import {
    View,
    Flatlist,
    StyleSheet,
    Button
} from 'react-native';
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import TodoList from './TodoList';

class Main extends React.Component {
  render(){
      return (
        <View style={styles.container}>
          {/* <AddTodo /> */}
          <VisibleTodoList navigation={this.props.navigation}/>
          <Button
            title="todoを追加する"
            onPress={() => this.props.navigation.navigate('AddTodo')}
          />
          <Footer />
        </View>
      );
  }
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