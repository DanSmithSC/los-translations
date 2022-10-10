import React from 'react';
import { Popup, Icon, Image, Segment } from 'semantic-ui-react';
import minionImg from '../images/mini-minion.png';

const Footer = () => {
  return (
    <Segment inverted style={{ overflow: 'auto' }}>
      <Popup
        trigger={<Icon circular name="discord" size="large" inverted inline />}
        position="top right"
        content="Denzik#0907"
      />
      <Popup
        trigger={<Image src={minionImg} inline />}
        position="top right"
        content="Thanks Boaty!"
      />
      <Popup
        trigger={
          <Icon
            circular
            name="info circle"
            size="large"
            inverted
            color="black"
            fitted
            inline
          />
        }
        content="Last Updated for the Duskpaw-Farcast Blöt Festival"
        position="top right"
        inverted
      />
    </Segment>
  );
};

export default Footer;
