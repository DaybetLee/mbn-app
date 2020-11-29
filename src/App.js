import "./App.css";
import Dashboard from "./components/dashboard/dashboard";
import { Redirect, Route, Switch } from "react-router-dom";
import Error404 from "./components/common/error404";
import Test from "./components/test";
import Validation from "./components/verification/verification";
import Verifying from "./components/verification/verifying.jsx";

function App() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/test" component={Test} />
      <Route path="/error" component={Error404} />
      <Route path="/verification" component={Validation} />
      <Route path="/verifying" component={Verifying} />
      <Redirect to="/dashboard" />
      {/* <Redirect to="/error" /> */}
    </Switch>
  );
}

export default App;
