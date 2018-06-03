import React from 'react';

export class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'New Word',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    

    handleChange(event) {
      this.setState({
        value: event.target.value
      });
      console.log("(handleChange)Upisali ste:" + event.target.value);
      this.props.mijenjajTekst(event.target.value);
      }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log("Unutar handleSubmita:\t" + this.state.value);
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <textfield>
              Upisi rijec:
              <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)}/>

            </textfield>
            <input type="submit" value="Submit" />
          </form>

          <button className="btn btn-primary" onClick = {this.onChangeTekst.bind(this)}> Mijenjaj tekst </button>
        </div>
      );
    }
  }
  
