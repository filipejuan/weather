import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";

import Home from './screens/pages/home';
import City from './screens/pages/city';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:city">
          <City />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;