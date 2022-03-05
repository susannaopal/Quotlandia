import React, { Component } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import Card from './Card.js';


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      filteredQuotes: [],
      searchError: ''
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const filteredQuotes = this.props.quotes.filter((quote) => {
            if(quote.author) {
            return quote.author.toLowerCase() === this.state.searchTerm.toLowerCase()
            }
    })
    this.setState({ filteredQuotes: filteredQuotes })
    this.clearInputs()
  }


  clearInputs = () => {
    this.setState({
      searchTerm: '' 
    })
  }

  render() {
    const filteredQuoteCards = this.state.filteredQuotes.map((quote, index) => {
    return (
      <Card
        text={quote.text}
        author={quote.author}
        id={index}
        key={index}
      />
    )
  })
    return (
      <>
        <Link to='/'>
          <button className='home-btn'>Return Home</button>
        </Link>
      <div className='search-section'>
        <div className='search-bar'>
          <p className='search-title'>Search below to see if your favorite author is in Quotelandia...
          </p>
       </div>
        <form>
          <input className='search-bar-input'
            type='text'
            placeholder='Search Author By Name'
            value={this.state.searchTerm}
            onChange={this.handleChange}
            />
          <button className='submit-btn' onClick={(event) => this.handleSubmit(event)}>Submit</button>
        </form>
      </div>
        <div className='filtered-quotes-container'>
          <div className='author-quotes-cards'>{filteredQuoteCards}</div>
        </div> 
      </>
    )
  }
}

export default Search;

