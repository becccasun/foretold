import React from 'react';
import { PROJECT_BADGES } from '../data';
import { StarIcon } from './Icons';

/**
 * BadgePill — small editorial tag rendered next to the category tag.
 * Variants: users-favorite (rose), popular-week (amber), staff-pick (plum).
 */
export default function BadgePill({ id, size = 'sm' }) {
  const meta = PROJECT_BADGES[id];
  if (!meta) return null;
  return (
    <span className={`badge-pill badge-pill--${meta.tone} badge-pill--${size}`}>
      <StarIcon size={size === 'lg' ? 13 : 11} filled />
      <span>{meta.label}</span>
    </span>
  );
}
