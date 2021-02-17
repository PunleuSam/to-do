import React from 'react';
import './App.css';
import Header from '../Header/Header';
import ContentContainer from '../../containers/ContentContainer';
import Footer from '../Footer/Footer';

/**
 * call all function into page
 */

const App = () => (
  <div className="app__container">
    <Header className="app__header" />
    <ContentContainer className="app__content" />
    <Footer className="app__footer" />
  </div>
);

export default App;
