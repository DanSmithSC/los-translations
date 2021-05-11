import React from 'react'
import AppHeader from './Header';
import TranslationsTable from './TranslationsTable';
import Footer from './Footer';
import { Popup, Icon, Image} from 'semantic-ui-react';
import '../styles/App.css'

const App = () => {

  return (
    <div className="background-art" >
      <AppHeader />
      <div className="container__table">
        <TranslationsTable className="ui segment" />
      </div>
      <Footer />
    </div>
  )

}

export default App;