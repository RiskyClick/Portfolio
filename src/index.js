import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AboutMe from './AboutMe';
import WhatIDo from './WhatIDo';
import Contact from './Contact';
import Nav from './Nav';

ReactDOM.render(<React.StrictMode>
      <Nav />
      <App />
      <AboutMe />
      <WhatIDo />
      <Contact />
  </React.StrictMode>, document.getElementById('root')
);

