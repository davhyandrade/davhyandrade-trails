'use client';
import { Box, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Footprints, Home, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { colors } from '@/shared/lib/mui/theme/palette/colors/colors.constant';

import { navigationStyles } from './navigation-bar.styles';
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
              <Box
                key={item.href}
                component={Link}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                sx={{
                  minWidth: { xs: 142, md: 'auto' },
                  minHeight: 48,
                  px: { xs: 3, md: 4.5 },
                  borderRadius: { xs: 2.5, md: 99 },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 0.5, md: 2 },
                  color: active
                    ? 'secondary.contrastText'
                    : alpha(colors.white[0], 0.72),
                  bgcolor: active ? 'secondary.main' : 'transparent',
                  textDecoration: 'none',
                  '&:hover': {
                    color: active ? 'secondary.contrastText' : 'common.white',
                    bgcolor: active
                      ? 'secondary.main'
                      : alpha(colors.white[0], 0.08),
                  },
                }}
              >
                <Icon size={18} />

                <Typography
                  component="span"
                  sx={{ fontSize: { xs: 12, md: 14 }, fontWeight: 700 }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default Navigation;
