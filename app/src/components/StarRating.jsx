import React, { useState } from 'react';
import { StarIcon } from './Icons';

/**
 * StarRating
 * - Display mode: renders 5 star slots. Each slot is empty, half, or full
 *   based on the rating value, so 4.6 reads as "four-and-a-half stars."
 *   No overlaid second row — avoids double-outline artifacts from the
 *   stroked SVG icon.
 * - Input mode: pass `editable` + `onChange`. Click sets value, hover previews.
 */
function slotMode(value, i) {
  // i is the star index (0-based). Fraction is how much of THIS star is filled.
  const frac = Math.max(0, Math.min(1, value - i));
  if (frac <= 0.25) return 'empty';
  if (frac < 0.75) return 'half';
  return 'full';
}

function StarSlot({ mode, size }) {
  if (mode === 'half') {
    return (
      <span className="star-slot star-slot--half">
        <StarIcon size={size} filled={false} />
        <span className="star-slot__fill">
          <StarIcon size={size} filled={true} />
        </span>
      </span>
    );
  }
  return (
    <span className={`star-slot star-slot--${mode}`}>
      <StarIcon size={size} filled={mode === 'full'} />
    </span>
  );
}

export default function StarRating({
  value = 0,
  count,
  size = 14,
  showNumber = true,
  editable = false,
  onChange,
  ariaLabel,
}) {
  const [hover, setHover] = useState(0);

  if (editable) {
    const displayValue = hover || value;
    return (
      <div
        className="star-rating star-rating--input"
        role="radiogroup"
        aria-label={ariaLabel || 'Rate from 1 to 5'}
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            className={`star-btn ${n <= displayValue ? 'is-on' : ''}`}
            onMouseEnter={() => setHover(n)}
            onFocus={() => setHover(n)}
            onClick={() => onChange?.(n)}
            aria-label={`${n} star${n === 1 ? '' : 's'}`}
            aria-checked={value === n}
            role="radio"
          >
            <StarIcon size={size + 6} filled={n <= displayValue} />
          </button>
        ))}
      </div>
    );
  }

  return (
    <span
      className="star-rating"
      aria-label={ariaLabel || (value ? `${value.toFixed(1)} out of 5` : 'No rating yet')}
    >
      <span className="star-rating__stars" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarSlot key={i} mode={slotMode(value, i)} size={size} />
        ))}
      </span>
      {showNumber && (
        <span className="star-rating__num">
          {value ? value.toFixed(1) : '—'}
          {typeof count === 'number' && value ? <span className="star-rating__count"> ({count})</span> : null}
        </span>
      )}
    </span>
  );
}
