import { Box, Button, Stack, Typography } from '@mui/material';
import { CloudOff, RotateCcw } from 'lucide-react';

function OfflinePage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: { xs: 'calc(100dvh - 76px)', md: 'calc(100dvh - 82px)' },
        display: 'grid',
        placeItems: 'center',
        px: 2.25,
        py: 6,
      }}
    >
      <Stack alignItems="center" textAlign="center" sx={{ maxWidth: 480 }}>
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            display: 'grid',
            placeItems: 'center',
            bgcolor: '#D9F2C8',
            color: '#173E29',
          }}
        >
          <CloudOff size={32} />
        </Box>

        <Typography
          component="h1"
          sx={{
            mt: 3,
            color: '#153823',
            fontFamily: 'var(--font-display)',
            fontSize: { xs: 38, sm: 48 },
            lineHeight: 1,
            fontWeight: 700,
          }}
        >
          Você está sem conexão
        </Typography>

        <Typography sx={{ mt: 2, color: '#617067', lineHeight: 1.6 }}>
          As trilhas já carregadas continuam disponíveis. Reconecte-se para
          acessar conteúdos que ainda não estão neste dispositivo.
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} gap={1.5} sx={{ mt: 4 }}>
          <Button
            component="a"
            href="/"
            variant="contained"
            startIcon={<RotateCcw size={18} />}
            sx={{ bgcolor: '#173E29', borderRadius: 99, textTransform: 'none' }}
          >
            Tentar novamente
          </Button>
          <Button
            component="a"
            href="/"
            sx={{ color: '#173E29', borderRadius: 99, textTransform: 'none' }}
          >
            Ver trilhas salvas
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default OfflinePage;
