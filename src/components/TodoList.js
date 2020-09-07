import React, { PropTypes } from 'react'
import Todo from './Todo'
import { 
    Text,
    FlatList,
    Button,
    View,
    StyleSheet
} from 'react-native'

const TodoList = ({ todos, onTodoClick, RemoveTodo }) => (
    <FlatList data={todos}
        renderItem={({item}) => 
        <View style={style.todo}>
            <Text 
                onPress={() => onTodoClick(item.id)}
                style={{ textDecorationLine : item.completed ? 'line-through' : 'none' }}
            >
                {item.text}
            </Text>
            <Button
                title='削除'
                onPress={() => RemoveTodo(item.id)}
            />
        </View>
    }
        keyExtractor={item => item.id}
    />
)

const style = StyleSheet.create({
    todo: {
      marginBottom: 10,
      flexDirection: "row"
    }
}) 

export default TodoList