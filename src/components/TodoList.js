import React, { PropTypes } from 'react'
import Todo from './Todo'
import { 
    
    FlatList,
    
    View,
    StyleSheet,
    ScrollView,
} from 'react-native'
import {
    Text,
    SearchBar,
    Button,
    Card
} from 'react-native-elements'
import Modal from "react-native-modal";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            dataSource:[],
        };
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
            <View style={style.container}>
                <View style={{ flex: 0.5 }}>
                <SearchBar
                    value={this.state.search}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    placeholder='検索キーワード…'
                />
                </View>
                <View style={{ flex: 2 }}>
                    <FlatList 
                        data={this.state.dataSource}
                        renderItem={({item}) => 
                            <Card style={style.container}>
                                <View style={style.cell}>
                                    <Text 
                                        onPress={() => this.props.onTodoClick(item.id)}
                                        style={{ padding: 10,
                                            fontSize: 18,
                                            textDecorationLine : item.completed ? 'line-through' : 'none' }}
                                    >
                                        {item.text}
                                    </Text>
                                
                                    <View style={style.buttonContainer}>
                                        <Button
                                            title='削除'
                                            style={style.button}
                                            onPress={() => this.props.RemoveTodo(item.id)}
                                        />
                                        <Button
                                            title="詳細"
                                        
                                            onPress={() => this.props.navigation.navigate('Details', { id: item.id })}
                                        />
                                    </View>
                                </View>
                            </Card>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View> 
        )
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '',
        // alignItems: 'center',
        justifyContent: 'center',
      },
    todo: {
      marginBottom: 10,
      flexDirection: "row"
    },
    cell: {
        flexDirection: 'row',
        // borderStyle: 'solid',
        // borderWidth: 0.5,
        borderColor: '#bbb',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 200,
        flexDirection: "row",
        justifyContent: 'flex-end'
        // backgroundColor: '#FFFFFF',
        // margin: 3
    },
    button: {
        marginRight: 10
    },
    modal: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: "#fff",
        height: 300
    },
    modalButton: {
        flexDirection: 'row'
    }

}) 

export default TodoList