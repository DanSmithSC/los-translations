import { combineReducers } from 'redux';
import selectedLanguagesReducer from './selectedLanguagesReducer';
import selectedFiltersReducer from './selectedFiltersReducer';
import rarityTranslations from '../data/raritytranslations';
import raceTranslations from '../data/racetranslations';
import roleTranslations from '../data/roletranslations';
import colorTranslations from '../data/colortranslations';

const languageOptionsReducer = () => {
  return ['English','German','Spanish','Czech','Spanish_Mexico','French','Indonesian','Italian','Japanese','Korean','Norwegian','Polish','Portuguese_Brazil','Russian','Swedish','Thai','Turkish','Chinese',
'Chinese_Simplified'];
}

const rarityOptionsReducer = () => {
  const rarities = Object.keys(rarityTranslations)
  return rarities;
}

const raceOptionsReduceer = () => {
  const races = Object.keys(raceTranslations)
  return races;
}

const roleOptionsReducer = () => {
  const roles = Object.keys(roleTranslations)
  return roles;
}

const colorOptionsReducer = () => {
  const colors = Object.keys(colorTranslations)
  return colors;
}

export default combineReducers({
  languages: languageOptionsReducer,
  rarities: rarityOptionsReducer,
  races: raceOptionsReduceer,
  roles: roleOptionsReducer,
  colors: colorOptionsReducer,
  selectedLanguages: selectedLanguagesReducer,
  selectedFilters: selectedFiltersReducer
})
