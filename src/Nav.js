import React from "react";
import './Nav.css';

class Nav extends React.Component{
    render() {
        return (
            <div className='NavBar'>
                <ul>
                    <li>Landing Page</li>
                    <li>About Me</li>
                    <li>Projects</li>
                    <li>Contacts</li>
                </ul>      
            </div>
        );
    }
}

export default Nav;