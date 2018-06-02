import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*mijenjanjeRijeci() {
      this.props.promijeni(this.state.value);  // this.state.pocetnaRijec
    }*/
  
    onChangeTekst() {
      this.props.mijenjajTekst(this.state.value);
    }
    handleChange(event) {
      this.setState({
        value: event.target.value
      });
    
      console.log("(handleChange)Upisali ste:"+event.target.value);
      //this.mijenjanjeRijeci(event.target.value);  //this .mijenjanje
      
      }
  
      //OVO !!!!!!!!!!!!!!!!!!!!!!!!!
      
    handleSubmit(event) {
      //alert('Upisali ste rijec: ' + this.state.value);
      event.preventDefault();
      console.log("Unutar handleSubmita" + this.state.value);
  
     
      //OVO!
      //this.props.prominiBotun(this.state.value);
     // this.mijenjanjeRijeci.bind(this);
      
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <textfield>
            Upisi rijec:
            <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)}/>
            
          </textfield>
          <input type="submit" value="Submit" />
        </form>
        
      );
    }
  }
  