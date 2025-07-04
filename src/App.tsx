import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';


import AppLayout from './components/layout/AppLayout';

import Home from './pages/Home';
import Report from './pages/Report';
import NoMatch from './pages/NoMatch';


function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<NoMatch />} /> 
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
