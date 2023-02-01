import React from 'react';
import './styles/globalStyles.scss';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Main from './components/Main';
import Articles from './components/Articles';
import Footer from 'components/Footer';
import Container from 'components/Container';

function App() {
  return (
    <Container>
      <Header />
      <Presentation />
      <Main />
      <Articles />
      <Footer />
    </Container>
  );
};

export default App;
