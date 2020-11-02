import React, { Component } from 'react'

export default class Update extends Component {
  state = {
    id : this.props.id,
    title : this.props.title,
    desc : this.props.desc
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <form onSubmit={function(e){
        e.preventDefault()
        var id = this.props.id
        var title = this.state.title
        var desc = this.state.desc
        this.props.onSubmit(id, title, desc)
      }.bind(this)}>
        <p><input type='hidden' name='id' value={this.state.id}></input></p>
        <p><input type='text' name='title' placeholder='title' value={this.state.title} onChange={this.onChangeHandler.bind(this)}></input></p>
        <p><textarea type='text' name='desc' placeholder='description' value={this.state.desc}  onChange={function(e){
          this.setState({
            [e.target.name]:e.target.value
          })
        }.bind(this)}></textarea></p>
        <p><input type='submit' value='submit'></input></p>

      </form>
    )
  }
}
