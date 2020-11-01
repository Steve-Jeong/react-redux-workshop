import { connect } from 'react-redux'
import Control from '../components/Control'

export default connect(
  null,
  function(dispatch) {
    return {
      onClick : function(mode) {
        dispatch({type:mode})
      }
    }
  }
)(Control)