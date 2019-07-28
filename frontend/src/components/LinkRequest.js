import React, { Component } from 'react'
import './LinkRequest.css';
import noAvailable from '../img/no_available.jpg';
import { Link } from 'react-router-dom';

export default class LinkRequest extends Component {
  render() {
    let {link,index} = this.props;
    let imgen_path = null;
    if(link.poster_path != null){
        imgen_path="https://image.tmdb.org/t/p/w200/" + this.props.link.poster_path;
    } else {
        imgen_path=noAvailable;
    }
    if (index == 0){
      return (
        <div className="link">
          <div className="content">
            <Link to= {{
              pathname: '/Details',
              state: {
              props: link,
              }
            }}>
            <img className="poster" src={imgen_path}></img>
            </Link>
            <div className="texto">
              <p>{link.title}</p>
              <p>{link.vote_average}/10</p>
              <p>{link.release_date}</p>
            </div> 
            
          </div>
        </div>
      )
    }else{
      return (
        <div className="link">
          <div className="content2">
            <Link to= {{
              pathname: '/Details',
              state: {
              props: link,
              }
            }}>
            <img className="poster" src={imgen_path} />
            </Link>

          </div>
        </div>
      )
    }
    
  }
}
