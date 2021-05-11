import React from 'react'
import AppHeader from './Header';
import TranslationsTable from './TranslationsTable';
import { Popup, Icon} from 'semantic-ui-react';
import '../styles/App.css'

const App = () => {

  return (
    <div className="background-art" >
      <AppHeader />
      <div className="container__table">
        <TranslationsTable className="ui segment" />
      </div>
      <div>
        <span>
         <Popup
          trigger={<Icon circular name='info circle' size='large' inverted color="black" fitted />}
          content='Last Updated for the SÄRIMNER Blöt Festival'
          position="right center"
          inverted

        />
      </span>
      </div>
    </div>
  )

}

export default App;