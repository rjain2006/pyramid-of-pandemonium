import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "In Bubble Sort, what is swapped first?",
    options: ["Smaller element", "Larger element", "Middle element", "No swap"],
    answer: "Larger element",
  },
  {
    question: "Which algorithm is faster for large datasets?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    answer: "Merge Sort",
  },
];

const QuizMode = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === quizQuestions[current].answer) setScore(score + 1);
    setCurrent(current + 1);
  };

  if (current >= quizQuestions.length)
    return <div className="text-center mt-20 text-2xl">Your Score: {score}/{quizQuestions.length}</div>;

  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">{quizQuestions[current].question}</h2>
      <div className="grid grid-cols-2 gap-4">
        {quizQuestions[current].options.map(option => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizMode;
