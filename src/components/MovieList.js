
import MovieCard from './MovieCard';
import './moviecard.css';


import React, { Component } from 'react'

export default class MovieList extends Component {
  render() {
    return (
          <div class="movielist">
        {this.props.list.map(el=> <MovieCard Movies={el}/>)
        }
      </div>
    )
  }
}

