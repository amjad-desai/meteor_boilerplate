//import libraries

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// React component is a function in react that
// generates some amount of html code in our app

const App = () => {
  return <div>hello </div>;
};
//create component

//render the react component

Meteor.startup(() => {
  //react render call
  ReactDOM.render(<App />, document.querySelector('.container'));
});
// <app /> creates a instance of an a App and put it in an html with class .container
//Metero.startup arrouw head function make sure everything is loaded before
// react code runs.
