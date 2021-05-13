import '../styles/TranslationTable.css'
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { Table, Icon, Popup } from 'semantic-ui-react';
import LanguageSearchDropdown from './LanguageSearchDropdown';
import MultiSelectDropdown from './MultiSelectDropdown';
import TableIcon from './TableIcon';
import { 
  selectSourceLanguage,
  selectTargetLanguage,
  selectRarityFilter,
  selectRaceFilter,
  selectRoleFilter,
  selectColorFilter
} from '../actions';

import creatureTranslations from '../data/translations.json'
import raceTranslations from '../data/racetranslations.json'
import rarityTranslations from '../data/raritytranslations.json'
import roleTranslations from '../data/roletranslations.json'
import colorTranslations from '../data/colortranslations.json'

class TranslationsTable extends React.Component { 

  filterUnitsForDisplay(){
    let baseRarityFilters = _.map(this.props.currentFilters.rarityFilters, filter => {
      return _.findKey( _.pickBy( rarityTranslations, rarity => _.includes(rarity, filter)))
    });

    let baseRaceFilters = _.map(this.props.currentFilters.raceFilters, filter => {
      return _.findKey( _.pickBy( raceTranslations, race => _.includes(race, filter)))
    });

    let baseRoleFilters = _.map(this.props.currentFilters.roleFilters, filter => {
      return _.findKey( _.pickBy( roleTranslations, role => _.includes(role, filter)))
    });

    let baseColorFilters = _.map(this.props.currentFilters.colorFilters, filter => {
      return _.findKey( _.pickBy( colorTranslations, color => _.includes(color, filter)))
    });

    // console.log(baseRarityFilters);
    // console.log(baseRaceFilters);
    // console.log(baseRoleFilters);
    // console.log(baseColorFilters);

    let baseFilters = [];
    let filteredUnits = [];
    const sortRarityPriority = ["mythical","legendary","epic","rare","common"];
    const sortColorPriority = ["red","yellow","green","purple"]

    if(baseRarityFilters.length > 0){
      baseFilters.push(
        ({rarity}) => baseRarityFilters.includes( rarity.toLowerCase() )
      );
    }

    if(baseRaceFilters.length > 0){
      baseFilters.push(
        ({race}) => baseRaceFilters.includes( race.toLowerCase() )
      );
    }
    if(baseRoleFilters.length > 0){
      baseFilters.push(
        ({role}) => baseRoleFilters.includes( role.toLowerCase() )
      );
    }
    if(baseColorFilters.length > 0){
      baseFilters.push(
        ({color}) => baseColorFilters.includes( color.toLowerCase() )    
      );
    }

    if(!baseFilters.length){
      return filteredUnits = creatureTranslations.sort( (a,b)=> {
        if(sortRarityPriority.indexOf( a.rarity.toLowerCase() ) > sortRarityPriority.indexOf( b.rarity.toLowerCase() )) return 1;
        if(sortRarityPriority.indexOf( a.rarity.toLowerCase() ) < sortRarityPriority.indexOf( b.rarity.toLowerCase() )) return -1;

        if(sortColorPriority.indexOf( a.color.toLowerCase() ) > sortColorPriority.indexOf( b.color.toLowerCase() )) return 1;
        if(sortColorPriority.indexOf( a.color.toLowerCase() ) < sortColorPriority.indexOf( b.color.toLowerCase() )) return -1;
      });
    } else {
      return filteredUnits = baseFilters.reduce( (results, filter) => {
        // console.log(results)
        // console.log(filter)
        // console.log( _.filter(results, filter))
        return _.filter(results, filter)

      }, creatureTranslations).sort( (a,b)=> {
        if(sortRarityPriority.indexOf( a.rarity.toLowerCase() ) > sortRarityPriority.indexOf( b.rarity.toLowerCase() )) return 1;
        if(sortRarityPriority.indexOf( a.rarity.toLowerCase() ) < sortRarityPriority.indexOf( b.rarity.toLowerCase() )) return -1;

        if(sortColorPriority.indexOf( a.color.toLowerCase() ) > sortColorPriority.indexOf( b.color.toLowerCase() )) return 1;
        if(sortColorPriority.indexOf( a.color.toLowerCase() ) < sortColorPriority.indexOf( b.color.toLowerCase() )) return -1;
      });
    }
    
  } 

