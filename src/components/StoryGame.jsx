// src/components/StoryGame.jsx
import { useState } from 'react';
import Link from 'next/link';

const StoryGame = ({ gameContent, title, moduleId, storyId }) => {
  // Game state
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [gems, setGems] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  
  // Gem colors
  const gemColors = ["text-red-500", "text-blue-500", "text-green-500", "text-purple-500", "text-yellow-500", "text-pink-500"];

  const currentContent = gameContent[currentStep];

  // Handle answer selection
  const handleSelectAnswer = (index) => {
    if (!answered) {
      setSelectedAnswer(index);
    }
  };

  // Submit answer and check if correct
  const handleSubmit = () => {
    if (selectedAnswer !== null && !answered) {
      if (selectedAnswer === currentContent.correctAnswer) {
        setScore(score + 1);
        // Add a new gem with random color when answer is correct
        setGems([...gems, gemColors[Math.floor(Math.random() * gemColors.length)]]);
      }
      setAnswered(true);
    }
  };

  // Move to next step
  const handleNext = () => {
    if (currentStep < gameContent.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setGameComplete(true);
    }
  };

  // Restart the game
  const handleRestart = () => {
    setCurrentStep(0);
    setScore(0);
    setGems([]);
    setSelectedAnswer(null);
    setAnswered(false);
    setGameComplete(false);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-3xl p-6 bg-blue-50 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-2 text-blue-800">{title}</h1>
      <p className="text-center text-blue-600 mb-6">Use your imagination to collect magical gems!</p>
      
      {!gameComplete ? (
        <div className="w-full">
          <div className="mb-4 relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-2 bg-blue-600 rounded-full" 
                style={{ width: `${(currentStep / (gameContent.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            {currentContent.type === "story" ? (
              <div className="mb-4">
                <p className="text-lg leading-relaxed">{currentContent.text}</p>
              </div>
            ) : currentContent.type === "question" ? (
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-sm font-medium bg-blue-100 text-blue-800 py-1 px-2 rounded">
                    {currentContent.domain ? visualizationDomains[currentContent.domain]?.name || "Visualization" : "Visualization"}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-4 text-blue-700">{currentContent.question}</h2>
                <div className="space-y-3 mb-6">
                  {currentContent.options.map((option, index) => (
                    <div 
                      key={index}
                      onClick={() => handleSelectAnswer(index)}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedAnswer === index 
                          ? answered 
                            ? index === currentContent.correctAnswer 
                              ? 'bg-green-100 border-green-500' 
                              : 'bg-red-100 border-red-500'
                            : 'bg-blue-100 border-blue-500'
                          : 'hover:bg-gray-50 border-gray-300'
                      }`}
                    >
                      <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {option}
                    </div>
                  ))}
                </div>
                {answered && (
                  <div className={`p-4 rounded-lg mb-4 ${selectedAnswer === currentContent.correctAnswer ? 'bg-green-100' : 'bg-red-100'}`}>
                    <div className="flex items-center mb-2">
                      {selectedAnswer === currentContent.correctAnswer ? (
                        <>
                          <span className="text-green-600 text-xl mr-2">✓</span>
                          <p className="font-medium flex items-center">
                            Correct! You earned a gem! 
                            <span className={`${gems[gems.length-1]} ml-2 animate-pulse`}>
                              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L5 7L12 12L19 7L12 2Z" />
                                <path d="M5 7L5 17L12 22L12 12L5 7Z" />
                                <path d="M12 12L12 22L19 17L19 7L12 12Z" />
                              </svg>
                            </span>
                          </p>
                        </>
                      ) : (
                        <>
                          <span className="text-red-600 text-xl mr-2">✗</span>
                          <p className="font-medium">Not quite! Keep trying!</p>
                        </>
                      )}
                    </div>
                    <p>{currentContent.explanation}</p>
                  </div>
                )}
              </div>
            ) : null}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="text-lg font-medium mr-2">
                Gems: {score}/{gameContent.filter(item => item.type === "question").length}
              </div>
              <div className="flex">
                {gems.map((gemColor, index) => (
                  <div key={index} className={`${gemColor} transform -translate-x-${index * 2} transition-all`}>
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L5 7L12 12L19 7L12 2Z" />
                      <path d="M5 7L5 17L12 22L12 12L5 7Z" />
                      <path d="M12 12L12 22L19 17L19 7L12 12Z" />
                    </svg>
                  </div>
                ))}
                {Array(gameContent.filter(item => item.type === "question").length - score).fill(0).map((_, index) => (
                  <div key={`empty-${index}`} className={`text-gray-300 transform -translate-x-${(gems.length + index) * 2} transition-all`}>
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L5 7L12 12L19 7L12 2Z" />
                      <path d="M5 7L5 17L12 22L12 12L5 7Z" />
                      <path d="M12 12L12 22L19 17L19 7L12 12Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {currentContent.type === "question" && !answered ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className={`px-6 py-2 rounded-lg ${
                    selectedAnswer === null
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  Continue
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center bg-white p-8 rounded-lg shadow-sm w-full">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Game Complete!</h2>
          {currentContent.moral && <p className="text-xl font-medium text-blue-700 mb-6">{currentContent.moral}</p>}
          <div className="mb-6">
            <p className="text-lg mb-3">Your treasure collection:</p>
            <div className="flex justify-center gap-4 mb-4">
              {gems.map((gemColor, index) => (
                <div key={index} className={`${gemColor} animate-bounce`} style={{animationDelay: `${index * 0.1}s`}}>
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L5 7L12 12L19 7L12 2Z" />
                    <path d="M5 7L5 17L12 22L12 12L5 7Z" />
                    <path d="M12 12L12 22L19 17L19 7L12 12Z" />
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-lg">You collected {score} out of {gameContent.filter(item => item.type === "question").length} gems!</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Play Again
            </button>
            <Link
              href={`/module/${moduleId}`}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg inline-block text-center"
            >
              More Stories
            </Link>
            <Link
              href="/"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg inline-block text-center"
            >
              All Collections
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

// Visualization domains reference
const visualizationDomains = {
  "what": { name: "Object Identification" },
  "shape": { name: "Shape Properties" },
  "background": { name: "Environment" },
  "size": { name: "Relative Size" },
  "where": { name: "Spatial Position" },
  "perspective": { name: "Viewing Angle" },
  "color": { name: "Visual Appearance" },
  "movement": { name: "Action" },
  "when": { name: "Time Context" },
  "number": { name: "Quantity" },
  "mood": { name: "Emotional Context" },
  "sound": { name: "Auditory Elements" }
};

// Set default props
StoryGame.defaultProps = {
  title: "Visualization Reading Game"
};

export default StoryGame;
