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
  if(action.type === 'UPDATE_PROCESS') {
    id = action.id
    title = action.title
    desc = action.desc
    newContents = [...state.contents]
    for(var i=0; i<newContents.length; i++) {
      var d = newContents[i]
      if(d.id === id) {
        newContents[i].title = title
        newContents[i].desc = desc
        break
      }
    }
    return {
      ...state, 
      mode:'READ',
      contents:newContents,
      selected_content_id:id
    }
  }
  if(action.type === 'DELETE_PROCESS') {
    if(!window.confirm('Really delete?')) {return state}
    newContents = state.contents.filter(function(li){
      if(state.selected_content_id === li.id) return false
      else return true
    })
    
    return {
      ...state, 
      mode:'WELCOME',
      contents:newContents
    }
  }

  return state
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())