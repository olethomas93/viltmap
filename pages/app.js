import { Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/index";

import { Global } from "./styles/Global";


function App() {
  return (
    <Router>
      <Global />
      <Switch>
        <Route exact path="/" component={HomePage} />
      
      </Switch>
    </Router>
  );
}

export default App;