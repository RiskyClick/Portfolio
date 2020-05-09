import React from 'react';
import './AboutMe.css';
import About from './Pics/me.png';

class AboutMe extends React.Component{
    render(){
        return(
            <div className="AboutMe">
                <div className="head">
                    <h1>About Me</h1>
                    <img src = { About }/>
                </div>
                <div className="GenInfo">
                    <h2>Changing Up the Career</h2>
                    <p>
                        Fresh off the college circut. Doing the carrer change dance out of bartending and into tech.
                        I just Granduated from San Francisco State Univerity, Home of the purple aligators for some reason.
                        Actually, they were named after the Golden Gate Bridge and AKA the 'Gaters' and sombody got cheeky with it.
                        But i Digress.
                    </p>
                </div>
                <div className="Location">
                    <h2>Bay Area Resident</h2>
                    <p>
                        Been living in San Francisco proper for about 5 years now but am originally fromn the north bay.
                        Thats right, im a Califonia native and yeah, I probly will eat your avacados.
                        And no, I wont cut my hair... im acutally bald so.
                    </p>
                </div>
                <div className="Hobbies">
                    <h2>Intrestes</h2>
                    <p>
                        I dont care about your sport team but i will talk about stand up comedy all day. 
                        I love to cook and mix up cocktails. I am definity a hippy at hart and love to go camping. 
                        Unlike most of the introverted, quite, wirdos of the computer sciecne world i can hold a converstation.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;