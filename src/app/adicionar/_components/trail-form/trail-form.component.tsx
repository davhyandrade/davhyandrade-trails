'use client';

import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import {
  ArrowRight,
  CalendarDays,
  Images,
  MapPin,
  Mountain,
  Route,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';
import { useState } from 'react';

import { addTrail, createTrailId } from '@/app/_utils/trails/trails';

import { trailFormStyles } from './trail-form.styles';
import type { TrailFormValues } from './trail-form.types';

const emptyValues: TrailFormValues = {
  name: '',
  location: '',
  date: '',
  estimatedDistanceKm: '',
  photosUrl: '',
};

const fields = [
  {
    key: 'name' as const,
    label: 'Nome da trilha',
    placeholder: 'Ex.: Pico do Jaraguá',
    icon: <Mountain size={19} />,
  },
  {
    key: 'location' as const,
    label: 'Local (opcional)',
    placeholder: 'Ex.: São Paulo, SP',
    icon: <MapPin size={19} />,
  },
  {
    key: 'date' as const,
    label: 'Data',
    placeholder: '',
    icon: <CalendarDays size={19} />,
  },
  {
    key: 'estimatedDistanceKm' as const,
    label: 'Distância estimada em km (opcional)',
    placeholder: 'Ex.: 3,5',
    icon: <Route size={19} />,
  },
  {
    key: 'photosUrl' as const,
    label: 'Link para fotos (opcional)',
    placeholder: 'https://...',
    icon: <Images size={19} />,
  },
];

function TrailForm() {
  const router = useRouter();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState<Partial<TrailFormValues>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors: Partial<TrailFormValues> = {};

    if (!values.name.trim())
      validationErrors.name = 'Informe o nome da trilha.';

    if (!values.date) validationErrors.date = 'Informe a data.';

    const distanceInput = values.estimatedDistanceKm.trim();
    const estimatedDistanceKm = distanceInput
      ? Number(distanceInput)
      : undefined;
    const photosUrl = values.photosUrl.trim();

    if (
      estimatedDistanceKm !== undefined &&
      (!Number.isFinite(estimatedDistanceKm) || estimatedDistanceKm <= 0)
    ) {
      validationErrors.estimatedDistanceKm =
        'Informe uma distância em quilômetros maior que zero.';
    }

    if (photosUrl) {
      try {
        const url = new URL(photosUrl);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error();
      } catch {
        validationErrors.photosUrl =
          'Informe um link válido com http:// ou https://.';
      }
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    addTrail({
      id: createTrailId(values.name, values.date),
      name: values.name.trim(),
      location: values.location.trim() || undefined,
      estimatedDistanceKm,
      photosUrl: photosUrl || undefined,
      date: values.date,
    });

    router.push('/');
  }

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={trailFormStyles.form}
    >
      <Grid container columns={4} spacing={3}>
        {fields.map(field => (
          <Grid
            key={field.key}
            size={
              field.key === 'date' || field.key === 'estimatedDistanceKm'
                ? 2
                : 4
            }
            sx={{ minWidth: 0 }}
          >
            <Typography
              component="label"
              htmlFor={field.key}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 1,
                color: '#274534',
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              {field.icon}
              {field.label}
            </Typography>
            <TextField
              id={field.key}
              type={
                field.key === 'date'
                  ? 'date'
                  : field.key === 'estimatedDistanceKm'
                    ? 'number'
                    : field.key === 'photosUrl'
                      ? 'url'
                      : 'text'
              }
              required={field.key === 'name' || field.key === 'date'}
              slotProps={{
                input:
                  field.key === 'estimatedDistanceKm'
                    ? {
                        endAdornment: (
                          <InputAdornment
                            position="end"
                            sx={{ flexShrink: 0, ml: 0.5 }}
                          >
                            km
                          </InputAdornment>
                        ),
                      }
                    : {},
                htmlInput:
                  field.key === 'estimatedDistanceKm'
                    ? { min: 0.5, step: 0.5, inputMode: 'decimal' }
                    : {},
              }}
              value={values[field.key]}
              onChange={event => {
                setValues(currentValues => ({
                  ...currentValues,
                  [field.key]: event.target.value,
                }));
                setErrors(currentErrors => ({
                  ...currentErrors,
                  [field.key]: undefined,
                }));
              }}
              placeholder={field.placeholder}
              error={Boolean(errors[field.key])}
              helperText={errors[field.key]}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#FAF8ED',
                  borderRadius: 2.5,
                  ...(field.key === 'estimatedDistanceKm' && { px: 1 }),
                },
                '& .MuiInputBase-input': {
                  fontSize: 16,
                  py: 1.6,
                  ...(field.key === 'estimatedDistanceKm' && {
                    minWidth: 0,
                    width: 0,
                    flex: '1 1 0',
                    px: 0,
                    MozAppearance: 'textfield',
                    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button':
                      {
                        WebkitAppearance: 'none',
                        margin: 0,
                      },
                  }),
                },
              }}
            />
          </Grid>
        ))}
        <Grid size={4}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            endIcon={<ArrowRight size={19} />}
            sx={{
              mt: 1,
              minHeight: 52,
              bgcolor: '#173E29',
              borderRadius: 2.5,
              textTransform: 'none',
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Registrar trilha
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TrailForm;
