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
            text: ""
        }
    }

    // handleChange(e) {
    //     this.setState({ text: e.target.value })
    // }

    _addTodo () {
        this.props.dispatch(addTodo(this.state.text))
        this.setState({ text: "" })
    }

    render() {
        return (
            <View>
                <TextInput
                    type="text"
                    value={this.state.text}
                    onChangeText={text => this.setState({text})}
                />
                <Button title='追加' onPress={() => this._addTodo()} />
            </View>
        )
    }
}

AddTodo = connect()(AddTodo)

export default AddTodo