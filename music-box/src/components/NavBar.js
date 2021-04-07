import React from 'react';
import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.png';
import '../assets/css/reset.css';
import '../assets/css/style.css';

function NavBar() {
    return (
        <nav>
            <div className="container">
                <img className="logo" src={logo} alt="Logo"/>
                <img src={avatar} alt="Avatar" className="avatar"/>
            </div>
        </nav>
    );
}

export default NavBar;