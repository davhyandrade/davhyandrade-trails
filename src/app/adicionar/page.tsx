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
        px: { xs: 2.25, sm: 4 },
        pt: { xs: 4, md: 6 },
        pb: { xs: 14, md: 9 },
      }}
    >
      <Link href="/" style={{ textDecoration: 'none' }}>
        <Button
          color="info"
          component="span"
          startIcon={<ArrowLeft size={18} />}
          sx={{ color: 'text.secondary', textTransform: 'none', px: 0, mb: 3 }}
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
          mb: 1.2,
        }}
      >
        Nova memória
      </Typography>
      <Typography
        component="h1"
        sx={{
          color: 'text.heading',
          fontFamily: 'var(--font-display)',
          fontSize: { xs: 40, sm: 52 },
          lineHeight: 1,
          fontWeight: 700,
        }}
      >
        Adicionar trilha
      </Typography>
      <Typography
        sx={{ color: 'text.secondary', mt: 1.5, mb: 4, fontSize: 16 }}
      >
        Guarde o caminho em três detalhes essenciais.
      </Typography>
      <TrailForm />
    </Box>
  );
}

export default AddTrailPage;
