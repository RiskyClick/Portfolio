import React from 'react';
import './WhatIDo.css';

class WhatIDo extends React.Component{
    render(){
        return(
            <div className="WhatIDo">
                <div className='head'>
                    <h1>Projects</h1>
                </div>
                

                <div class="Projects">
                    <h2>Column 1</h2>
                    <p>Some text..</p>
                </div>
                <div class="Projects">
                    <h2>Column 2</h2>
                    <p>Some text..</p>
                </div>
                
            </div>
        );
    }
}

export default WhatIDo;