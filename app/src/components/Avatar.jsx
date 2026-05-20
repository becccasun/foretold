import React from 'react';

// Deterministic warm-toned avatar from a string seed.
// Renders a soft gradient blob with the user's initial.
const PALETTES = [
  ['#F4D7CB', '#D97557'],
  ['#DCE3CC', '#7A8C5C'],
  ['#F5E6C5', '#D9A441'],
  ['#D5E1EA', '#8AA4B8'],
  ['#E5D2DC', '#94627A'],
  ['#FBEEE7', '#B85C40'],
  ['#EDE5D8', '#8A8276'],
];

function hash(str = '') {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

export default function Avatar({ seed = '', name = '', size = 40, ring = false }) {
  const palette = PALETTES[hash(seed || name) % PALETTES.length];
  const initial = (name || seed || '?').trim().charAt(0).toUpperCase();
  return (
    <div
      className={`avatar${ring ? ' is-ring' : ''}`}
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${palette[0]} 0%, ${palette[1]} 100%)`,
        fontSize: Math.max(11, Math.round(size * 0.42)),
      }}
      aria-label={name || seed}
    >
      <span>{initial}</span>
    </div>
  );
}
