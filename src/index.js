import React, { Component } from 'react';
import { render } from 'react-dom';
import Dropdown from './dropdownmenu/Dropdown';
import { Container } from 'reactstrap'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


render() {
   return (
     <Container>
       <Dropdown />
     </Container>
    );
  }
}

render(<App />, document.getElementById('root'));