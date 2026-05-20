import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import { PERSONALITY_QUESTIONS } from '../data';

export default function PersonalityTest({ nav, eventId }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = PERSONALITY_QUESTIONS[step];
  const isLast = step === PERSONALITY_QUESTIONS.length - 1;
  const selected = answers[step];

  const next = () => {
    if (isLast) nav.replace('buddyMatches', { eventId });
    else setStep(step + 1);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <TopBar onBack={() => (step === 0 ? nav.back() : setStep(step - 1))} title="Buddy match" />
      <div className="pt">
        <div className="onb-progress" aria-hidden="true">
          {PERSONALITY_QUESTIONS.map((_, i) => (
            <span key={i} className={i <= step ? 'done' : ''} />
          ))}
        </div>
        <div className="step-meta">Question {step + 1} of {PERSONALITY_QUESTIONS.length}</div>
        <h2>{q.q}</h2>

        <div className="options">
          {q.options.map((opt, i) => (
            <button
              key={i}
              className={`opt ${selected === i ? 'selected' : ''}`}
              onClick={() => setAnswers({ ...answers, [step]: i })}
            >
              <span className="dot" />
              <span>{opt}</span>
            </button>
          ))}
        </div>

        <div className="spacer" />
        <button
          className="btn-primary accent"
          disabled={selected === undefined}
          onClick={next}
          style={{ width: '100%' }}
        >
          {isLast ? 'See matches' : 'Next'}
        </button>
      </div>
    </div>
  );
}
