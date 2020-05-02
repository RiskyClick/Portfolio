import React from 'react';
import './WhatIDo.css';

class WhatIDo extends React.Component{
    render(){
        return(
            <div className="WhatIDo">
                <div className='left'>
                    <h1>Cocktail Recomendation App</h1>
                </div>
                <div className='right'>
                    <h1>A cocktail recomnedation appp  that takes in a user spefified flavor profile then returns a cocktail closest to the flavor profile</h1>
                </div>
                <div className='left'>
                    <h1>Point of Sale Machine</h1>
                </div>
                <div className='right'>
                <h1>A revanmped point of sale machine that you would find in any resurtant or bar.</h1>
                </div>
                <div className='left'>
                    <h1>Classic Arcade</h1>
                </div>
                <div className='right'>
                    <h1>like that of a game ginie this hold 3 classic viedoe games that the user can select to play with my own tweeks</h1>
                </div>
            </div>
        );
    }
}

export default WhatIDo;