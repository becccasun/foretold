import React from 'react';

const LOGO_SRC = `${import.meta.env.BASE_URL}foretold-logo.svg`;

export default function Splash({ nav }) {
  return (
    <div className="splash">
      <div className="splash-stage">
        <img className="splash-logo" src={LOGO_SRC} alt="Foretold" />
        <h1 className="splash-wordmark">Foretold</h1>
      </div>
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
