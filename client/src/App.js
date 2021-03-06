import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Home from './components/Home';
import Detail from './components/Detail';
import Header from './components/Header';
import Footer from './components/Footer';
import Market from './components/Market';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Header />
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/coin/:id'} exact component={Detail} />
            <Route path={'/market'} exact component={Market} />
          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
