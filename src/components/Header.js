import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class AppHeader extends Component {
  
  render(){
    return (
      <Segment inverted textAlign="center">
        <h1>Legend of Solgard Creature Translations</h1>
      </Segment>
    )
  }
} 

export default AppHeader;