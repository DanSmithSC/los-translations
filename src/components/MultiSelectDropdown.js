import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const MultiSelectDropdown = ( {placeholder, options, onChange, values, sourceLanguage} ) => {

  const dropdownOptions = Object.entries(options).map( (option, index) => {

    return({
      key: option[0],
      text: option[1].[sourceLanguage.toLowerCase()],
      value: option[1].[sourceLanguage.toLowerCase()]
    })
  })
  
  if(!options){
    return "Loading..."
  }

  return (
    <Dropdown 
      placeholder={placeholder}
      fluid
      multiple
      selection
      clearable
      options={dropdownOptions}
      value={ dropdownOptions.selectedValues || values}
      onChange={(e, data) => {
        const { value } = data
        onChange(value)
      }}
    />
  )
}

export default MultiSelectDropdown;