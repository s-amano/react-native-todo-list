import React, { PropTypes } from 'react'
import {
    // Text,
    View,
    StyleSheet,
} from 'react-native';
import { 
  CheckBox, 
  Card,
  ListItem,
  Button,
  Text
} from 'react-native-elements'

const Todo = ({ todos,navigation }) => {
  const id = navigation.getParam('id')
  const targetTodo = todos.find((v) => v.id === id);
  return(
    <View>
      <Card title='Todo'>
        <Text h4 style={style.content}>
          Todo: {targetTodo.text}
        </Text>
        <Text style={style.content}>
          Description: {targetTodo.description}
        </Text>
        <Text style={style.content}>
          CreatedAt: {targetTodo.createdAt}
        </Text>
        <Button
          title="todoを編集する"
          onPress={() => navigation.navigate('EditTodo', { id: id } )}  
        />
      </Card>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100
    },
  content: {
      marginBottom: 10, 
      fontSize: 20
      // borderColor: 'gray', 
      // borderWidth: 1
  },
}) 

export default Todo