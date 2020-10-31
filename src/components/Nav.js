import React, { Component } from 'react'

export default class Nav extends Component {
  
  render() {
    var tags = []
    var data = this.props.data
    for(var i=0; i<data.length; i++) {
      tags.push(
        <li key={data[i].id}>
          <a href={data[i].title} onClick={function(id, e){
              e.preventDefault()
              this.props.onClick(id)
            }.bind(this, data[i].id)}>
            {data[i].title}
          </a>
        </li>)
    }
    
    return (
      <nav>
        <ol>
          {tags}
        </ol>
      </nav>
    )
  }
}
