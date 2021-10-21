import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './components/Home/Container';

const App = () => {
  return (
    <div>
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
};

export default App;
