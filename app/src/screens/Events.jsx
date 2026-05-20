import React, { useState, useMemo } from 'react';
import { EVENTS, EVENT_CATEGORIES } from '../data';
import { PinIcon, ClockIcon, CalendarIcon, ChevronLeft, ChevronRight } from '../components/Icons';

const LOCATIONS = ['All', 'Williamsburg, NY', 'Prospect Park, NY', 'Online'];

const MAY_2026 = {
  month: 'May',
  year: 2026,
  startDay: 4, // Friday (Mon=0, Tue=1, Wed=2, Thu=3, Fri=4)
  days: 31,
};

const WEEKDAYS = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];

function buildCalendarGrid(info) {
  const cells = [];
  for (let i = 0; i < info.startDay; i++) cells.push(null);
  for (let d = 1; d <= info.days; d++) cells.push(d);
  return cells;
}

export default function Events({ nav }) {
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('All');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDays, setSelectedDays] = useState(new Set());

  const eventDays = useMemo(() => new Set(EVENTS.map((e) => e.day)), []);

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => {
      if (category !== 'all' && e.category !== category) return false;
      if (location !== 'All' && e.location !== location) return false;
      if (selectedDays.size > 0 && !selectedDays.has(e.day)) return false;
      return true;
    });
  }, [category, location, selectedDays]);

  const toggleDay = (d) => {
    setSelectedDays((s) => {
      const next = new Set(s);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });
  };

  const calendarCells = buildCalendarGrid(MAY_2026);

  return (
    <div>
      <div className="topbar">
        <div className="title" style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, letterSpacing: '-0.01em' }}>
          Events
        </div>
        <div className="spacer" />
        <button
          className={`cal-toggle ${showCalendar ? 'active' : ''}`}
          onClick={() => setShowCalendar((v) => !v)}
          aria-label="Toggle calendar"
        >
          <CalendarIcon size={18} />
        </button>
      </div>

      <div className="events">
        {/* Location filter */}
        <div className="ev-filter-row">
          <PinIcon size={14} />
          <div className="ev-pills">
            {LOCATIONS.map((loc) => (
              <button
                key={loc}
                className={`ev-pill ${location === loc ? 'active' : ''}`}
                onClick={() => setLocation(loc)}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="ev-category-row">
          {EVENT_CATEGORIES.map((c) => (
            <button
              key={c.id}
              className={`ev-cat ${category === c.id ? 'active' : ''}`}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Calendar */}
        {showCalendar && (
          <div className="ev-calendar">
            <div className="cal-header">
              <span className="cal-month">{MAY_2026.month} {MAY_2026.year}</span>
              {selectedDays.size > 0 && (
                <button className="cal-clear" onClick={() => setSelectedDays(new Set())}>Clear</button>
              )}
            </div>
            <div className="cal-grid">
              {WEEKDAYS.map((d) => (
                <div key={d} className="cal-weekday">{d}</div>
              ))}
              {calendarCells.map((day, i) => (
                <button
                  key={i}
                  className={[
                    'cal-day',
                    day === null ? 'empty' : '',
                    day === 21 ? 'today' : '',
                    eventDays.has(day) ? 'has-event' : '',
                    selectedDays.has(day) ? 'selected' : '',
                  ].join(' ')}
                  disabled={!day}
                  onClick={() => day && toggleDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Section label */}
        <div className="ev-section-label">
          {selectedDays.size > 0
            ? `${filtered.length} event${filtered.length !== 1 ? 's' : ''} on selected days`
            : 'This week'}
        </div>

        {/* Event cards */}
        {filtered.length === 0 ? (
          <div className="ev-empty">
            <p>No events match your filters.</p>
            <button className="btn-ghost" onClick={() => { setCategory('all'); setLocation('All'); setSelectedDays(new Set()); }}>
              Clear all filters
            </button>
          </div>
        ) : (
          filtered.map((e) => (
            <button key={e.id} className="event-card" onClick={() => nav.go('eventDetail', { id: e.id })}>
              <div className="ev-card-row">
                <div className="ev-date-block">
                  <span className="ev-date-day">{e.day}</span>
                  <span className="ev-date-wd">{e.weekday}</span>
                </div>
                <div className="ev-card-info">
                  <div className="ev-card-cat">{EVENT_CATEGORIES.find((c) => c.id === e.category)?.label}</div>
                  <h3>{e.title}</h3>
                  <p>{e.blurb}</p>
                  <div className="meta">
                    <span><ClockIcon size={12} /> {e.time}</span>
                    <span className="dot" />
                    <span><PinIcon size={12} /> {e.location}</span>
                  </div>
                  <div className="ev-going">{e.going} going</div>
                </div>
                <div className="ev-cover-thumb" style={{ background: e.cover }} />
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
}
