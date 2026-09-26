import { usePathname } from 'next/navigation';

import { navigationItems } from './navigation-bar.constants';

export const useNavigationItems = () => {
  const pathname = usePathname();

  return navigationItems.map(item => ({
    ...item,
    active: pathname === item.href,
  }));
};
