import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apollo';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Route path={'/'} exact component={Home} />
          <Route path={'/coin/:id'} exact component={Detail} />
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
