import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Designs from './Pages/Designs';
import Contact from './Pages/Contact';
import Dashboard from './Dashboard';

// Page layouts
import DashboardMain from './Dashboard/Layout/DashboardMain';
import Main from './Layout/Main';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
  )
}

function App() {
  return (
    <Router>
      <AppRoute exact path="/" layout={Main} component={Home} />
      <AppRoute path="/projects" layout={Main} component={Designs} />
      {/* <AppRoute path="/about" layout={Main} component={About} /> */}
      <AppRoute path="/contact" layout={Main} component={Contact} />
      <AppRoute path="/dashboard" layout={DashboardMain} component={Dashboard} />
    </Router>
  )
}

export default App;
