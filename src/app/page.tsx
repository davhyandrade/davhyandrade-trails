import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import TrailsList from './_components/trails-list/trails-list.component';

function HomePage() {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 4, sm: 8 },
        pt: { xs: 10, md: 14 },
        pb: { xs: 28, md: 18 },
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', sm: 'flex-end' },
          gap: 6,
          mb: { xs: 8, md: 10 },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              mb: 2,
            }}
          >
            Diário de caminhadas
          </Typography>

          <Typography
            component="h1"
            sx={{
              color: 'text.primary',
              fontFamily: 'var(--font-display)',
              fontSize: { xs: 42, sm: 56 },
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: '-.045em',
            }}
          >
            Minhas trilhas
          </Typography>
        </Box>

        <Link href="/adicionar" style={{ textDecoration: 'none' }}>
          <Button
            component="span"
            endIcon={<ArrowUpRight size={18} />}
            sx={{
              color: 'primary.main',
              textTransform: 'none',
              fontWeight: 700,
              borderBottom: 1,
              borderBottomColor: 'primary.light',
              borderRadius: 0,
              px: 1,
            }}
          >
            Adicionar trilha
          </Button>
        </Link>
      </Stack>
      <TrailsList />
    </Box>
  );
}

export default HomePage;
