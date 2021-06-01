import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
