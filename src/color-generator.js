import React from 'react';
import Box from './box';
import './color-generator.css'

export default class ColorGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: 'rgb(0,0,0)'
    }
  }

  randomColorGenerator() {
    const r = Math.floor(Math.random()*256);         
    const g = Math.floor(Math.random()*256);         
    const b = Math.floor(Math.random()*256);         
    const uniqueColor = 'rgb(' + r + ',' + g + ',' + b + ')'; 
    return uniqueColor;
  }

  handleButtonClick() {
    this.setState({
      color: this.randomColorGenerator()
    })
  }

  render() {
    return(
      <div className="color-generator"
      >
        <h1>Random Color Generator</h1>
        <Box color={this.randomColorGenerator()}/>
        <Box color={this.randomColorGenerator()}/>
        <button onClick={ e => this.handleButtonClick(e)} > 
          Change BoxColor 
        </button>
      </div>
     
    )
  }
}