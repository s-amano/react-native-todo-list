import React, { PropTypes } from 'react'
import Todo from './Todo'
import { 
    Text,
    FlatList,
    Button,
    View,
    StyleSheet
} from 'react-native'
import {
    SearchBar
} from 'react-native-elements'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '',dataSource:[] };
        this.arrayholder = [];
    }

    componentDidMount() {
        // console.log(this.props.todos)
        this.setState(
            {
              dataSource: this.props.todos
            },
            function() {
              this.arrayholder = this.props.todos;
            }
        )
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.todos)
        // console.log(this.props.filter)
        // 配列の順番が変わったことをキャッチできない？
        // filterが変わったことはわかるからactiveなどのときだけcomponentDidUpdateが実行される？
        if (this.props.todos !== prevProps.todos) {
          this.setState(
                {
                dataSource: this.props.todos
              },
              function() {
                this.arrayholder = this.props.todos;
              }
              );
        }
      }

    SearchFilterFunction(text) {
        const newData = this.arrayholder.filter(function(item) {
          const itemData = item.text ? item.text.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          dataSource: newData,
          search: text,
        });
      }


    render() {
        
        return(
            <View>

                <SearchBar
                    value={this.state.search}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    placeholder='検索キーワード…'
                />
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={({item}) => 
                        <View style={style.todo}>
                            <Text 
                                onPress={() => this.props.onTodoClick(item.id)}
                                style={{ textDecorationLine : item.completed ? 'line-through' : 'none' }}
                            >
                                {item.text}
                            </Text>
                            <Button
                                title='削除'
                                onPress={() => this.props.RemoveTodo(item.id)}
                            />
                            <Button
                                title="詳細"
                                onPress={() => this.props.navigation.navigate('Details', { id: item.id })}
                            />
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View> 
        )
    }

}

const style = StyleSheet.create({
    todo: {
      marginBottom: 10,
      flexDirection: "row"
    }
}) 

export default TodoList