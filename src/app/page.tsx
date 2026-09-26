import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowUpRight } from 'lucide-react';

import Footer from './_components/footer/footer.component';
import TrailsList from './_components/trails-list/trails-list.component';

function HomePage() {
  return (
    <>
      <Box
        component="main"
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          p: { xs: 4, sm: 8 },
          pt: { xs: 10, md: 14 },
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

          <Button href="/adicionar" endIcon={<ArrowUpRight size={18} />}>
            Adicionar trilha
          </Button>
        </Stack>
        <TrailsList />
      </Box>

      <Footer />
    </>
  );
}

export default HomePage;
