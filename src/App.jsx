import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DSATracker from './components/DSATracker'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/problems" />} />
        <Route path="/problems/*" element={<DSATracker />} />
        <Route path="/stats/*" element={<DSATracker />} />
        <Route path="/mindmap/*" element={<DSATracker />} />
        <Route path="*" element={<Navigate to="/problems" />} />
      </Routes>
    </Router>
  );
}

export default App;
