import React from "react";
import './Nav.css';
import Link from './Pics/LinkedIn.png';
import About from './Pics/me.png';
import Projects from './Pics/Projects.png';
import Hub from './Pics/GitHub.png';


class Nav extends React.Component{
    constructor(props){
        super(props)
        this.thing = React.createRef;
    }

    about() {
        window.scrollTo({
            top: 1180,
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
                    <li onClick={this.about}><img src = { About }/></li>
                    <li onClick={this.projects}><img src = { Projects }/></li>
                    <a href="https://www.linkedin.com/in/keitherich/"><li><img src = { Link }/></li></a>
                    <a href="https://github.com/RiskyClick"><li><img src = { Hub }/></li></a>
                </ul>      
            </div>
        );
    }
}

export default Nav;