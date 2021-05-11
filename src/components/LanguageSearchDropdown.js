import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const LanguageSearchDropdown = ( {placeholder, options, onChange} ) => {
  
  const languageOptions = options.map( (language, index) => {
    return({
      key: index,
      text: language,
      value: language
    })
  })
  
  if(!options){
    return "Loading..."
  }
  return (
    <Dropdown
      placeholder={placeholder}
      search
      selection
      options={languageOptions}
      value={languageOptions.selectedValues}
      onChange={(e,{value})=> onChange(value)}
    />
  )
  

}

export default LanguageSearchDropdown;