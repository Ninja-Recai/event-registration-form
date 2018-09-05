import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from 'containers/Home';
import NotFound from 'containers/NotFound';
import AppHeader from 'components/AppHeader';

class App extends PureComponent {
  render() {
    return (
      <div>
        <AppHeader />
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
