import React from 'react';
import TopBar from '../components/TopBar';

export default function Settings({ nav, theme, setTheme, anonymousByDefault, setAnonymousByDefault }) {
  return (
    <div>
      <TopBar onBack={() => nav.back()} title="Settings" />
      <div className="settings">
        <section className="settings-group">
          <div className="settings-group-label">Appearance</div>
          <div className="settings-row">
            <div className="t-text">
              <h4>Theme</h4>
              <p>Switch between light and dark mode.</p>
            </div>
            <div className="seg-toggle" role="radiogroup" aria-label="Theme">
              <button
                className={theme === 'light' ? 'active' : ''}
                onClick={() => setTheme('light')}
                role="radio"
                aria-checked={theme === 'light'}
              >
                Light
              </button>
              <button
                className={theme === 'dark' ? 'active' : ''}
                onClick={() => setTheme('dark')}
                role="radio"
                aria-checked={theme === 'dark'}
              >
                Dark
              </button>
            </div>
          </div>
        </section>

        <section className="settings-group">
          <div className="settings-group-label">Privacy</div>
          <div className="settings-row">
            <div className="t-text">
              <h4>Stay anonymous until I get feedback</h4>
              <p>
                New projects will show as <em>Anonymous</em> in the feed. Your name and avatar are revealed only after
                someone has reviewed your work - so first impressions aren't shaped by who you are.
              </p>
            </div>
            <button
              className={`switch ${anonymousByDefault ? 'on' : ''}`}
              onClick={() => setAnonymousByDefault(!anonymousByDefault)}
              role="switch"
              aria-checked={anonymousByDefault}
              aria-label="Stay anonymous until I get feedback"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
