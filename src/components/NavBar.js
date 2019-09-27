import React, { Component } from 'react'
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


export default class NavBar extends Component {
    render() {
        return (
            <>
            <div className="container">
              <div className="navbar">
                <nav className="teal">
                  <div className="container">
                        <div className="nav-wrapper">
                         <a href="/" className="brand-logo">Managing Campaign</a> 
                     </div>
                    </div>
                </nav>   
         </div>
         </div>
        </>
        )
    }
}