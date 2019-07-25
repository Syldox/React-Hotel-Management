import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';  
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    state = {
        isOpen : false
    }

    handleToggole = () =>{
        this.setState ({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Book Your Stay"/>
                    </Link>
                    <button type= "button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Our Standards</Link>
                    </li>
                    <li>
                        <Link to="/">Travel</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
} 
