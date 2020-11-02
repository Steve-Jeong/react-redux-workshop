import { connect } from 'react-redux'
import Update from '../components/Update'

export default connect(
  function(state) {
    var id, title, desc;

    for(var i=0; i<state.contents.length; i++) {
      var d = state.contents[i]
      if(d.id === state.selected_content_id) {
        id = d.id
        title = d.title
        desc = d.desc
        break
      }
    }
    
    return {
      id,
      title,
      desc
    }
  },

  function(dispatch) {
    return {
      onSubmit : function(id, title, desc) {
        dispatch({type:'UPDATE_PROCESS', id, title, desc})
      }
    }
  }
)(Update)