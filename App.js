import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import  MainScreen from './src/components/Main';
import DetailsTodoScreen from './src/containers/VisibleTodo';
import AddTodoScreen from './src/containers/AddTodo';
import EditTodoScreen from './src/containers/VisibleEditTodo';
import store from './src/store/index';
import { addTodo, toggleTodo,setVisibilityFilter, sortTodo } from './src/actions/index';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const RootStack = createStackNavigator(
  {
    List: MainScreen,
    Details: DetailsTodoScreen,
    AddTodo: AddTodoScreen,
    EditTodo: EditTodoScreen,
  },
  {
    initialRouteName: 'List',
  }
);

const AppContainer = createAppContainer(RootStack);

// store.dispatch(sortTodo('ASC'))
// store.dispatch(addTodo('aaa'))


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
