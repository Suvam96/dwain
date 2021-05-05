import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chart from './Chart';
import Users from './User';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route exact path='/chart' component={Chart} />
         
          {/* <Route exact path='/nav' component={Navbar} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
