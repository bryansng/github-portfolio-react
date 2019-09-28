import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import 'tachyons';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="font-opensans">
        <LandingPage />
      </div>
    )
  }
}