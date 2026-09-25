'use client';
import { Box, Stack, Typography } from '@mui/material';
import { Footprints, Home, Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';

import { NavigationButton, navigationStyles } from './navigation-bar.styles';
import type { NavigationItem } from './navigation-bar.types';

const items: NavigationItem[] = [
  { href: '/', label: 'Minhas trilhas' },
  { href: '/adicionar', label: 'Adicionar' },
];

function Navigation() {
  const pathname = usePathname();

  return (
    <Box
      component="nav"
      aria-label="Navegação principal"
      sx={navigationStyles.root}
    >
      <Box sx={navigationStyles.inner}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              bgcolor: 'secondary.main',
              color: 'secondary.contrastText',
            }}
          >
            <Footprints size={20} />
          </Box>

          <Typography
            sx={{
              color: 'primary.contrastText',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Trilhas
          </Typography>
        </Stack>

        <Stack
          direction="row"
          sx={{
            gap: 1,
          }}
        >
          {items.map((item, i) => {
            const active = pathname === item.href;
            const Icon = i ? Plus : Home;

            return (
              <NavigationButton
                key={item.href}
                href={item.href}
                variant="rounded"
                color={active ? 'secondary' : 'ghostOnDark'}
                aria-current={active ? 'page' : undefined}
                startIcon={<Icon size={18} />}
              >
                {item.label}
              </NavigationButton>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default Navigation;
