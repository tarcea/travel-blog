import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import Banner from './components/banner/banner';
import ToolsMenu from './components/tools_menu/tools_menu';
import Search from './components/search/search';
import Video from './components/video/video';
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
          <Route path="/subscription" component={Subscription} />
          <Route path="/guides" component={Guides} />
          <Route path="/revenue" component={Revenue} />
          <Route path="/comunity" component={Comunity} />
          <Route path="/marketing" component={Marketing} />
          <Route path="/content" component={Content} />
        </Switch>
        <Search />
        <Video />
      <Footer />
    </div>
  );
}

export default App;
