import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const generateRandomArray = (size) => 
  Array.from({ length: size }, () => Math.floor(Math.random() * 200) + 20);

// Bubble Sort Animation
const bubbleSortSteps = (array) => {
  const arr = [...array];
  const steps = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({ arr: [...arr], comparing: [j, j+1] });
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push({ arr: [...arr], comparing: [j, j+1] });
      }
    }
}
  return steps;
};

const Visualization = () => {
  const { state } = useLocation();
  const { selectedAlgorithms, arraySize, speed } = state;
  const [array, setArray] = useState(generateRandomArray(arraySize));
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (selectedAlgorithms.includes("Bubble Sort")) {
      setSteps(bubbleSortSteps(array));
    }
  }, [array, selectedAlgorithms]);

  useEffect(() => {
    if (steps.length === 0) return;
    if (currentStep >= steps.length) return;

    const timer = setTimeout(() => setCurrentStep(prev => prev + 1), speed);
    setArray(steps[currentStep].arr);

    return () => clearTimeout(timer);
  }, [currentStep, steps, speed]);

  return (
    <div className="mt-12 flex justify-center items-end h-[400px] gap-2 px-10">
      {array.map((value, index) => (
        <motion.div
          key={index}
          layout
          initial={{ height: 0 }}
          animate={{ height: value }}
          transition={{ duration: 0.3 }}
          className={`w-6 bg-red-500 ${steps[currentStep]?.comparing.includes(index) ? 'bg-yellow-400' : ''}`}
        />
      ))}
    </div>
  );
};

export default Visualization;
