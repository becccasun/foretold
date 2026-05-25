import React, { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import StarRating from '../components/StarRating';
import { CheckIcon, SparkIcon } from '../components/Icons';
import { RATING_QUESTIONS } from '../data';

const DEFAULT_SECTIONS = [
  { label: 'What did you like most?', body: '' },
  { label: 'What could be stronger?', body: '' },
  { label: 'Would you actually use this?', body: '' },
  { label: 'One thing you\'d try next', body: '' },
];

export default function FeedbackForm({ nav, project, onSubmit, onOpenGuidelines }) {
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [ratings, setRatings] = useState(() =>
    Object.fromEntries(RATING_QUESTIONS.map((q) => [q.key, 0]))
  );
  const [checked, setChecked] = useState(false);

  const update = (i, body) => {
    setSections((s) => s.map((section, idx) => (idx === i ? { ...section, body } : section)));
  };

  const addSection = () => {
    setSections((s) => [...s, { label: 'Another thought', body: '' }]);
  };

  const setRating = (key, n) => setRatings((r) => ({ ...r, [key]: n }));

  // Weighted score: each question contributes weight × stars. Only complete
  // when every question is rated, so we don't ship partial scores.
  const allRated = RATING_QUESTIONS.every((q) => ratings[q.key] > 0);
  const weightedScore = useMemo(() => {
    if (!allRated) return 0;
    return RATING_QUESTIONS.reduce((sum, q) => sum + q.weight * ratings[q.key], 0);
  }, [ratings, allRated]);

  const filled = sections.some((s) => s.body.trim().length > 0);
  const canSubmit = filled && allRated && checked;

  return (
    <div>
      <TopBar onBack={() => nav.back()} title="Give feedback" closeIcon />
      <div className="feedback-form">
        <div className="eyebrow">You're evaluating</div>
        <h1>{project.title}</h1>

        <div className="karma-callout">
          <div className="icon"><SparkIcon size={14} /></div>
          <p>
            Thoughtful feedback earns <strong>karma</strong>, which boosts your own projects in the feed. The more specific you are, the more {project.author?.split(' ')[0]} can do with it.
          </p>
        </div>

        <div className="fb-ratings">
          <div className="fb-ratings__head">
            <div className="label">Rate this project</div>
            <div className="small muted">
              Your scores combine into an overall rating out of 5.
              {allRated && (
                <> Current: <strong style={{ color: 'var(--ink)' }}>{weightedScore.toFixed(1)}</strong></>
              )}
            </div>
          </div>
          {RATING_QUESTIONS.map((q) => (
            <div className="fb-rating-row" key={q.key}>
              <div className="fb-rating-row__text">
                <div className="fb-rating-row__label">{q.label}</div>
                <div className="fb-rating-row__help small muted">{q.help}</div>
              </div>
              <StarRating
                editable
                value={ratings[q.key]}
                onChange={(n) => setRating(q.key, n)}
                size={16}
                ariaLabel={`Rate ${q.label}`}
              />
            </div>
          ))}
        </div>

        {sections.map((s, i) => (
          <div className="fb-section" key={i}>
            <div className="label">{s.label}</div>
            <textarea
              placeholder="Be honest. Be kind. Be specific."
              value={s.body}
              onChange={(e) => update(i, e.target.value)}
            />
          </div>
        ))}

        <button className="add-section" onClick={addSection}>+ Add a section</button>

        <div className="guideline-check" onClick={() => setChecked((c) => !c)} role="checkbox" aria-checked={checked} tabIndex={0}>
          <div className={`checkbox ${checked ? 'checked' : ''}`}>
            {checked && <CheckIcon size={14} />}
          </div>
          <span>I've checked that my comments follow the{' '}
            <a
              href="#"
              className="inline-link"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); nav.go('guidelines'); }}
            >community guidelines</a>.
          </span>
        </div>

        <button
          className="btn-primary accent"
          style={{ width: '100%' }}
          disabled={!canSubmit}
          onClick={() => onSubmit({ ratings, score: weightedScore })}
        >
          Send feedback
          <span className="karma-pill" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.28)', color: 'var(--btn-accent-text)', height: 24, padding: '0 8px' }}>
            <SparkIcon size={12} /> +15
          </span>
        </button>
      </div>
    </div>
  );
}
