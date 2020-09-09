import React, {Component} from 'react'
import FilterLink from '../containers/FilterLink'
import SortLink from '../containers/SortLink'
import {
  View, 
  Text,
  StyleSheet
} from 'react-native'
import {
  ButtonGroup,
  Card,
  Button,
} from 'react-native-elements'

// class Footer extends Component {

//   constructor () {
//     super()
//     this.state = {
//       selectedIndex: 2
//     }
//     this.updateIndex = this.updateIndex.bind(this)
//   }

//   // updateIndex (selectedIndex) {
//   //   this.setState({selectedIndex})
//   // }

//   updateIndex (selectedIndex) {
//     const filter = [
//       { index: 0, filter: "SHOW_ALL" },
//       { index: 1, filter: "SHOW_ACTIVE" },
//       { index: 2, filter: "SHOW_COMPLETED" }
//     ].find(({ index, filter }) => index === selectedIndex).filter
//     this.props.filterTodos(filter)
//     this.setState({selectedIndex})
//   }

//   component1 = () => <FilterLink filter="SHOW_ALL" type='all'><Text>all</Text></FilterLink>
//   component2 = () => <FilterLink filter="SHOW_ACTIVE" type='active'><Text>active</Text></FilterLink>
//   component3 = () => <FilterLink filter="SHOW_COMPLETED" type='completed'><Text>completed</Text></FilterLink>


// render () {
//   const buttons = [{ element: this.component1 }, { element: this.component2 }, { element: this.component3 }]
//   const { selectedIndex } = this.state
//   return (
//     <ButtonGroup
//       onPress={this.updateIndex}
//       selectedIndex={selectedIndex}
//       buttons={buttons}
//       containerStyle={{height: 30}} />
//   )
//   }
// }

const Footer = () => (
  <View style={style.link}>
    
    <FilterLink filter="SHOW_ALL">
      <Text> ALL </Text>
    </FilterLink>

    <FilterLink filter="SHOW_ACTIVE">
      <Text>Active </Text>
    </FilterLink>

    <FilterLink filter="SHOW_COMPLETED">
      <Text>completed </Text>
    </FilterLink>
    <SortLink sortcase='ASC'>
      <Text>昇順 </Text>
    </SortLink>
    <SortLink sortcase='DES'>
      <Text> 降順</Text>
    </SortLink>

  </View>
)

const style = StyleSheet.create({
  link: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  }
}) 

export default Footer