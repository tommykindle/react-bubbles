import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";
import BubblePage from './components/BubblePage'
import Login from "./components/Login";
import "./styles.scss";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to='/' />;
    }
  }} />
}


function App() {
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/'>Log In</Link>
          </li>
          <li>
            <Link to='/bubblespage'>Bubbles Page</Link>
          </li>
        </ul>
        <Route path='/' component={Login} />
        <PrivateRoute exact path='/bubblespage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
