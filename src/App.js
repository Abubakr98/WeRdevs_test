import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const AboutUs = lazy(() => import('./pages/about'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
