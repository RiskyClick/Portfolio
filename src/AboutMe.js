import React from 'react';
import './AboutMe.css';
import wood from './wood.jpg';

class AboutMe extends React.Component{
    render(){
        return(
            <div className="AboutMe">
                <div className="head">
                    <img className="pic" src={wood}/>
                    <p>About</p>
                </div>
                <div className="GenInfo">
                    <h1>What I Do</h1>
                    <p>
                        Fresh off the college circut with a Bachelors in Computer Science. 
                        I feel in love with many aspects of computere science. It trully is a fasinating disapline
                        Its been super fun building this website from stract. 
                        I love banging my head on the desk trying to implemnt a new algorithum only to discover the solution right as a fall asleep.
                        Well maybe not banging my head on the desk but the staticfation of solving a challenging problem is rather noteworthy.
                    </p>
                </div>
                <div className="Location">
                    <h1>Location</h1>
                    <p>I currently reside in San Francisco. Im a bay area native but have also lived in Napa, Sonoma counties. I was also casing bigfoot in Oregon for a little while</p>
                </div>
                <div className="Hobbies">
                    <h1>Intrestes</h1>
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