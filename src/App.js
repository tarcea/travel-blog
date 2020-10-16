import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import ToolsMenu from './components/tools_menu/tools_menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <ToolsMenu />
      <Footer />
    </div>
  );
}

export default App;
