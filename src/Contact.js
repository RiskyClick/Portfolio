import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef;
    }

    componentDidMount() {
        window.scroll({
            top: 100,
            left: 100,
            behavior: 'smooth'
          });
    }

    render(){
        return(
            <div className='Contact'>
                <button className="UpButt" onClick={this.componentDidMount}>Up</button>
            </div>
        );
    }
}

export default Contact;