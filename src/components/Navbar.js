 
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component{
  render(){
    return (
        <nav className="navBar">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/about/">About</NavLink></li>
                <li><NavLink exact to="/Contact/">Contact</NavLink></li>
            </ul>
        </nav>
     );
   }
}
export default Navbar;
