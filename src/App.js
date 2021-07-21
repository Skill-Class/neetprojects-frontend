import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from "./components/Projects";
import Trainings from "./components/Tranining";

function App() {
  return (
    <div className="app">
      {" "}
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/training" component={Trainings} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
