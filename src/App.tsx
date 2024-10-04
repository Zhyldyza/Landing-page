import React from 'react'
import Header from './shared/header/Header'
import Content from './shared/content/Content';
import StandartBlock from './shared/content/StandartBlock';
import WorksBlock from './shared/content/WorksBlock';
import Projects from './shared/content/Projects';
import Footer from './shared/footer/Footer';

const App = () => {
  return (
    <>
    <Header />
    <Content />
    <StandartBlock />
    <WorksBlock />
    <Projects />
    <Footer />
    </>
  )
}

export default App;