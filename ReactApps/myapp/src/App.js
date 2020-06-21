//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import React, { Component } from 'react';

class App extends Comment {

  async postData () {

    try {
          Let result = await fetch ('https://simply', {
                    method: 'get',
                    mode: 'no-cors',
                    headers: {
                    
                    },
                    body: JSON.stringify({
                      key1: 'myusername',
                      key2: 'pass'
                    })
          });
    }
    function App() {
  return (
    <div className="App">
      
    </div>
  );
  }
  }
}

export default App;


import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default myComponent;