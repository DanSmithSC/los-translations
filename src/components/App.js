import '../styles/App.css'
import React from 'react'
import AppHeader from './Header';
import TranslationsTable from './TranslationsTable';
import Footer from './Footer';

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