import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions/index'
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';



class EditTodo extends Component {
    
    
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            description: "",
        }
    }

    componentDidMount() {
        const id = this.props.navigation.getParam('id')
        const targetTodo = this.props.todos.find((v) => v.id === id);
        this.setState({text:targetTodo.text,description:targetTodo.description})
    }

    // handleChange(e) {
    //     this.setState({ text: e.target.value })
    // }

    _editTodo () {
        const id = this.props.navigation.getParam('id')
        const date = new Date();
        const updatedAt = date.toLocaleString()
        this.props.EditTodo(id,this.state.text,this.state.description,updatedAt)
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
                    // defaultValue={targetTodo.text}
                    onChangeText={text => this.setState({text})}
                />
                <TextInput
                    type="description"
                    style={style.input}
                    value={this.state.description}
                    // defaultValue={targetTodo.description}
                    onChangeText={description => this.setState({description})}
                />
                <Button title='編集' onPress={() => this._editTodo()} />
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



export default EditTodo