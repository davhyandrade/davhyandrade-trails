import { Box, Button, Typography } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import TrailForm from './_components/trail-form/trail-form.component';

function AddTrailPage() {
  return (
    <Box
      component="main"
      sx={{
        maxWidth: 720,
        mx: 'auto',
        px: { xs: 4, sm: 8 },
        pt: { xs: 8, md: 12 },
        pb: { xs: 28, md: 18 },
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Button
          component="span"
          startIcon={<ArrowLeft size={18} />}
          sx={{ color: 'text.secondary', textTransform: 'none', px: 0, mb: 6 }}
        >
          Voltar para as trilhas
        </Button>
      </Link>
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
        Nova memória
      </Typography>
      <Typography
        component="h1"
        sx={{
          color: 'text.primary',
          fontFamily: 'var(--font-display)',
          fontSize: { xs: 40, sm: 52 },
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        Adicionar trilha
      </Typography>
      <Typography sx={{ color: 'text.secondary', mt: 4, mb: 8, fontSize: 16 }}>
        Guarde o caminho em três detalhes essenciais.
      </Typography>
      <TrailForm />
    </Box>
  );
}

export default AddTrailPage;
