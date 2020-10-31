import './App.css';
import React, {Component} from 'react'
import Header from './components/Header'
import NavContainer from './containers/Nav'
import ArticleContainer from './containers/Article'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>      
        <NavContainer></NavContainer>
        <ArticleContainer></ArticleContainer>
      </div>
    );
  }
}

export default App;
