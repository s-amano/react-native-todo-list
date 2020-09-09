import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';


class AddTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            description: "",
        }
    }

    // handleChange(e) {
    //     this.setState({ text: e.target.value })
    // }

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
            <View>
                <TextInput
                    type="todoName"
                    style={style.input}
                    value={this.state.text}
                    onChangeText={text => this.setState({text})}
                />
                <TextInput
                    type="description"
                    style={style.input}
                    value={this.state.description}
                    onChangeText={description => this.setState({description})}
                />
                <Button title='追加' onPress={() => this._addTodo()} />
            </View>
        )
    }
}

const style = StyleSheet.create({
    input: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1
    }
}) 

AddTodo = connect()(AddTodo)

export default AddTodo