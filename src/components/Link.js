import React, { PropTypes } from 'react'
import {
    Text,
    Linking,
    StyleSheet,
    View
} from 'react-native'
import {
    Button,
} from 'react-native-elements'

const Link = ({ active,children, onClick }) => {
    if(active) {
        return (
            <View style={style.container}>
                <Text style={{ 
                    color: 'black', 
                    fontSize: 20, 
                     }} 
                >
                    {children}
                </Text>
            </View> 
                )
    }

    return (
    <Button 
        title={children}
        style={{marginRight: 5}}
        onPress={() => {
            onClick()
          }}
    />
    )
}

const style = StyleSheet.create({
    container: {
        // flex: 1,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',

      },
    input: {
        // height: 40, 
        // borderColor: 'gray', 
        // borderWidth: 1
    },
}) 


export default Link