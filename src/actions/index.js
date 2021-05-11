import { 
  SET_SOURCE_LANGUAGE,
  SET_TARGET_LANGUAGE,
  SET_RARITY_FILTERS,
  SET_RACE_FILTERS, 
  SET_ROLE_FILTERS, 
  SET_COLOR_FILTERS 
} from './types';

export  const selectSourceLanguage = ( value ) => {
  return {
    type: SET_SOURCE_LANGUAGE,
    payload: value
  }
}

export const selectTargetLanguage = ( value ) => {
  return {
    type: SET_TARGET_LANGUAGE,
    payload: value
  }
}

export const selectRarityFilter = ( filter ) => {
  return {
    type: SET_RARITY_FILTERS,
    payload: filter
  }
}

export const selectRaceFilter = ( filter ) => {
  return {
    type: SET_RACE_FILTERS,
    payload: filter
  }
}

export const selectRoleFilter = ( filter ) => {
  return {
    type: SET_ROLE_FILTERS,
    payload: filter
  }
}

export const selectColorFilter = ( filter ) => {
  return {
    type: SET_COLOR_FILTERS,
    payload: filter
  }
}