import './App.css';
import React from "react";
import Main from "./pages/Main";
import Annalise from "./pages/Annalise";
import Asher from "./pages/Asher";
import Bonnie from "./pages/Bonnie";
import Connor from "./pages/Connor";
import Emmett from "./pages/Emmett";
import Eve from "./pages/Eve";
import Frank from "./pages/Frank";
import Gabriel from "./pages/Gabriel";
import Laurel from "./pages/Laurel";
import Michaela from "./pages/Michaela";
import Nate from "./pages/Nate";
import Oliver from "./pages/Oliver";
import Rebecca from "./pages/Rebecca";
import Tegan from "./pages/Tegan";
import Wes from "./pages/Wes";
import Supporting from "./pages/Supporting";
import Minor from "./pages/Minor";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/pages/Main" component={Main} />
          <Route exact path="/pages/Annalise" component={Annalise} />
          <Route exact path="/pages/Asher" component={Asher} />
          <Route exact path="/pages/Bonnie" component={Bonnie} />
          <Route exact path="/pages/Connor" component={Connor} />
          <Route exact path="/pages/Emmett" component={Emmett} />
          <Route exact path="/pages/Eve" component={Eve} />
          <Route exact path="/pages/Frank" component={Frank} />
          <Route exact path="/pages/Gabriel" component={Gabriel} />
          <Route exact path="/pages/Laurel" component={Laurel} />
          <Route exact path="/pages/Michaela" component={Michaela} />
          <Route exact path="/pages/Nate" component={Nate} />
          <Route exact path="/pages/Oliver" component={Oliver} />
          <Route exact path="/pages/Rebecca" component={Rebecca} />
          <Route exact path="/pages/Tegan" component={Tegan} />
          <Route exact path="/pages/Wes" component={Wes} />
          <Route exact path="/pages/Supporting" component={Supporting} />
          <Route exact path="/pages/Minor" component={Minor} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
