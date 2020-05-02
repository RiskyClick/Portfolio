import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    render(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        return(
            <div className='Contact'>
                <button className="UpButt" onClick="scroll(0, 0);">Up</button>
            </div>
        );
    }
}

export default Contact;