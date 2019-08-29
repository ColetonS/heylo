import React from 'react';
import './App.css';
import Nav from '../src/components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'


function App(props) {
  return (
    <div className="App">
      {(props.location.pathname !== '/') ? <Nav /> : <></>}
      {routes}
    </div>
  );
}

export default withRouter(App);
