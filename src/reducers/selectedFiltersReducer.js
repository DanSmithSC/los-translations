import { 
  SET_SOURCE_LANGUAGE,
  SET_RARITY_FILTERS,
  SET_RACE_FILTERS, 
  SET_ROLE_FILTERS, 
  SET_COLOR_FILTERS 
} from '../actions/types';

const INITIAL_STATE = {
  rarityFilters: [],
  raceFilters: [],
  roleFilters: [],
  colorFilters: []
}

export default ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    
    case SET_SOURCE_LANGUAGE: {
      return { 
        rarityFilters: [],
        raceFilters: [],
        roleFilters: [],
        colorFilters: [] 
      }
    }

    case SET_RARITY_FILTERS: {
      return { ...state, rarityFilters: action.payload }
    }
    
    case SET_RACE_FILTERS: {
      return { ...state, raceFilters: action.payload }
    }

    case SET_ROLE_FILTERS: {
      return { ...state, roleFilters: action.payload }
    }

    case SET_COLOR_FILTERS: {
      return { ...state, colorFilters: action.payload }
    }  
    
    default: 
      return state
  }
}