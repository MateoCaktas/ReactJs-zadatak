import React from 'react';

export class MyComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        isToggleOn: true,
        value: 'Crna',
        color1: '',
        color2: ''
      };
  
      this.buttonClicked = this.buttonClicked.bind(this);
      this.promjenaRijeci = this.promjenaRijeci.bind(this);
      
    }

    promjenaRijeci(){
      console.log("Pozvana funkcija promjenaRijeci");
    }

    buttonClicked(){
      if(this.props.vrijednost !== 'Crna' && this.props.vrijednost !== 'Random'){
        this.setState({
          value: this.props.vrijednost
        })
      }else{
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
      if(this.state.isToggleOn){
        this.setState({
          value: 'Crna'
        })
      }
      else if (!this.state.isToggleOn){
        this.setState({
          value: 'Random'
        })
      }
    }
      console.log("Unutar buttonClicked : state => " + this.state.value);
    }
    
    render(){
      return(
        <textfield onClick={this.buttonClicked}>        
        {this.state.value}
        {this.props.vrijednost}
        {console.log("Value iz app-a:\t " + this.props.vrijednost)}        
        </textfield>
          
      );
    }
  }

