import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Store from './utils/configureStore';

import ChatPage from './pages/chat';

const App = () => (
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Link to="/chat">Go to chat!</Link>} />
        <Route path="/chat" component={ChatPage} />
        <Route path="*" component={() => <h1>404 not found</h1>} />
      </Switch>
    </Router>
  </Provider>
)

export default App;
