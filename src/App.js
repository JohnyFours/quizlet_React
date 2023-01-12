import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'Inside which HTML element do we put the JavaScript?',
    variants: ['js', 'scripting', 'script'],
    correct: 2,
  },
  {
    title: ' What is the correct JavaScript syntax to write "Hello World"? ',
    variants: [' response.write("Hello World")', '"Hello World"', 'document.write("Hello World")'],
    correct: 2,
  },
  {
    title: 'Where is the correct place to insert a JavaScript?',
    variants: [
      'Both the <head> section and the <body> section are correctL',
      'The <body> section',
      'The <head> section',
    ],
    correct: 1,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Well Done! You have {correct} out of {questions.length} correct answers</h2>
      <a href='/'>
        <button>Try Again</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVAriant, step }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => (
            <li key={text} onClick={() => onClickVAriant(index)}>{text}</li>
          ))
        }


      </ul>
    </>
  );
}

function App() {


  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);

  const onClickVAriant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  }

  const question = questions[step];

  return (
    <div className="App">
      {
        step !== questions.length ? (
          <Game question={question} onClickVAriant={onClickVAriant} step={step} />
        ) : (
          <Result correct={correct} />
        )}
    </div>
  );
}

export default App;
