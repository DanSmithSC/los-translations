import React from 'react';
import { Popup, Icon, Image } from 'semantic-ui-react';
import minionImg from '../images/mini-minion.png'

const Footer = () => {
  return (
    <div className="footer">
      
      <Popup
        trigger={<Icon circular name='discord' size='large' inverted inline />}
        position="top right" 
        content="Denzik#0907"
      />
      <Popup
        trigger={<Image src={minionImg} inline/>}
        position="top right"
        content="Thanks Boaty!"
      />
      <Popup
          trigger={<Icon circular name='info circle' size='large' inverted color="black" fitted inline />}
          content='Last Updated for the Heimdall & Norns - Old Friends Blöt Festival'
          position="top right"
          inverted
        />
    </div>
  )
}

export default Footer;