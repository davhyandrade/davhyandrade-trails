import initialTrails from '@/app/_data/trails.json';

import type { Trail } from './trails.types';

const STORAGE_KEY = 'trails:list';

export function getTrails(): Trail[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    const trails = stored ? (JSON.parse(stored) as Trail[]) : initialTrails;

    return [...trails].sort((a, b) => b.date.localeCompare(a.date));
  } catch {
    return [...initialTrails].sort((a, b) => b.date.localeCompare(a.date));
  }
}

export function addTrail(trail: Trail): Trail[] {
  const trails = [trail, ...getTrails()].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(trails));

  return trails;
}

export function createTrailId(name: string, date: string): string {
  const slug = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return `${slug || 'trilha'}-${date}-${crypto.randomUUID().slice(0, 8)}`;
}

export function formatTrailDate(date: string): string {
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
}
