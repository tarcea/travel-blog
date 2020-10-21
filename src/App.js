import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import ToolsMenu from './components/tools_menu/tools_menu';
// import Search from './components/search/search';
// import Videos from './components/videos/videos';
import Setup from './components/pages/setup/setup';
import Subscription from './components/pages/subscription/subscription';
import Guides from './components/pages/guides/guides';
import Revenue from './components/pages/revenue/revenue';
import Comunity from './components/pages/comunity/comunity';
import Marketing from './components/pages/marketing/marketing';
import Content from './components/pages/content/content';


function App() {
  return (
    <div className="App">
      <Menu />
        <Banner />
        <ToolsMenu />
        <Switch>
          <Route path="/setup" component={Setup} />
          <Route path="/subscription" component={Setup} />
          <Route path="/guides" component={Setup} />
          <Route path="/revenue" component={Setup} />
          <Route path="/community" component={Setup} />
          <Route path="/marketing" component={Setup} />
          <Route path="/content" component={Setup} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
