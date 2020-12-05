import React, { Component } from 'react';
import './App.css';
import BoxArray from './BoxArray';
import Box from './Box';
import NameButton from './NameButton';
import Todo from './Todo';

const NUM_COLORS = 36;

class App extends Component {
  
  constructor(props) {
    super(props);
    const colors = randomColorArray(this.props.allColors)
    this.state = {colors, text:''}

    setInterval(()=>{
      const newColors = randomColorArray(this.props.allColors);
      this.setState({colors:newColors})
    }, 2000)
  }
  
  render() {
    return (
      <div>
        <div className="App">
          <BoxArray>
            {randomColorBox(this.state.colors)}
          </BoxArray>
        </div>
          <div className='testFunction'>
            <h2>Testing Functions</h2>
            <NameButton/>
            <input 
              type='text' 
              name='inputText'
              value={this.state.inputText}
              onChange={(e)=> {
                this.setState({
                  inputText: e.target.value,
                  text: e.target.value
                })
              }}
            />
            <h2>{this.state.text}</h2>
            <div className='todoList'>
              <Todo />
            </div>
        </div>
      </div>
    );
  }
}

function randomColorBox(colorArray) {
  const randomColorBoxes = colorArray.map((color, index) => {
    return <Box color={color} key={index}/>
  })
  return randomColorBoxes;
}

function randomColorArray(colors) {
  const randomColorArray = [];
  for(let i=0; i < NUM_COLORS; i++) {
    randomColorArray[i] = colors[Math.floor(Math.random() * colors.length)]
  }
  return randomColorArray;
}

App.defaultProps = {
  allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
              "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
              "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
              "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
              "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
              "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
              "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
              "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
              "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
              "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
              "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
              "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
              "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
              "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
              "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
              "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
              "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
              "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
              "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
              "Yellow","YellowGreen"]
};

export default App;
