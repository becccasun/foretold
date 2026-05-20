import React from 'react';
import {
  ForkKnife, Cpu, PaintBrush, Leaf, Scissors, Palette,
  BookOpen, Plant, FilmSlate, CurrencyDollar, Wrench,
  UsersThree, MusicNote, Heartbeat, Airplane, Baby,
} from '@phosphor-icons/react';

const INTEREST_ICONS = {
  food: ForkKnife,
  tech: Cpu,
  design: PaintBrush,
  wellness: Leaf,
  fashion: Scissors,
  art: Palette,
  education: BookOpen,
  climate: Plant,
  media: FilmSlate,
  finance: CurrencyDollar,
  hardware: Wrench,
  community: UsersThree,
  music: MusicNote,
  health: Heartbeat,
  travel: Airplane,
  kids: Baby,
};

export const InterestIcon = ({ id, size = 16 }) => {
  const Icon = INTEREST_ICONS[id] || Palette;
  return <Icon size={size} weight="regular" />;
};

const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const HomeIcon = ({ size = 24, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M3.5 11 12 4l8.5 7" />
    <path d="M5 10.5V20h14v-9.5" fill={filled ? 'currentColor' : 'none'} />
  </svg>
);

export const CalendarIcon = ({ size = 24, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" />
    <path d="M3.5 9.5h17" />
    <path d="M8 3v4M16 3v4" />
  </svg>
);

export const PlusIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const ChatIcon = ({ size = 24, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M4 6.5C4 5.7 4.7 5 5.5 5h13c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H10l-4 4v-4H5.5C4.7 16 4 15.3 4 14.5v-8Z" fill={filled ? 'currentColor' : 'none'} />
  </svg>
);

export const UserIcon = ({ size = 24, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="8.5" r="3.5" fill={filled ? 'currentColor' : 'none'} />
    <path d="M5 19c.8-3.5 3.7-5.5 7-5.5s6.2 2 7 5.5" />
  </svg>
);

export const ChevronLeft = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M14 6l-6 6 6 6" />
  </svg>
);

export const ChevronRight = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M10 6l6 6-6 6" />
  </svg>
);

export const X = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const BookmarkIcon = ({ size = 22, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M6.5 4h11v17l-5.5-3.5L6.5 21V4Z" fill={filled ? 'currentColor' : 'none'} />
  </svg>
);

export const SparkIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
  </svg>
);

export const HeartIcon = ({ size = 18, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M12 20s-7-4.3-7-9.5C5 8 7 6 9.5 6c1.5 0 2.7.8 3.5 2 .8-1.2 2-2 3.5-2C19 6 21 8 21 10.5 21 15.7 14 20 14 20l-1 1-1-1Z" fill={filled ? 'currentColor' : 'none'} />
  </svg>
);

export const StarIcon = ({ size = 18, filled = false }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="m12 4 2.4 5 5.6.8-4 4 1 5.6L12 16.8 6.9 19.4l1-5.6-4-4L9.6 9 12 4Z" fill={filled ? 'currentColor' : 'none'} />
  </svg>
);

export const CheckIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="m5 12 4.5 4.5L19 7" />
  </svg>
);

export const SendIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M4 12 20 4l-3 16-4-7-7-1Z" />
  </svg>
);

export const SearchIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-4.3-4.3" />
  </svg>
);

export const PinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M12 22c5-5.5 7-9 7-12a7 7 0 1 0-14 0c0 3 2 6.5 7 12Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const ClockIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);

export const GridIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);

export const FeedIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <rect x="4" y="5" width="16" height="6" rx="1.5" />
    <rect x="4" y="13" width="16" height="6" rx="1.5" />
  </svg>
);

export const SeedIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
    <path d="M12 22c0-5 3-9 8-10-1 5-4 9-8 10Z" />
    <path d="M12 22c0-5-3-9-8-10 1 5 4 9 8 10Z" />
    <path d="M12 22V12" />
  </svg>
);
