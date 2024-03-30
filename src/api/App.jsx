import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginSignUp from '../LoginSignUp';
import Login from '../Login';


function App() {
  return (
    <Router>
      <Routes>

      <Route path="/register" element={<LoginSignUp />} />
      <Route path="/login" element={<Login />} />
      </Routes>
        {/* <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} /> */}
    </Router>
  );
}

export default App;
