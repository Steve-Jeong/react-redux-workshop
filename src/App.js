import './App.css';
import React, {Component} from 'react'
import Header from './components/Header'
import NavContainer from './containers/Nav'
import ReadContainer from './containers/Read'
import ControlContainer from './containers/Control'
import CreateContainer from './containers/Create'
import { connect } from 'react-redux';



class App extends Component {
  render() {
    var article=''
    if(this.props.mode === 'WELCOME') {
      article = <ReadContainer></ReadContainer>
    }
    if(this.props.mode === 'READ') {
      article = <ReadContainer></ReadContainer>
    }
    if(this.props.mode === 'CREATE') {
      article = <CreateContainer></CreateContainer>
    }
    if(this.props.mode === 'UPDATE') {
      article = <ReadContainer></ReadContainer>
    }
    if(this.props.mode === 'DELETE') {
      article = <ReadContainer></ReadContainer>
    }

    return (
      <div className="App">
        <Header></Header>      
        <NavContainer></NavContainer>
        <ControlContainer></ControlContainer>
        {article}
      </div>
    );
  }
}

export default connect(
  function(state) {
    return {
      mode:state.mode
    }
  }
)(App);
