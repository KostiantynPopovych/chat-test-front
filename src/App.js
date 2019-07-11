import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Store from './utils/configureStore';

import ChatPage from './pages/chat';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path="/" component={ChatPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Provider>
)

export default App;
