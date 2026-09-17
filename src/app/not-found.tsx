import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowLeft, MapPinOff } from 'lucide-react';

function NotFoundPage() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: { xs: '100dvh', md: 'calc(100dvh - 82px)' },
        display: 'grid',
        placeItems: 'center',
        px: 2.25,
        pt: 6,
        pb: { xs: 'calc(76px + 48px)', md: 6 },
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
          <MapPinOff size={32} aria-hidden="true" />
        </Box>

        <Typography
          sx={{
            mt: 3,
            color: '#52705D',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
          }}
        >
          Erro 404
        </Typography>

        <Typography
          component="h1"
          sx={{
            mt: 1.2,
            color: '#153823',
            fontFamily: 'var(--font-display)',
            fontSize: { xs: 38, sm: 48 },
            lineHeight: 1.1,
            fontWeight: 700,
          }}
        >
          Página não encontrada
        </Typography>

        <Typography sx={{ mt: 2, color: '#617067', lineHeight: 1.6 }}>
          Este caminho não existe ou mudou de endereço. Volte ao início para
          encontrar suas trilhas.
        </Typography>

        <Button
          component="a"
          href="/"
          variant="contained"
          startIcon={<ArrowLeft size={18} aria-hidden="true" />}
          sx={{
            mt: 4,
            minHeight: 48,
            px: 3,
            bgcolor: '#173E29',
            color: '#F6F4E8',
            borderRadius: 99,
            textTransform: 'none',
            fontWeight: 700,
            '&:hover': { bgcolor: '#12351F' },
            '&:focus-visible': {
              outline: '3px solid #173E29',
              outlineOffset: 4,
            },
          }}
        >
          Voltar ao início
        </Button>
      </Stack>
    </Box>
  );
}

export default NotFoundPage;
