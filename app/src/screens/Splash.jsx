import React from 'react';

export default function Splash({ nav }) {
  return (
    <div className="splash">
      <div className="splash-art" aria-hidden="true" />
      <div className="splash-eyebrow">Foretold</div>
      <h1>The first step is the <em>scariest</em> one. Let's take it together.</h1>
      <p>
        Share an idea you've been holding onto. Get honest feedback from people who started right where you are. Find someone to show up to the room with.
      </p>
      <div className="spacer" />
      <div className="actions">
        <button className="btn-primary" onClick={() => nav.go('onboarding')}>
          Get started
        </button>
        <button className="btn-ghost" onClick={() => nav.go('home')}>
          I have an account
        </button>
      </div>
    </div>
  );
}
