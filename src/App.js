import React from "react";
import { Grommet } from "grommet";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Notes from "./components/Notes";
import Home from "./pages/home/Home";
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/layout/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

const theme = {
  global: {
    colors: {
      brand: "#232b2b",
      "accent-1": "#FFFFFF",
      focus: '#ff4040',
    },
    font: {
      family: "Roboto",
      size: "12px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </Grommet>
  );
}

/* const RouteWrapper = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route {...rest} render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )} />
  );
}
*/

export default withAuthenticator(App);
