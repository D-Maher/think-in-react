// ES6 modules
// same as const React = require('react'), here we are including all of React
import React from 'react';
// only include render from 'react-dom' since its the only thing that we need from ReactDOM
import { render } from 'react-dom';
// import other components from js/ directory here:

const App = () => 
  <div className="app"/>;


render(<App />, document.getElementById('app'));
