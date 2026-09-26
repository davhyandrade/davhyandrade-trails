'use client';

import { Stack } from '@mui/material';

import { useNavigationItems } from '@/app/_components/navigation-bar/navigation-bar.hooks';

import { MobileNavigationButton } from './navigation-bar-mobile.styles';

function NavigationBarMobile() {
  const items = useNavigationItems();

  return (
    <Stack
      component="nav"
      aria-label="Navegação principal"
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        bgcolor: 'primary.background',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3.5,
        zIndex: 'appBar',
      }}
    >
      <Stack
        direction="row"
        sx={{
          gap: 1,
        }}
      >
        {items.map(item => {
          const Icon = item.icon;

          return (
            <MobileNavigationButton
              key={item.href}
              href={item.href}
              variant="contained"
              color={item.active ? 'secondary' : 'ghostOnDark'}
              aria-current={item.active ? 'page' : undefined}
              startIcon={<Icon size={18} />}
            >
              {item.label}
            </MobileNavigationButton>
          );
        })}
      </Stack>
    </Stack>
  );
}

export default NavigationBarMobile;
