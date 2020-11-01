import React, { Component } from 'react'

export default class Create extends Component {
  render() {
    return (
      <form onSubmit={function(e){
        e.preventDefault()
        var title = e.target.title.value
        var desc = e.target.desc.value
        this.props.onSubmit(title, desc)
      }.bind(this)}>
        <p><input type='text' name='title' placeholder='title'></input></p>
        <p><textarea type='text' name='desc' placeholder='description'></textarea></p>
        <p><input type='submit' value='submit'></input></p>

      </form>
    )
  }
}
