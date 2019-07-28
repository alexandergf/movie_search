import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import noAvailable from '../img/no_available.jpg';
import './Details.css';
import Footer from './Footer';

export default class Details extends Component { 
  constructor(){
    super();
    this.state = {
      links: [], 
      loading: true,
    }
  }

  componentDidMount = (idMovie) => {
    axios.get("https://api.themoviedb.org/3/movie/"+idMovie+"?api_key=3a3e73ac8749d11dc396bb1ea284c397")
      .then(response => {
        this.setState({
          links: response.data, 
          loading: false,
        })
      });
  }
  

  render() {
      let {props} = this.props.location.state;
      this.componentDidMount(props.id);
      let { links } = this.state;
      let imgen_path = null;
      if(links.poster_path != null){
        imgen_path="https://image.tmdb.org/t/p/original/" + links.poster_path;
    } else {
        imgen_path=noAvailable;
    }
    return (
      <div className="details">
        <Header index={1}/>
        <div className="bodykit">
          <div className="left-details">
            <h2>{links.title}</h2>
            <p>{links.overview}</p>
            <p>{links.release_date}</p>
            <p>Popularity: {links.popularity}</p>
            <p>Runtime: {links.runtime} min</p>
            <p>Vote: {links.vote_average}/10</p>
            
          </div>
          <div className="right-details">
            <img className="foto" src={imgen_path} />
          </div>
        </div>
        <div className="abajo">
          <Footer />
        </div>
      </div>
    )
  }
}
