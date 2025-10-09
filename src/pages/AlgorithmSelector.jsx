import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const algorithms = ["Bubble Sort", "Merge Sort", "Quick Sort", "Insertion Sort"];

const AlgorithmSelector = () => {
  const navigate = useNavigate();
  const [selectedAlgorithms, setSelectedAlgorithms] = useState([]);
  const [arraySize, setArraySize] = useState(10);
  const [speed, setSpeed] = useState(500);

  const toggleAlgorithm = (algo) => {
    setSelectedAlgorithms(prev => 
      prev.includes(algo) ? prev.filter(a => a !== algo) : [...prev, algo]
    );
  };

  const handleStart = () => {
    if (selectedAlgorithms.length > 0) {
      navigate('/visualize', { state: { selectedAlgorithms, arraySize, speed } });
    } else {
      alert("Select at least one algorithm!");
    }
  };

  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">Select Algorithms</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {algorithms.map(algo => (
          <button
            key={algo}
            onClick={() => toggleAlgorithm(algo)}
            className={`px-4 py-2 rounded-lg border ${
              selectedAlgorithms.includes(algo) ? 'bg-green-400 text-white' : 'bg-white'
            }`}
          >
            {algo}
          </button>
        ))}
      </div>
      <div className="flex gap-6 mb-6">
        <label>
          Array Size:
          <input
            type="number"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            className="border ml-2 p-1 w-20"
          />
        </label>
        <label>
          Speed (ms):
          <input
            type="number"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="border ml-2 p-1 w-20"
          />
        </label>
      </div>
      <button 
        onClick={handleStart} 
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Visualize!
      </button>
    </div>
  );
};

export default AlgorithmSelector;
