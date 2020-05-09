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
                        Check it out. Build using a React app and Node.js.
                        This is the first website i have built. Ill continue to add 
                        to the website as i learn more about web development.
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/CocktailRecommendation"><img src = { hub } /></a>Cocktail Recommender</h2>
                    <p>
                        A java application that returns a cocktail recomendation 
                        from a user provided flavor profile. For example, if you 
                        weere to input "Booze forward with rye not sweet" you would get 
                        a old fastion or manhhatted. The algoryum useses a passed in hashmap
                        that tokenizes the user input string and compares a bla bla bla
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/Games"><img src = { hub } /></a>Arcade</h2>
                    <p>
                        A java program containing my verstions of classsic games like astroids, glactice mail
                        and others. I will periodicly program more and more game to add to the program allowing
                        users of the prgram many choices.
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/PointOfSale"><img src = { hub } /></a>Point Of Sale</h2>
                    <p>
                        A retooled verstion of a point of sale machine commonly found in a resturant our bar
                        there is a high level of cusamizabilyty but without so much that it interfears with
                        the ablity to input what you need fast.
                    </p>
                </div>
                <div className="Projects">
                    <h2><a href="https://github.com/RiskyClick/SFSU-Projects"><img src = { hub } /></a>SFSU Projects</h2>
                    <p>
                        All the assigmenest i did at SFSU ranging from a terminal witten in C 
                        to a multiplayer game built useing Untiy collaborating with a team of 8 individuals.
                    </p>
                </div>                
            </div>
        );
    }
}

export default WhatIDo;