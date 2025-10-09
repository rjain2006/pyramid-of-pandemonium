import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="flex flex-col items-center justify-center mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6">Welcome to Pyramid of Pandemonium!</h2>
      <p className="mb-6 text-center max-w-lg">
        Learn sorting algorithms through fun animations, interactive quizzes, and real-time comparisons.
      </p>
      <button
        onClick={() => navigate('/select-algorithm')}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Get Started
      </button>
    </motion.div>
  );
};

export default Onboarding;
