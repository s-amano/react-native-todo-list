import React from 'react'
import FilterLink from '../containers/FilterLink'
import {
  View, 
  Text,
  StyleSheet
} from 'react-native'
import {
  ButtonGroup
} from 'react-native-elements'

const Footer = () => (
  <View style={style.link}>
    <Text>Show:</Text>
    
    <FilterLink filter="SHOW_ALL">
      <Text>All </Text>
    </FilterLink>

    <FilterLink filter="SHOW_ACTIVE">
      <Text>Active </Text>
    </FilterLink>

    <FilterLink filter="SHOW_COMPLETED">
      <Text>completed </Text>
    </FilterLink>
  </View>
)

const style = StyleSheet.create({
  link: {
    marginBottom: 10,
    flexDirection: "row"
  }
}) 

export default Footer