import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="#home" className="navbar-link active">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#problems" className="navbar-link">Problems</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#agenda" className="navbar-link">Agenda</a>
                    </li>
                    <li className="navbar-item">
                        <a href="#speakers" className="navbar-link">Speakers</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
