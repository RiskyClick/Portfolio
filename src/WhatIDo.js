import React from 'react';
import pro from './Pics/Projects.png';
import hub from './Pics/GitHub.png';
import './WhatIDo.css';

class WhatIDo extends React.Component{
    render(){
        return(
            <div className="WhatIDo">
                <div class='head'>
                    <h1><img src = { pro } />Projects</h1>
                </div>
                

                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/Portfolio"><img src = { hub } /></a>This Website</h2>
                    <p>
                        Check it out. You can click on buttons and stuff. This is the first website I have build and I 
                        did so using React.js, Node, HTML, CSS, and Javascript. 
                        I'm delving into the riveting and exciting world of databases and backend engineering right now. 
                        Keep an eye on my GitHub to see where my progress is at.
                        I will continue to make changes to the website as I learn more.
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/CocktailRecommendation"><img src = { hub } /></a>Cocktail Recommender</h2>
                    <p>
                        A program I built using Java that returns a recommended cocktail from the user-provided flavor profile. 
                        I made all the algorithms myself and built a simple GUI using java swing and AWT libraries.
                        It works pretty great right now but there is definitely some need for improvement. 
                        Future endeavors are to make a robot bartender where I can put this program in and put myself out of a job.
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/Games"><img src = { hub } /></a>Arcade</h2>
                    <p>
                    Another Java application that allows users to choose from some classic arcade games I have created. 
                    So far I have astroids, Glactice mail, and space invaders with a huge surplus of artistic liberties.
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/PointOfSale"><img src = { hub } /></a>Point Of Sale</h2>
                    <p>
                        A retooled point of sale program that you often see being used in restaurants and bars. 
                        Done using Java but since I am not enjoying the layout so far I might swap this over to a python app because of the huge array of modules.
                        A major problem with the current models is the internet is dependent on it. So if a restaurant's internet cuts out 
                        it can cause issues with everyone involved. My hope is to have this POS machine not be depended on internet connection and 
                        still work at communicating with the other devices in the resultant
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/SFSU-Projects"><img src = { hub } /></a>SFSU Projects</h2>
                    <p>
                        The majority of the projects and assignments I had while at SFSU. 
                        The assignments are everything from making your own terminal in C to a multiplayer video game built using Unity3d.
                    </p>
                </div>                
            </div>
        );
    }
}

export default WhatIDo;