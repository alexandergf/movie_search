import React, { Component } from 'react'
import LinkRequest from './LinkRequest';
import axios from 'axios';
import Header from './Header';
import './ListLinkRequest.css';
import Footer from './Footer';
export default class ListLinkRequest extends Component {
  
  constructor(){
    super();
    this.state = {
      links: [], 
      loading: true,
      busqueda:'',
    }
    this.handleBusqueda = this.handleBusqueda.bind(this);
  }

  

  componentDidMount = () => {
    axios.get("https://api.themoviedb.org/3/search/movie?api_key=3a3e73ac8749d11dc396bb1ea284c397&query="+ this.state.busqueda.replace(/ /g,"+"))
      .then(response => {
        this.setState({
          links: response.data, 
          loading: false,
        })
      });
  }

handleBusqueda = (busqValue) => {
  this.setState({busqueda: busqValue});
  this.componentDidMount();
}

  render() {
    let { links } = this.state;
    if (links.results != null){
      if(this.state.loading){
        return <p>Loading...</p>
      }
      return (
        <div className="heder">     
          <Header onSelectText={this.handleBusqueda}/>
          <div className="resultados">
            {links.results.map((link, index) =>
              <LinkRequest key={link.id}
              index={0}
              link={link}/>
            )}
          </div>
        </div>
      )
    
    }else{
      return (
        <div className="heder-pre">     
          <Header onSelectText={this.handleBusqueda}/>     
          <div className="resultados-pre">
            <div className="left-LLR">
              <h1>YA ESTA AQUI MR.ROBOT!!</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit,sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euismod 
                tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim.
              </p>
              
            </div>
          </div>  
          <Footer />
        </div>
      )
    }
    
  }
}
