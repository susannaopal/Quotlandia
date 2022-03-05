import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchQuotes } from '../API/apiCall.js';
import '../CSS/App.css';
import Quotes from './Quotes.js';
import Nav from '.Nav.js';
import Search from './Search.js';
import Home from './Home.js';
import Footer from './Footer.js';
// import Error from './Error.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      // error: ''
    };
  }

componentDidMount = () => {
  fetchQuotes()
  .then(data => this.setState({quotes: data}))
// .catch(error => this.setState({error: error}))
}


render() {
  return(
    <main className='App'>
        <Nav />
        <Routes> 
          <Route path='/' element={<Home />}/>
          <Route path='/quotes' element={<Quotes quotes={this.state.quotes} />}/>
          <Route path='/search' element={<Search quotes={this.state.quotes} />}/>
        </Routes>
        <Footer />
    </main>
  )
  }
};

export default App;

