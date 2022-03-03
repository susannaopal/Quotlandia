import React, { Component } from 'react';
import './App.css';
import Quotes from './Quotes.js';
import { fetchQuotes } from './apiCall.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }

// componentDidMount = () => {
//   fetchQuotes()
//   .then(data => this.setState({quotes: data}))
// }
 
render() {
  return(
    <main className='App'>
        <nav className='nav'>
          <h1 className='title'>Welcome to Quotelandia</h1>
            <div className='nav-btns-container'>
              <button className='left-side-btn'>Quote of the Visit</button>
              <button className='right-side-btn'>Search for Author</button>
            </div>
        </nav> 
        <div className='img-container'>
              <img src="https://img.theculturetrip.com/wp-content/uploads/2017/10/old-books-436498_1280.jpg" alt='book-imagery-background' className='background-img' position='fixed' />
        </div>      
      {/* <Quotes quotes={this.state.quotes} /> */}    
    </main>
  )
}
}


export default App;

// position='fixed'  => end of photo