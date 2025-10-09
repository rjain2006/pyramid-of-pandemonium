import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Onboarding from './components/Onboarding';
import AlgorithmSelector from './components/AlgorithmSelector';
import Visualization from './components/Visualization';
import PerformanceDashboard from './components/PerformanceDashboard';
import QuizMode from './components/QuizMode';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-orange-100 to-yellow-200 text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/select-algorithm" element={<AlgorithmSelector />} />
          <Route path="/visualize" element={<Visualization />} />
          <Route path="/dashboard" element={<PerformanceDashboard />} />
          <Route path="/quiz" element={<QuizMode />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
