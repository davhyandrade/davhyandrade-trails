import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowLeft, MapPinOff } from 'lucide-react';

function NotFoundPage() {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        isolation: 'isolate',
        overflow: 'hidden',
        bgcolor: '#F3F1E6',
        backgroundImage:
          'radial-gradient(ellipse at 50% 45%, #fffdf5 10%, transparent 65%)',
        minHeight: { xs: '100dvh', md: 'calc(100dvh - 82px)' },
        display: 'grid',
        placeItems: 'center',
        px: 2.25,
        pt: 6,
        pb: { xs: 'calc(76px + 48px)', md: 6 },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(243,241,230,.96) 0%, rgba(243,241,230,.85) 28%, rgba(243,241,230,.25) 60%, transparent 80%)',
        },
      }}
    >
      <Box
        component="svg"
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax meet"
        sx={{
          position: 'absolute',
          bottom: { xs: 76, md: 0 },
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          minWidth: 720,
          height: 'auto',
          aspectRatio: '1440 / 400',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      >
        <circle cx="1120" cy="90" r="42" fill="#E6D9AE" />
        <path
          d="M0 265 170 110 260 186 430 38 615 242 760 152 850 218 1030 68 1230 230 1360 125 1440 190V400H0Z"
          fill="#D6DFCD"
        />
        <path
          d="m350 126 80-88 86 95-59-26-25 19-29-31Z M966 137l64-69 75 89-49-24-25 15-23-31Z"
          fill="#F3F1E6"
        />
        <path
          d="M0 295 140 212 290 302 470 182 630 310 860 218 990 285 1200 165 1440 295V400H0Z"
          fill="#A9BE9C"
        />
        <path
          d="M0 310Q180 260 365 330T730 325T1100 302T1440 320V400H0Z"
          fill="#789774"
        />
        <path
          d="M0 366Q210 304 430 375T870 356T1220 350T1440 345V400H0Z"
          fill="#456F50"
        />
        <path
          d="M735 306C660 325 820 333 755 353S662 380 640 400H795C803 372 853 364 812 348S700 326 745 306Z"
          fill="#E6D9AE"
        />
        <g fill="#2C553C">
          <path d="M180 350v-85h8v85Zm-32-27 36-65 36 65Zm7-31 29-56 29 56Z" />
          <path d="M270 376V268h9v108Zm-40-30 44-80 44 80Zm9-40 35-69 35 69Z" />
          <path d="M1080 371v-91h8v91Zm-34-26 38-70 38 70Zm7-35 31-60 31 60Z" />
          <path d="M1190 360V245h10v115Zm-40-32 45-82 45 82Zm8-41 37-72 37 72Z" />
        </g>
        <g stroke="#456F50" strokeWidth="3" strokeLinecap="round" fill="none">
          <path d="M985 95q9-9 18 0 9-9 18 0M940 120q6-6 12 0 6-6 12 0" />
        </g>
        <g transform="translate(860 323) rotate(6)">
          <path d="M0 0v49" stroke="#5B6345" strokeWidth="5" />
          <path d="M-24 0H22L32 10 22 20H-24Z" fill="#F3E7C7" />
          <path
            d="M-13 10H15m-5-5 5 5-5 5"
            fill="none"
            stroke="#456F50"
            strokeWidth="2"
          />
        </g>
      </Box>

      <Stack
        alignItems="center"
        textAlign="center"
        sx={{ maxWidth: 480, position: 'relative' }}
      >
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
