import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Avatar from '../components/Avatar';
import { POTENTIAL_BUDDIES, EVENTS } from '../data';
import { CheckIcon, ChevronRight, SparkIcon } from '../components/Icons';

export default function BuddyMatches({ nav, eventId }) {
  const event = EVENTS.find((e) => e.id === eventId) || EVENTS[0];
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    const buddy = POTENTIAL_BUDDIES.find((b) => b.id === selected);
    return (
      <div>
        <TopBar onBack={() => nav.go('events')} title="You're matched" />
        <div className="bm">
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-tint), #FBEEE7)',
            border: '1px solid var(--accent-soft)',
            borderRadius: 'var(--r-lg)',
            padding: 22,
            textAlign: 'center',
            marginBottom: 18,
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: -10, marginBottom: 14 }}>
              <Avatar seed="you" size={56} ring />
              <div style={{
                margin: '0 -12px', zIndex: 2,
                background: 'var(--accent)', color: '#fff',
                width: 30, height: 30, borderRadius: 999,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 600,
              }}>
                <CheckIcon size={16} />
              </div>
              <Avatar seed={buddy.avatarSeed} name={buddy.name} size={56} ring />
            </div>
            <h2 className="serif" style={{ fontSize: 22, fontWeight: 500, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
              {buddy.name.split(' ')[0]} will be your buddy at {event.title}.
            </h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14, margin: 0 }}>
              We sent them a note. Now go say hi - pick an icebreaker.
            </p>
          </div>

          <p className="muted small" style={{ marginBottom: 10 }}>Send a starter</p>
          {[
            'What time should we meet up?',
            'Want to grab coffee beforehand?',
            'First time at one of these - you?',
          ].map((s, i) => (
            <button
              key={i}
              className="tile"
              onClick={() => nav.go('chatThread', { id: 'c1' })}
              style={{ marginBottom: 8, cursor: 'pointer' }}
            >
              <div className="body">
                <p style={{ color: 'var(--ink)' }}>{s}</p>
              </div>
              <ChevronRight size={18} />
            </button>
          ))}

          <button
            className="btn-ghost"
            style={{ width: '100%', marginTop: 10 }}
            onClick={() => nav.go('chat')}
          >
            Open chat
          </button>
        </div>
      </div>
    );
  }

  if (selected) {
    const buddy = POTENTIAL_BUDDIES.find((b) => b.id === selected);
    return (
      <div>
        <TopBar onBack={() => setSelected(null)} title="Confirm buddy" />
        <div className="bm">
          <div style={{ textAlign: 'center', padding: '12px 12px 22px' }}>
            <Avatar seed={buddy.avatarSeed} name={buddy.name} size={86} ring />
            <h2 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: '14px 0 6px', letterSpacing: '-0.01em' }}>{buddy.name}</h2>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14, margin: '0 0 10px' }}>{buddy.bio}</p>
            <span className="karma-pill" style={{ fontSize: 14, height: 34, padding: '0 14px' }}>
              <SparkIcon size={12} /> {buddy.percent}% match
            </span>
          </div>

          <div style={{
            background: 'var(--surface-soft)',
            borderRadius: 'var(--r-md)',
            padding: 14,
            marginBottom: 16,
            fontSize: 13.5,
            lineHeight: 1.55,
            color: 'var(--ink-soft)',
          }}>
            You'll get along because you both said you'd <strong style={{ color: 'var(--ink)' }}>find one person and have a real conversation</strong>, and you're both worried about <strong style={{ color: 'var(--ink)' }}>doing it alone</strong>.
          </div>

          <button
            className="btn-primary accent"
            style={{ width: '100%' }}
            onClick={() => setConfirmed(true)}
          >
            Send {buddy.name.split(' ')[0]} a buddy request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <TopBar onBack={() => nav.back()} title="Potential buddies" />
      <div className="bm">
        <div className="bm-banner">
          Here are the people we think you'd actually get along with at <strong>{event.title}</strong>. Pick someone, send a buddy request, and meet up before the event.
        </div>
        {POTENTIAL_BUDDIES.map((b) => (
          <button key={b.id} className="bm-card" onClick={() => setSelected(b.id)}>
            <Avatar seed={b.avatarSeed} name={b.name} size={48} />
            <div className="info">
              <div className="name">{b.name}</div>
              <div className="bio">{b.bio}</div>
              <div className="shared">
                {b.shared.map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
            <div className="match">
              <div className="pct">{b.percent}%</div>
              <div className="lbl">match</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
