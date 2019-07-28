import React, { Component } from 'react'
import './Footer.css';
import axios from 'axios';
import noAvailable from '../img/no_available.jpg';
import LinkRequest from './LinkRequest';

export default class Footer extends Component {
    constructor(){
        super();
        this.state = {
          links: [], 
          loading: true,
        }
        this.data = {
            imgen_path: null,
        }
      }
    
      componentDidMount = () => {
        axios.get("https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2019&&api_key=3a3e73ac8749d11dc396bb1ea284c397")
          .then(response => {
            this.setState({
              links: response.data, 
              loading: false,
            })
          });
      }
      miraFoto = (poster) =>{
        if (poster !=null ){
          this.setData({
            imgen_path: "https://image.tmdb.org/t/p/w200/" + poster,
          }); 
        } else{
            this.setData({
                imgen_path:noAvailable,
            });
        }
      }
  render() {
    let { links } = this.state;
    if(this.state.loading){
        return <p>Loading...</p>
      }
    return (
      <div className="footer">
        <div className="resultados2">
            <div className="titulo">
                <h1>LO ÚLTIMO</h1>
            </div>
            <div className="datos">
                <LinkRequest key={links.results[0].id}
                index={1}
                link={links.results[0]} />
                <LinkRequest key={links.results[1].id}
                index={1}
                link={links.results[1]} />
                <LinkRequest key={links.results[2].id}
                index={1}
                link={links.results[2]} />
                <LinkRequest key={links.results[3].id}
                index={1}
                link={links.results[3]} />
                <LinkRequest key={links.results[4].id}
                index={1}
                link={links.results[4]} />
                
            </div>
        </div>
      </div>
    )
  }
}
