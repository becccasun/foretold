import React from 'react';
import TopBar from '../components/TopBar';
import Avatar from '../components/Avatar';
import { CHATS } from '../data';

export default function ChatList({ nav }) {
  return (
    <div>
      <TopBar />
      <div className="chat-list">
        <h1 className="serif">Conversations</h1>
        <p className="muted small" style={{ padding: '0 22px 14px' }}>Your event buddies, the people you've given feedback to, and friends from Foretold rooms.</p>
        {CHATS.map((c) => (
          <button key={c.id} className="chat-row" onClick={() => nav.go('chatThread', { id: c.id })}>
            <Avatar seed={c.avatarSeed} name={c.name} size={48} />
            <div className="info">
              <div className="top-line">
                <span className="name">{c.name}</span>
                {c.unread && <span className="badge" aria-label="Unread" />}
                <span className="time">{c.timeAgo}</span>
              </div>
              <div className="preview">{c.preview}</div>
              {c.eventTitle && <span className="event-tag">{c.eventTitle}</span>}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
