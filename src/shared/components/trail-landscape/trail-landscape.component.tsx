import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { useId } from 'react';

import { colors } from '@/shared/lib/mui/theme/palette/colors/colors.constant';

import type { TrailLandscapeProps } from './trail-landscape.types';

const trailHill = 'M0 310Q180 260 365 330T730 325T1100 302T1440 320V400H0Z';

function TrailLandscape({ opacity = 1 }: TrailLandscapeProps) {
  const trailHillClipId = useId();

  return (
    <Box
      component="svg"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax meet"
      sx={{
        display: 'block',
        width: '100%',
        height: 'auto',
        aspectRatio: '1440 / 400',
        opacity,
        pointerEvents: 'none',
      }}
    >
      <defs>
        <clipPath id={trailHillClipId}>
          <path d={trailHill} />
        </clipPath>
      </defs>
      <path
        d="M0 265 170 110 260 186 430 38 615 242 760 152 850 218 1030 68 1230 230 1360 125 1440 190V400H0Z"
        fill={alpha(colors.green[150], 0.4)}
      />
      <path
        d="m350 126 80-88 86 95-59-26-25 19-29-31Z M966 137l64-69 75 89-49-24-25 15-23-31Z"
        fill={colors.white[150]}
      />
      <path
        d="M0 295 140 212 290 302 470 182 630 310 860 218 990 285 1200 165 1440 295V400H0Z"
        fill={colors.green[150]}
      />
      <path d={trailHill} fill={colors.green[250]} />
      <path
        d="M0 366Q210 304 430 375T870 356T1220 350T1440 345V400H0Z"
        fill={colors.green[350]}
      />
      <path
        d="M735 306C660 325 820 333 755 353S662 380 640 400H795C803 372 853 364 812 348S700 326 745 306Z"
        fill={alpha(colors.orange[500], 0.65)}
        clipPath={`url(#${trailHillClipId})`}
      />
      <g fill={colors.green[500]}>
        <path d="M180 350v-85h8v85Zm-32-27 36-65 36 65Zm7-31 29-56 29 56Z" />
        <path d="M270 376V268h9v108Zm-40-30 44-80 44 80Zm9-40 35-69 35 69Z" />
        <path d="M1080 371v-91h8v91Zm-34-26 38-70 38 70Zm7-35 31-60 31 60Z" />
        <path d="M1190 360V245h10v115Zm-40-32 45-82 45 82Zm8-41 37-72 37 72Z" />
      </g>
      <g
        stroke={colors.green[350]}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M985 95q9-9 18 0 9-9 18 0M940 120q6-6 12 0 6-6 12 0" />
      </g>
      <g transform="translate(860 323) rotate(6)">
        <path d="M0 0v49" stroke={colors.green[550]} strokeWidth="5" />
        <path d="M-24 0H22L32 10 22 20H-24Z" fill={colors.white[100]} />
        <path
          d="M-13 10H15m-5-5 5 5-5 5"
          fill="none"
          stroke={colors.green[350]}
          strokeWidth="2"
        />
      </g>
    </Box>
  );
}

export default TrailLandscape;
