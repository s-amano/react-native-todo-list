import React, { PropTypes } from 'react'
import {
    Text,
    View,
    Button,
} from 'react-native';

const Todo = ({ todos,navigation }) => {
  const id = navigation.getParam('id')
  const targetTodo = todos.find((v) => v.id === id);
  return(
    <View>
      <Text>
        {targetTodo.text}
      </Text>
      <Text>
        {targetTodo.description}
      </Text>
      <Text>
        {targetTodo.createdAt}
      </Text>
      <Text>
        {targetTodo.updatedAt}
      </Text>
      <Button
          title="todoを編集する"
          onPress={() => navigation.navigate('EditTodo', { id: id } )}
      />
    </View>
  )
}

export default Todo