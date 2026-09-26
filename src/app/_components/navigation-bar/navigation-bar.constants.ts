import { Home, Plus } from 'lucide-react';

import type { NavigationItem } from './navigation-bar.types';

export const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Minhas trilhas', icon: Home },
  { href: '/adicionar', label: 'Adicionar', icon: Plus },
];
