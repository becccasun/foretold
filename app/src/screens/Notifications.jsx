import React from 'react';
import TopBar from '../components/TopBar';
import Avatar from '../components/Avatar';
import { UserPlusIcon } from '../components/Icons';

export default function Notifications({ nav, receivedRequests, onAccept, onDecline }) {
  return (
    <div>
      <TopBar title="Notifications" onBack={() => nav.back()} />

      {receivedRequests.length === 0 ? (
        <div className="notif-empty">
          <UserPlusIcon size={32} />
          <p>No new notifications</p>
          <span>Friend requests will appear here</span>
        </div>
      ) : (
        <div className="notif-list">
          <div className="notif-section-label">Friend Requests</div>
          {receivedRequests.map((req) => (
            <div key={req.seed} className="notif-row">
              <button
                className="notif-avatar"
                onClick={() => nav.go('userProfile', { seed: req.seed })}
                aria-label={`View ${req.name}'s profile`}
              >
                <Avatar seed={req.seed} name={req.name} size={48} />
              </button>
              <div className="notif-info">
                <div className="notif-name">{req.name}</div>
                <div className="notif-sub">Sent you a friend request · {req.timeAgo}</div>
                {req.message && <div className="notif-msg">"{req.message}"</div>}
                <div className="notif-actions">
                  <button className="notif-accept" onClick={() => onAccept(req.seed)}>
                    Accept
                  </button>
                  <button className="notif-decline" onClick={() => onDecline(req.seed)}>
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
