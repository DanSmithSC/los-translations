import React from 'react';
import { connect } from 'react-redux';
import LanguageSearchDropdown from './LanguageSearchDropdown';
import { selectSourceLanguage, selectTargetLanguage } from '../actions'

class LanguageSelect extends React.Component {

  render(){

    return(
      <div >
        <LanguageSearchDropdown
          placeholder="Select Your Language"
          options={this.props.languages}
          onChange={ this.props.selectSourceLanguage }
        />
        <LanguageSearchDropdown 
          placeholder="Select Target Language"
          options={ this.props.languages }
          onChange={ this.props.selectTargetLanguage }
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    languages: state.languages,
    sourceLanguage: state.selectedLanguages.sourceLanguage,
    targetLanguage: state.selectedLanguages.targetLanguage
  };
}

export default connect(mapStateToProps, {
  selectSourceLanguage,
  selectTargetLanguage
})(LanguageSelect);