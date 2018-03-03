//IMPORT LIBRARIES
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* React component is a function in react that generates some amount of html code in our app */

const App = () => {
  return <div>This is a Meteor Boilerplate </div>;
};

//CREATE COMPONENT

//RENDER COMPONENT

/*react render call */
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
