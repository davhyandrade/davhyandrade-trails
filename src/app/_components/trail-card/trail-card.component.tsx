import { Box, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { CalendarDays, MapPin, Mountain } from 'lucide-react';

import { formatTrailDate } from '@/app/_utils/trails/trails';
import { colors } from '@/shared/lib/mui/theme/palette/colors/colors.constant';

import { trailCardStyles } from './trail-card.styles';
import type { TrailCardProps } from './trail-card.types';

const gradients = [
  `linear-gradient(145deg,${colors.green[600]},${colors.green[450]} 55%,${colors.green[200]})`,
  `linear-gradient(145deg,${colors.green[550]},${colors.green[350]} 55%,${colors.orange[500]})`,
  `linear-gradient(145deg,${colors.green[600]},${colors.green[400]} 58%,${colors.green[150]})`,
];

function TrailCard({ trail, index }: TrailCardProps) {
  return (
    <Box component="article" sx={trailCardStyles.card}>
      <Box
        sx={{
          ...trailCardStyles.art,
          background: gradients[index % gradients.length],
        }}
      >
        <Box
          aria-hidden
          sx={theme => ({
            position: 'absolute',
            width: 230,
            height: 230,
            border: 1,
            borderColor: alpha(theme.palette.background.default, 0.2),
            borderRadius: '43% 57%',
            top: -115,
            right: -65,
            transform: 'rotate(28deg)',
          })}
        />

        <Mountain
          aria-hidden
          size={36}
          strokeWidth={1.35}
          style={{ position: 'absolute', top: 22, left: 22, opacity: 0.78 }}
        />

        <Typography
          variant="overline"
          component="p"
          sx={{ position: 'relative', opacity: 0.78 }}
        >
          Trilha realizada
        </Typography>
      </Box>
      <Box sx={{ p: 6 }}>
        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
          {trail.name}
        </Typography>

        <Stack spacing={2}>
          <Stack
            direction="row"
            sx={{
              gap: 2,
              alignItems: 'center',
            }}
          >
            <MapPin size={18} />

            <Typography variant="body2" color="textSecondary">
              {trail.location}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            sx={{
              gap: 2,
              alignItems: 'center',
            }}
          >
            <CalendarDays size={18} />

            <Typography
              variant="body2"
              component="time"
              color="textSecondary"
              dateTime={trail.date}
            >
              {formatTrailDate(trail.date)}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default TrailCard;
