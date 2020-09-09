import { connect } from 'react-redux'
import { sortTodo } from '../actions/index'
import Sort from '../components/Sort'

const mapStateToProps = (state, ownProps) => {
    return {
      active: ownProps.sortcase === state.sort
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // console.log(dispatch(sortTodo(ownProps.sortcase)))
      dispatch(sortTodo(ownProps.sortcase))
    }
  }
}

const SortLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort)

export default SortLink