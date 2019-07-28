import React, { Component } from 'react'
import './Header.css';
import logopng from '../img/logopng.png';
import user from '../img/user.png';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(){
        super();
        this.state = {
          busqueda:'',
        }
        this.textChange = this.textChange.bind(this);
      }
    textChange = (event) =>{
        this.setState({
          busqueda: event.target.value,
        }); 
        this.props.onSelectText(this.state.busqueda);
      }
  
      
  render() {
    let {index} = this.props;
    if(index == 1){
      return (
        <div className="header">
          <div className="left">
          <Link to="/">
              <img className="logo" src={logopng}  />
              </Link>
          </div>
          <div className="center">
              
          </div>
          <div className="right">
              <img className="userIcon" src={user} />
          </div>
        </div>
      )
    }else{
    return (
      <div className="header">
        <div className="left">
        <Link to="/">
            <img className="logo" src={logopng}  />
            </Link>
        </div>
        <div className="center">
            <input type="text" className="box" value={this.state.busqueda} onChange={this.textChange}/>
        </div>
        <div className="right">
            <img className="userIcon" src={user} />
        </div>
      </div>
    )}
  }
}
