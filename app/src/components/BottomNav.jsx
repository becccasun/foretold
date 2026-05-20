import React from 'react';
import { HomeIcon, CalendarIcon, PlusIcon, ChatIcon, UserIcon } from './Icons';

const TABS = [
  { name: 'home', icon: HomeIcon },
  { name: 'events', icon: CalendarIcon },
  { name: 'newProject', icon: PlusIcon, plus: true },
  { name: 'chat', icon: ChatIcon },
  { name: 'profile', icon: UserIcon },
];

const ACTIVE_MAP = {
  home: 'home',
  projectDetail: 'home',
  feedbackForm: 'home',
  events: 'events',
  eventDetail: 'events',
  personalityTest: 'events',
  buddyMatches: 'events',
  newProject: 'newProject',
  chat: 'chat',
  chatThread: 'chat',
  profile: 'profile',
};

export default function BottomNav({ active, nav }) {
  const activeTab = ACTIVE_MAP[active] || 'home';
  return (
    <nav className="bottom-nav" aria-label="Primary">
      {TABS.map(({ name, icon: Icon, plus }) => {
        const isActive = activeTab === name;
        if (plus) {
          return (
            <button
              key={name}
              className={`nav-plus ${isActive ? 'active' : ''}`}
              onClick={() => nav.go('newProject')}
              aria-label="New project"
            >
              <Icon size={22} />
            </button>
          );
        }
        return (
          <button
            key={name}
            className={isActive ? 'active' : ''}
            onClick={() => nav.go(name)}
            aria-label={name}
          >
            <Icon filled={isActive} size={22} />
          </button>
        );
      })}
    </nav>
  );
}
