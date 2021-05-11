import React from 'react';
import beastsImg from '../images/races/beasts.png'
import crittersImg from '../images/races/critters.png'
import smallfolksImg from '../images/races/small folks.png'
import spiritsImg from '../images/races/spirits.png'
import warriorsImg from '../images/races/warriors.png'
import wightsImg from '../images/races/wights.png'
import wyrmsImg from '../images/races/wyrms.png'
import commonImg from '../images/rarities/common.png'
import rareImg from '../images/rarities/rare.png'
import epicImg from '../images/rarities/epic.png'
import legendaryImg from '../images/rarities/legendary.png'
import mythicalImg from '../images/rarities/mythical.png'
import attackerImg from '../images/roles/attacker.png'
import defenderImg from '../images/roles/defender.png'
import supporterImg from '../images/roles/supporter.png'

const TableIcon = ( {src} ) => {
  
  let iconObj = {
    "beasts": beastsImg,
    "critters": crittersImg,
    "small folks": smallfolksImg,
    "spirits": spiritsImg,
    "warriors": warriorsImg,
    "wights": wightsImg,
    "wyrms": wyrmsImg,
    "common": commonImg,
    "rare": rareImg,
    "epic":epicImg,
    "legendary": legendaryImg,
    "mythical": mythicalImg,
    "attacker": attackerImg,
    "defender": defenderImg,
    "supporter": supporterImg
  }

  return (
    <img src={iconObj[src]} alt={src}/>
  )
}

export default TableIcon;