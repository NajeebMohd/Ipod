import React from 'react';
import ZingTouch from 'zingtouch';
import Display from './display';
import Button from './buttons';

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      list : []
    }
  }
  
  checks = () => {
    
    console.log('its clicked')
    var zt = new ZingTouch.Region(document.body);
    var elements = document.getElementsByClassName('wheel-divs');

    for(var element of elements){      
      zt.bind(element,'rotate',function(e){
        
        console.log('wheel');
      },false);
      
    }
  }
  render(){
    return (
    
      <div className="App">
        <div id = "container">           
          < Display

          />
          < Button />
        </div>
              
      </div>
      
    );
  }
}
export default App;

// {<script src="https://kit.fontawesome.com/7462a30f40.js" crossorigin="anonymous"></script>} 