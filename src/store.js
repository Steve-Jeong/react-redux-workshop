import {createStore} from 'redux'

var initState = {
  mode:'WELCOME',
  max_id : 3,
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
  if(action.type === 'CREATE') {
    return {...state, mode:'CREATE'}
  }
  if(action.type === 'CREATE_PROCESS') {
    var id, title, desc;
    id = state.max_id+1
    title = action.title
    desc = action.desc
    var newContents = [...state.contents, {id:id, title:title, desc:desc}]
    return {
      ...state, 
      mode:'READ',
      contents:newContents,
      selected_content_id:id,
      max_id:id
    }
  }
  if(action.type === 'UPDATE') {
    return {...state, mode:'UPDATE'}
  }
  if(action.type === 'DELETE') {
    return {...state, mode:'DELETE'}
  }

  return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())