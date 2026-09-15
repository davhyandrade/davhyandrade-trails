'use client';
import { Box, Button, Skeleton, Stack, Typography } from '@mui/material';
import { ArrowUpRight, Footprints } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import TrailCard from '@/app/_components/trail-card/trail-card.component';
import { getTrails } from '@/app/_utils/trails/trails';
import type { Trail } from '@/app/_utils/trails/trails.types';

function TrailsList() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTrails(getTrails());
      setHydrated(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const grid = {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      sm: 'repeat(2,1fr)',
      lg: 'repeat(3,1fr)',
    },
    gap: 3,
  };

  if (!hydrated)
    return (
      <Box sx={grid}>
        {[0, 1, 2].map(i => (
          <Skeleton
            key={i}
            variant="rounded"
            height={326}
            sx={{ borderRadius: 4 }}
          />
        ))}
      </Box>
    );

  if (!trails.length)
    return (
      <Stack
        alignItems="center"
        textAlign="center"
        sx={{
          border: '1px dashed rgba(18,53,31,.24)',
          borderRadius: 4,
          px: 3,
          py: 8,
        }}
      >
        <Footprints size={34} />

        <Typography
          component="h2"
          sx={{
            mt: 2,
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 25,
          }}
        >
          Sua próxima memória começa na trilha.
        </Typography>

        <Typography sx={{ mt: 1, mb: 3, color: '#617067' }}>
          Ainda não há trilhas registradas neste navegador.
        </Typography>

        <Button
          component={Link}
          href="/adicionar"
          variant="contained"
          endIcon={<ArrowUpRight size={18} />}
          sx={{ bgcolor: '#173E29', borderRadius: 99, textTransform: 'none' }}
        >
          Adicionar a primeira
        </Button>
      </Stack>
    );

  return (
    <Box sx={grid}>
      {trails.map((trail, index) => (
        <TrailCard key={trail.id} trail={trail} index={index} />
      ))}
    </Box>
  );
}

export default TrailsList;
