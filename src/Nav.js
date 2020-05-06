import React from "react";
import './Nav.css';

class Nav extends React.Component{
    constructor(props){
        super(props)
        this.thing = React.createRef;
    }

    about() {
        window.scrollTo({
            top: 1135,
            left: 0,
            behavior: 'smooth'
          });
    }

    projects(){
        window.scrollTo({
            top: 5000,
            left: 0,
            behavior: 'smooth'
          });
    }


    render() {
        return (
            <div className='NavBar'>
                <ul>
                    <li><button className='about' onClick={this.about}>About Me</button></li>
                    <li><button className='projects' onClick={this.projects}>Projects</button></li>
                    <li><a href="https://www.linkedin.com/in/keitherich/">linkedin</a></li>
                    <li><a href="https://github.com/RiskyClick">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/keitherich/">linkedin</a></li>
                </ul>      
            </div>
        );
    }
}

export default Nav;