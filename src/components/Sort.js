import React, { PropTypes } from 'react'
import {
    Text,
    Linking
} from 'react-native'

const Sort = ({ active, children, onClick }) => {
    if(active) {
        return <Text>{children}</Text>
    }

    return (
    <Text 
        style={{color: 'blue'}}
        onPress={() => {
            onClick()
          }}
    >
      {children}
    </Text>
    )
}


export default Sort