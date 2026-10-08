import type { ReactNode } from 'react';

export type StatusScreenProps = {
  icon: ReactNode;
  eyebrow?: string;
  title: string;
  description: string;
  actions: ReactNode;
};
