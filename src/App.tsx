import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './customHooks/scrollToTop';
import unFocus from './customHooks/unFocus';
import Home from './components/pages/Home';
import NoMatch from './components/pages/NoMatch';
import Header from './components/organisms/Header';
import MenuList from './components/organisms/MenuList';
import Footer from './components/organisms/Footer';
import About from './components/pages/About';
import Posts from './components/pages/Posts';
import Post from './components/pages/Post';
import Codes from './components/pages/Codes';
import Code from './components/pages/Code';
import Portfolios from './components/pages/Portfolios';
import Portfolio from './components/pages/Portfolio';

const App = (): JSX.Element => {
  const { t } = useTranslation();
  useEffect(() => {
    unFocus();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Header ghost={false} showType="top" title={t('Common.title')} />
        <MenuList />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts/tag/:tag" component={Posts} />
            <Route path="/posts/:seq" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/codes/:seq" component={Code} />
            <Route path="/codes" component={Codes} />
            <Route path="/portfolio/:seq" component={Portfolio} />
            <Route path="/portfolio" component={Portfolios} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
