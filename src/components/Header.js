import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class AppHeader extends Component {
  render() {
    return (
      <Segment inverted textAlign="center">
        <div>
          <h1>Legend of Solgard Creature Translations</h1>
        </div>
      </Segment>
    );
  }
}

export default AppHeader;
