import 'core-js/stable';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import ReactGA from 'react-ga';

const App = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize('UA-211317710-1');
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
