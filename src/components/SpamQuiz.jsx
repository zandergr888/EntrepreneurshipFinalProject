import { useState } from 'react';
import './SpamQuiz.css';
import tollViolationExample from '../assets/toll-violation-example.png';

const questions = [
  {
    question: "Yes or no? Should you be concerned when a random text message contains a sense of urgency? Especially for financial matters",
    correctAnswer: true,
    explanation: "Yes-scammers often create a false sense of urgency to pressure elderly individuals into making quick decisions. We need to help our sweet elderly here"
  },
  {
    question: "Lets say a resident shows you an email from their bank or a big company with slight misspellings (like 'B@nkofAmerica' or 'amaz0n'), should you help them respond?",
    correctAnswer: false,
    explanation: "NEVER help residents respond to such emails. Banks/big companies never use misspelled domains. You can also make sure by checking the actual website"
  },
  {
    question: "Lets say a resident got a phone call that seems like its there little nephew, but it actulaly isn't their phone number (true story). Should the resident verify this?",
    correctAnswer: true,
    explanation: "ALWAYS encourage residents to verify unexpected requests through a known phone number, even if the message appears to be from family. Scammers often impersonate loved ones to exploit trust."
  },
  {
    question: "Is it okay to help residents click on links in urgent messages if they're worried about missing an important payment?",
    correctAnswer: false,
    explanation: " NEVER, NEVER, NEVER help residents click on links in urgent messages about payments. Especially if there is an urgency in them"
  }
];

const finalTest = {
  image: tollViolationExample,
  question: "A resident shows you this text message about an unpaid toll. What would you do?",
  options: [
    {
      text: "Pay",
      isCorrect: false,
      feedback: "This is a scam message. Never help residents click on suspicious links, even if the message seems urgent."
    },
    {
      text: "Contact their state's official toll service through their officail phone number or website. Usually, a .gov website",
      isCorrect: true,
      feedback: "Correct! Always help residents verify such claims through official channels. This message shows multiple red flags: urgent tone, suspicious link, and threats."
    }
  ]
};

export default function SpamQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showingFinalTest, setShowingFinalTest] = useState(false);
  const [finalTestAnswered, setFinalTestAnswered] = useState(false);
  const [selectedFinalAnswer, setSelectedFinalAnswer] = useState(null);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestion >= questions.length - 1) {
      setShowingFinalTest(true);
    } else {
      setShowAnswer(false);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinalTestAnswer = (optionIndex) => {
    setSelectedFinalAnswer(optionIndex);
    setFinalTestAnswered(true);
    if (finalTest.options[optionIndex].isCorrect) {
      setScore(score + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowAnswer(false);
    setScore(0);
    setShowingFinalTest(false);
    setFinalTestAnswered(false);
    setSelectedFinalAnswer(null);
  };

  if (showingFinalTest) {
    return (
      <div className="quiz-container">
        <h2>Final Practical Test</h2>
        <div className="example-image">
          <img src={finalTest.image} alt="Example of a spam message" />
        </div>
        <p className="question">{finalTest.question}</p>
        
        <div className="final-test-options">
          {finalTest.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !finalTestAnswered && handleFinalTestAnswer(index)}
              className={`quiz-button ${
                finalTestAnswered
                  ? option.isCorrect
                    ? 'correct'
                    : selectedFinalAnswer === index
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              disabled={finalTestAnswered}
            >
              {option.text}
            </button>
          ))}
        </div>

        {finalTestAnswered && (
          <div className="answer-container">
            <p className="explanation">
              {finalTest.options[selectedFinalAnswer].feedback}
            </p>
            <div className="quiz-complete">
              <h2>Quiz Complete!</h2>
              <p>Final Score: {score} out of {questions.length + 1}</p>
              <button onClick={resetQuiz} className="quiz-button">
                Take Quiz Again
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (currentQuestion >= questions.length && !showingFinalTest) {
    return (
      <div className="quiz-container">
        <h2>Moving to Final Test</h2>
        <p>Great job! Now let's test your knowledge with a real-world example.</p>
        <button onClick={() => setShowingFinalTest(true)} className="quiz-button">
          Start Final Test
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentQuestion + 1) / (questions.length + 1)) * 100}%` }}
        ></div>
      </div>
      
      <h2>Question {currentQuestion + 1} of {questions.length}</h2>
      <p className="question">{questions[currentQuestion].question}</p>
      
      {!showAnswer ? (
        <div className="button-container">
          <button 
            onClick={() => handleAnswer(true)} 
            className="quiz-button"
          >
            Yes
          </button>
          <button 
            onClick={() => handleAnswer(false)} 
            className="quiz-button"
          >
            No
          </button>
        </div>
      ) : (
        <div className="answer-container">
          <p className="explanation">
            {questions[currentQuestion].explanation}
          </p>
          <button 
            onClick={nextQuestion} 
            className="quiz-button"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
} 