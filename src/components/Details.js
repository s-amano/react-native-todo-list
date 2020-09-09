import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import VisbleTodo from '../containers/VisibleTodo'

class DetailsScreen extends React.Component {
    render() {
      const id = this.props.navigation.getParam('id')
      return (
          <Todo navigation={this.props.navigation} id={id} />
      );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default DetailsScreen


// 使ってない