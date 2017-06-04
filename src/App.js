import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import { Form, FormControl, Button } from 'react-bootstrap';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 26, 2017',
      newDeadline: ''
    }
  }

  newDeadline(){
    this.setState( { deadline: this.state.newDeadline } )
  }



  render(){
    return(
        <div className="App">

          <div className="App-title"> CountDown to {this.state.deadline} </div>
          <Clock
            deadline={this.state.deadline}
           />

          <Form inline>
            <FormControl
              className='Deadline-input'
              placeholder="Please Enter a Date"
              onChange = { event => this.setState( {newDeadline: event.target.value} )}
            />
            <Button onClick={ () => this.newDeadline() }> Submit </Button>
          </Form>

        </div>
        )
      }
    }


export default App;




/*
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;

*/
