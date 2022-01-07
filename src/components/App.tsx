import { hot } from 'react-hot-loader/root';
import React from 'react';
import Hello from "./Hello";
import HelloWithHooks from "./HelloWithHooks";
import '../scss/labshome.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


interface AppProps {
  title: string;
}

class App extends React.Component<AppProps, unknown> {

  constructor(props: AppProps) {
    super(props);
  }

  render() {
 
    return (
      <React.Fragment>
        <Router>
          <Hello compiler={"TS"} framework={"React"} />
          <Switch>
            <Route exact path="/" render={() => <HelloWithHooks />} />
            <Redirect to="/" />
          </Switch>
          <div className="footer">
            <div className="container">
               <p>The Javascript/ Typescript laboratories. 
                Contact: Programming Laboratory.</p>
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default hot(App);