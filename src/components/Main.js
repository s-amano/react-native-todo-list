import React, { Component } from 'react'
import {
    View,
    Flatlist,
    StyleSheet,
    
} from 'react-native';
import {
  Button,
  Header
} from 'react-native-elements'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import TodoList from './TodoList';


class Main extends React.Component {
  render(){
      return (
        <View style={styles.container}>
          <VisibleTodoList style={{ flex:2, marignBottom: 10 }} navigation={this.props.navigation}/>
          <View style={styles.buttonContainer}>
            <Button
                title="todoを追加する"
                onPress={() => this.props.navigation.navigate('AddTodo')}
            />
          </View>
          <Footer style={{ flex: 0.5 }}/>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === "ios" ? 10 : 0,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: "center"
  }
});
  
export default Main;