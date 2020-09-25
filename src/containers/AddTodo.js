import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import {
    View,
    Text,
    TouchableHighlight,
    // TextInput,
    StyleSheet,
} from 'react-native';

import {
    Button,
    Input,
    Card,
    
} from 'react-native-elements'

class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            description: "",
        }
    }


    _addTodo () {
        const date = new Date();
        const createdAt = date.toLocaleString()
        this.props.dispatch(addTodo(this.state.text,this.state.description,createdAt))
        this.props.navigation.navigate('List')
        this.setState({ 
            text: "" ,
            description: ""
        })
        
    }

    render() {
        return (
            <View style={style.container}>
                <Card title='Todoの追加'>
                    <Input
                        type="todoName"
                        placeholder="TodoName"
                        style={style.input}
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                    />
                    <Input
                        type="description"
                        placeholder="TodoDescription"
                        multiline={true}
                        style={style.input}
                        value={this.state.description}
                        onChangeText={description => this.setState({description})}
                    />
                    <Button title='追加' onPress={() => this._addTodo()} />
                </Card>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 200
      },
    input: {
        // height: 40, 
        // borderColor: 'gray', 
        // borderWidth: 1
    },
}) 

AddTodo = connect()(AddTodo)

export default AddTodo