import React from 'react';
import { SparkIcon } from './Icons';

export default function KarmaToast({ message, sub }) {
  return (
    <div className="toast" role="status" aria-live="polite">
      <span className="toast-icon"><SparkIcon size={14} /></span>
      <span className="toast-text">
        <span>{message}</span>
        {sub && <span>{sub}</span>}
      </span>
    </div>
  );
}
