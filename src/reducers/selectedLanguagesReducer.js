import { 
  SET_SOURCE_LANGUAGE,
  SET_TARGET_LANGUAGE
} from '../actions/types';

const INITIAL_STATE = {
  sourceLanguage: "english",
  targetLanguage: null
}

export default ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    
    case SET_SOURCE_LANGUAGE: {
      return { ...state, sourceLanguage: action.payload }
    }
    
    case SET_TARGET_LANGUAGE: {
      return { ...state, targetLanguage: action.payload }
    }
    
    default: 
      return state
  }
}