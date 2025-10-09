import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Onboarding from './pages/Onboarding';
import AlgorithmSelector from './pages/AlgorithmSelector';
import Visualization from './pages/Visualization';
import PerformanceDashboard from './pages/PerformanceDashboard';
import QuizMode from './pages/QuizMode';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-yellow-100 via-orange-100 to-yellow-200 text-gray-900">
        <Header />
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/onboarding" element={<Onboarding/>} />
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
