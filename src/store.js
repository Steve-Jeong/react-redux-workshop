import {createStore} from 'redux'

var initState = {
  mode:'WELCOME',
  welcome_content : {
    title : 'Web',
    desc : 'Hello, WEB'
  },
  selected_content_id : 1,
  contents : [
    {id:1, title:'HTML', desc:'HTML is ...'},
    {id:2, title:'CSS', desc:'CSS is ...'},
    {id:3, title:'JavaScript', desc:'JavaScript is ...'}
  ]
}

function reducer(state=initState, action) {
  if(action.type === 'WELCOME') {
    return {...state, mode:'WELCOME'}
  }
  if(action.type === 'READ') {
    return {...state, mode:'READ', selected_content_id:action.id}
  }

  return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())