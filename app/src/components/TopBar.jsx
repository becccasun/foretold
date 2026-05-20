import React from 'react';
import { ChevronLeft, X, SparkIcon } from './Icons';

export default function TopBar({ title, onBack, right, karma, closeIcon = false }) {
  return (
    <div className="topbar">
      {onBack && (
        <button className="back" onClick={onBack} aria-label="Back">
          {closeIcon ? <X size={20} /> : <ChevronLeft size={20} />}
        </button>
      )}
      {title && <div className="title">{title}</div>}
      <div className="spacer" />
      {typeof karma === 'number' && (
        <div className="karma-pill">
          <span className="spark"><SparkIcon size={13} /></span>
          {karma.toLocaleString()}
        </div>
      )}
      {right}
    </div>
  );
}
