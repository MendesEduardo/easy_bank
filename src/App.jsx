import React from 'react';
import './styles/globalStyles.scss';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Main from './components/Main';
import Articles from './components/Articles';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Header />
      <Presentation />
      <Main />
      <Articles />
      <Footer />
    </>
  );
};

export default App;
