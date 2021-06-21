import '../css/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

class Start {
    constructor () {
        this.initEls()
      this.initApp();
    }

    initEls () {
    }

    initApp () {
        // Start application

        ReactDOM.render(<App />, document.getElementById('app'));
    }
}

new Start();
