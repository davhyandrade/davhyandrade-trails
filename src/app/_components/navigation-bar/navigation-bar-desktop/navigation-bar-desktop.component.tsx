'use client';

import { Button, ButtonBase, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { Footprints } from 'lucide-react';

import { useNavigationItems } from '@/app/_components/navigation-bar/navigation-bar.hooks';

function NavigationBarDesktop() {
  const items = useNavigationItems();

  return (
    <Stack
      component="nav"
      aria-label="Navegação principal"
      sx={theme => ({
        display: { xs: 'none', md: 'flex' },
        position: 'sticky',
        top: 0,
        zIndex: 'appBar',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(180deg, ${theme.palette.common.white}, ${theme.palette.background.default})`,
      })}
    >
      <Stack
        direction="row"
        sx={{
          width: '100%',
          maxWidth: 'lg',
          px: 8,
          py: 4,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <ButtonBase href="/">
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: 'center',
            }}
          >
            <Stack
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Footprints size={20} />
            </Stack>

            <Typography
              sx={{
                color: 'primary.main',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 24,
              }}
            >
              Trilhas
            </Typography>
          </Stack>
        </ButtonBase>

        <Stack
          direction="row"
          sx={{
            gap: 1,
          }}
        >
          {items.map(item => {
            const Icon = item.icon;

            return (
              <Button
                key={item.href}
                href={item.href}
                variant="rounded"
                color="ghostOnLight"
                aria-current={item.active ? 'page' : undefined}
                startIcon={<Icon size={18} />}
                sx={theme => ({
                  ...(item.active && {
                    bgcolor: alpha(theme.palette.text.primary, 0.08),
                    color: 'text.primary',
                  }),
                })}
              >
                {item.label}
              </Button>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default NavigationBarDesktop;
