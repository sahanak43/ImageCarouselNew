// import './App.css';
import './reset.scss';
import React, { Component } from 'react';
import Carousel from './Component/Carousel';

export default class App extends Component {
  render() {
    return (
      <div className='maindetail'>
        <h1>Image Carousel</h1>
        <Carousel/>
      </div>
    );
  }
}


