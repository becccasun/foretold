import React, { useState, useRef, useEffect } from 'react';
import Avatar from '../components/Avatar';
import { CHATS } from '../data';
import { ChevronLeft, SendIcon } from '../components/Icons';

export default function ChatThread({ nav, chatId }) {
  const chat = CHATS.find((c) => c.id === chatId) || CHATS[0];
  const [messages, setMessages] = useState(chat.messages);
  const [draft, setDraft] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    const body = draft.trim();
    if (!body) return;
    setMessages((m) => [...m, { from: 'me', body, time: 'Just now' }]);
    setDraft('');
    // Auto-reply for prototype feel
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'them', body: replyFor(body), time: 'Just now' }]);
    }, 900);
  };

  return (
    <div className="chat-thread">
      <div className="chat-header">
        <button className="back" onClick={() => nav.back()} aria-label="Back">
          <ChevronLeft size={20} />
        </button>
        <button
          className="chat-header-profile"
          onClick={() => chat.avatarSeed !== 'group' && nav.go('userProfile', { seed: chat.avatarSeed })}
          disabled={chat.avatarSeed === 'group'}
          aria-label={chat.avatarSeed !== 'group' ? `View ${chat.name}'s profile` : undefined}
        >
          <Avatar seed={chat.avatarSeed} name={chat.name} size={40} />
          <div className="info">
            <h3>{chat.name}</h3>
            <div className="sub">
              {chat.matchPercent ? `${chat.matchPercent}% match · ${chat.eventTitle}` : chat.eventTitle || 'From the feed'}
            </div>
          </div>
        </button>
      </div>
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.from}`}>
            {m.body}
            <span className="time">{m.time}</span>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="chat-input">
        <div className="field">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Write a message…"
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
        </div>
        <button className="send" onClick={send} aria-label="Send"><SendIcon size={18} /></button>
      </div>
    </div>
  );
}

function replyFor(text) {
  const t = text.toLowerCase();
  if (t.includes('meet') || t.includes('time') || t.includes('when')) return 'Works for me - see you then 🙌';
  if (t.includes('?')) return 'Good question. Let me think on it and circle back.';
  if (t.includes('thanks') || t.includes('thank')) return 'Of course! Glad it landed.';
  return 'Got it - appreciate you 🙏';
}
