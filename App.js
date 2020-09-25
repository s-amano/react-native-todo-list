import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import  MainScreen from './src/components/Main';
import DetailsTodoScreen from './src/containers/VisibleTodo';
import AddTodoScreen from './src/containers/AddTodo';
import EditTodoScreen from './src/containers/VisibleEditTodo';
import createStore from './src/store/index';
import { addTodo, toggleTodo,setVisibilityFilter, sortTodo } from './src/actions/index';
import { PersistGate } from 'redux-persist/integration/react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Header,
} from 'react-native-elements'

const { store, persistor } = createStore();


const RootStack = createStackNavigator(
  {
    List: {
      screen: MainScreen,
      navigationOptions: () => ({
        title: "Todoリスト一覧"
      })},
    Details: {
      screen: DetailsTodoScreen,
      navigationOptions: () => ({
        title: "Todoの詳細"
      })},
    AddTodo: {
      screen: AddTodoScreen,
      navigationOptions: () => ({
        title: "Todoリストアプリ"
      })},
    EditTodo: {
      screen: EditTodoScreen,
      navigationOptions: () => ({
        title: "Todoリストアプリ"
      })},
  },
  {
    initialRouteName: 'List',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </PersistGate>
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
