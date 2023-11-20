//app.js
import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage';
import AgeOne from './page/AgeOne.js';
import AgeTwo from './page/AgeTwo.js';
import AgeThree from './page/AgeThree.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AgeOne/:category" element={<AgeOne />} />
        <Route path="/AgeTwo/:category" element={<AgeTwo />} />
        <Route path="/AgeThree/:category" element={<AgeThree />} />
      </Routes>
    </Router>
  );
};

export default App;
