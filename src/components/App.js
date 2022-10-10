import '../styles/App.css';
import React from 'react';
import AppHeader from './Header';
import TranslationsTable from './TranslationsTable';
import Footer from './Footer';
import { Segment } from 'semantic-ui-react';

const App = () => {
  return (
    <div>
      <Segment inverted>
        <Segment.Group>
          <AppHeader />
          <TranslationsTable />
          <Footer />
        </Segment.Group>
      </Segment>
    </div>
  );
};

export default App;
