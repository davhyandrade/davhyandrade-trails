'use client';
import { Box, Stack, Typography } from '@mui/material';
import { Footprints, Home, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navigationStyles } from './navigation.styles';
import type { NavigationItem } from './navigation.types';

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
          alignItems="center"
          gap={1.25}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              bgcolor: '#D9F2C8',
              color: '#12351F',
            }}
          >
            <Footprints size={21} />
          </Box>

          <Typography
            sx={{
              color: '#F6F4E8',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Trilhas
          </Typography>
        </Stack>

        <Stack direction="row" gap={0.5}>
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
                  px: { xs: 1.5, md: 2.25 },
                  borderRadius: { xs: 2.5, md: 99 },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 0.25, md: 0.9 },
                  color: active ? '#12351F' : 'rgba(246,244,232,.72)',
                  bgcolor: active ? '#D9F2C8' : 'transparent',
                  textDecoration: 'none',
                  '&:hover': {
                    color: active ? '#12351F' : '#fff',
                    bgcolor: active ? '#D9F2C8' : 'rgba(255,255,255,.08)',
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
