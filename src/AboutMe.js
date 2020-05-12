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
                        Fresh off the college circuit. Doing the career change dance out of bartending and into the tech.domain.
                        I just graduated from San Francisco State Univerity, Home of the purple alligators for some reason.
                        Take your time and have a look at my website. I'm super excited to have this website up and running.
                        I'm going to continue to change up the website as a learn more about web development so be sure to come back and visit.
                        If you need to get ahold me my contact information is at the top of the page in the Navigation bar.
                    </p>
                </div>
                <div className="Location">
                    <h2>Bay Area Resident</h2>
                    <p>
                        I am originally from the North Bay, Sonoma County area. I have been living in San Francisco proper for almost five years. 
                        Shout out to the Inner Richmond. I have always wanted to live, work, and be apart of Silicon Valley and all it has to offer. 
                    </p>
                </div>
                <div className="Hobbies">
                    <h2>What I Like</h2>
                    <p>
                        I am a beard-o that loves the outdoors and camping. I love stand-up comedy and social documentaries. 
                        I am passionate about cooking but would rather eat. I enjoy mixing cocktails and hanging out with my cat Wednesday. 
                        She tolerates me enough to allow four chin scritches a day. I'm hoping to get up to five by the end of the year but her demeanour says otherwise. I'll let you tell me about your favourite sports teams if you let me tell you about my favourite indoor plants. 
                        Spelling, grammar and I are in a hate triangle. Ten points to Gryffindor if you catch 
                        a spelling error on my page.
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;