  buildTableHeader(){

    if(this.props.sourceLanguage){

      return (
        
        <Table.Row >
          <Table.HeaderCell>

            <LanguageSearchDropdown
              placeholder="Select Your Language"
              options={this.props.languages}
              onChange={ this.props.selectSourceLanguage }
            />
            <span>
               <Popup
                trigger={<Icon circular name='exclamation circle' size='large' inverted color="black" fitted />}
                content='Please Select Your Language'
                position="top center"
                inverted
              
              />
            </span>
          </Table.HeaderCell>
            
          <Table.HeaderCell>
            <LanguageSearchDropdown
              placeholder="Select Target Language"
              options={this.props.languages}
              onChange={ this.props.selectTargetLanguage }
            />
          </Table.HeaderCell>
          
          <Table.HeaderCell>
            <MultiSelectDropdown 
              placeholder="Rarity" 
              options={rarityTranslations}
              onChange={ this.props.selectRarityFilter }
              sourceLanguage={this.props.sourceLanguage}
              values={this.props.currentFilters.rarityFilters }
            />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <MultiSelectDropdown 
              placeholder="Race" 
              options={raceTranslations}
              onChange={ this.props.selectRaceFilter }
              sourceLanguage={this.props.sourceLanguage}
              values={this.props.currentFilters.raceFilters }
            />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <MultiSelectDropdown 
              placeholder="Role" 
              options={roleTranslations}
              onChange={ this.props.selectRoleFilter }
              sourceLanguage={this.props.sourceLanguage}
              values={this.props.currentFilters.roleFilters }
            />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <MultiSelectDropdown 
              placeholder="Color" 
              options={colorTranslations}
              onChange={ this.props.selectColorFilter }
              sourceLanguage={this.props.sourceLanguage}
              values={this.props.currentFilters.colorFilters }
            />
          </Table.HeaderCell>
        </Table.Row>
        
      )
    }

    return (
      
      <Table.Row>
        <Table.HeaderCell>
          
          <LanguageSearchDropdown
            placeholder="Select Your Language"
            options={this.props.languages}
            onChange={ this.props.selectSourceLanguage }
          />
          <span>
               <Popup
                trigger={<Icon circular name='exclamation circle' size='large' inverted color="black" fitted />}
                content='Please Select Your Language'
                position="top center"
                inverted
              
              />
            </span>
        </Table.HeaderCell>
          
        <Table.HeaderCell>
          <LanguageSearchDropdown
            placeholder="Select Target Language"
            options={this.props.languages}
            onChange={ this.props.selectTargetLanguage }
          />
        </Table.HeaderCell>
        
        <Table.HeaderCell>Rarity</Table.HeaderCell>
        <Table.HeaderCell>Race</Table.HeaderCell>
        <Table.HeaderCell>Role</Table.HeaderCell>
        <Table.HeaderCell>Color</Table.HeaderCell>
      </Table.Row>
      
    )
  }

  buildTableBody(){
    if(this.props.sourceLanguage && !this.props.targetLanguage){
      

      return _.map( this.filterUnitsForDisplay(), unit => {
        
        return(
          <Table.Row key={unit.code}>
              <Table.Cell>
                {unit[this.props.sourceLanguage.toLowerCase()]}
              </Table.Cell>
              <Table.Cell>
                {""}
              </Table.Cell>
              <Table.Cell>
                {rarityTranslations[unit.rarity.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <TableIcon src={unit.rarity.toLowerCase()} />
                </span>
              </Table.Cell>
              <Table.Cell>
                {raceTranslations[unit.race.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <TableIcon src={unit.race.toLowerCase()} />
                </span>
              </Table.Cell>
              <Table.Cell>
                {roleTranslations[unit.role.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <TableIcon src={unit.role.toLowerCase()} />
                </span>
              </Table.Cell>
              <Table.Cell>
                {colorTranslations[unit.color.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <Icon name="circle outline" color={colorTranslations[unit.color.toLowerCase()].color.toLowerCase()} size="large"/>
                </span>
              </Table.Cell>
            </Table.Row>
        )
      }) 
    } else if(this.props.sourceLanguage && this.props.targetLanguage) {
      return this.filterUnitsForDisplay().map( unit => {
        return(
          <Table.Row key={unit.code}>
              <Table.Cell>
                {unit[this.props.sourceLanguage.toLowerCase()]}
                
              </Table.Cell>
              <Table.Cell>
                {unit[this.props.targetLanguage.toLowerCase()]}
              </Table.Cell>
              <Table.Cell>
                {rarityTranslations[unit.rarity.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <TableIcon src={unit.rarity.toLowerCase()} />
                </span>
              </Table.Cell>
              <Table.Cell>
                {raceTranslations[unit.race.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <TableIcon src={unit.race.toLowerCase() } />
                </span>
              </Table.Cell>
              <Table.Cell>
                {roleTranslations[unit.role.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <TableIcon src={unit.role.toLowerCase()} />
                </span>
              </Table.Cell>
              <Table.Cell>
                {colorTranslations[unit.color.toLowerCase()].[this.props.sourceLanguage.toLowerCase()]}
                <span style={{float:"right"}} > 
                  <Icon name="circle outline" color={colorTranslations[unit.color.toLowerCase()].color.toLowerCase()} size="large"/>
                </span>
              </Table.Cell>
            </Table.Row>
        )
      })
    } else {
      return (
        <Table.Row textAlign='center'>
          <Table.Cell colSpan={6} textAlign='center'>Please Select Your Language</Table.Cell>
        </Table.Row>
      )
    }
    
  }


  render(){

    return (
      
      <Table celled inverted>
        
        <Table.Header>
          {this.buildTableHeader()}
        </Table.Header>

        <Table.Body>
          {this.buildTableBody()}
        </Table.Body>

      </Table>

    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    languages: state.languages,
    rarities: state.rarities,
    sourceLanguage: state.selectedLanguages.sourceLanguage,
    targetLanguage: state.selectedLanguages.targetLanguage,
    currentFilters: state.selectedFilters
  };
}

export default connect(mapStateToProps, {
  selectSourceLanguage,
  selectTargetLanguage,
  selectRarityFilter,
  selectRaceFilter,
  selectRoleFilter,
  selectColorFilter
})(TranslationsTable);