import { hot } from 'react-hot-loader/root';
import React from 'react';
import Hello from "./Hello";
import HelloWithHooks from "./HelloWithHooks";
import style from '../scss/labshome.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


interface AppProps {
  title: string;
  //  done?: boolean;
}

class App extends React.Component<AppProps, unknown> {

  // static defaultProps: Partial<AppProps> = { 
  //   done: false,
  // }

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
          <div className={style.footer}>
            <div className={style.container}>
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