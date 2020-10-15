import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import IconCard from './components/icon_card/icon_card';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <IconCard />
      <Footer />
    </div>
  );
}

export default App;
