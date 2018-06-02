import React from 'react';

export class MyComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        isToggleOn: true,
        value: '',
        color1: '',
        color2: ''
      };
  
      this.buttonClicked = this.buttonClicked.bind(this);
      
    }
    buttonClicked(){
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
  
      }));
    }
  
    promjenaRijeci(){
      console.log("Pozvana funkcija promjenaRijeci");
      console.log(this.state.pocetnaRijec);
  //    this.props.promijeni(this.state.pocetnaRijec);
    }
  
    render(){
      
      return(     
        <textfield onClick={this.buttonClicked}>
        {this.state.isToggleOn ? (this.value = 'Crna') : (this.value = 'Random')}
        {console.log(this.value)}
          </textfield>
        
      );
    }
  
  }
