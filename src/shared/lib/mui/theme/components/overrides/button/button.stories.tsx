import { Box, Button, Stack } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArrowLeft, ArrowRight, ArrowUpRight, Home, Plus } from 'lucide-react';
import type { ReactNode } from 'react';

const sizes = ['small', 'medium', 'large'] as const;

/** O fantasma vem em par: cada tinta é legível em uma das superfícies. */
const surfaces = [
  { bgcolor: 'primary.background', color: 'ghostOnDark' },
  { bgcolor: 'background.default', color: 'ghostOnLight' },
] as const;

function Surface({
  bgcolor,
  children,
}: {
  bgcolor: string;
  children: ReactNode;
}) {
  return (
    <Box
      sx={{ bgcolor, p: 3, borderRadius: 4, border: 1, borderColor: 'divider' }}
    >
      {children}
    </Box>
  );
}

const meta = {
  title: 'components/mui/button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['contained', 'rounded', 'text'],
      description: '`rounded` é a variante custom do projeto.',
    },
    size: {
      control: 'inline-radio',
      options: sizes,
      description:
        'Vale para `contained` e `rounded`. A `text` usa peso regular e tamanho único de 14px, exceto com color="inherit", que mantém a escala do MUI.',
    },
    color: {
      control: 'inline-radio',
      options: [
        'primary',
        'secondary',
        'ghostOnDark',
        'ghostOnLight',
        'inherit',
      ],
      description:
        '`ghostOnDark` e `ghostOnLight` são a pílula transparente: mesma pintura, tintas opostas. Escolha pela superfície em que o botão está.',
    },
    disabled: { control: 'boolean' },
    href: {
      control: 'text',
      description:
        'Com `href` o botão vira o próprio link do Next — o tema define `LinkComponent` no `MuiButtonBase`.',
    },
  },
  args: {
    children: 'Registrar trilha',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    disabled: false,
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

const variants = ['contained', 'rounded', 'text'] as const;

export const Variants: Story = {
  parameters: { controls: { exclude: ['variant'] } },
  args: { children: '' },
  render: args => (
    <Stack direction="column" spacing={4} sx={{ alignItems: 'center' }}>
      {variants.map(variant => (
        <Button key={variant} {...args} variant={variant}>
          {args.children || variant}
        </Button>
      ))}
    </Stack>
  ),
};

export const Ghost: Story = {
  parameters: { controls: { exclude: ['color'] } },
  args: { variant: 'rounded', children: 'Adicionar' },
  render: args => (
    <Stack direction="column" spacing={2}>
      {surfaces.map(({ bgcolor, color }) => (
        <Surface key={color} bgcolor={bgcolor}>
          <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
            <Button {...args} color={color} />
            <Button {...args} color={color} disabled />
          </Stack>
        </Surface>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  args: { variant: 'contained' },
  render: args => (
    <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
      {sizes.map(size => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </Stack>
  ),
};

export const Colors: Story = {
  args: { variant: 'rounded' },
  render: args => (
    <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
      <Button {...args} color="primary">
        primary
      </Button>
      <Button {...args} color="secondary">
        secondary
      </Button>
      <Button {...args} disabled>
        disabled
      </Button>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <Stack direction="row" sx={{ gap: 2, alignItems: 'center' }}>
      <Button {...args} endIcon={<ArrowRight size={18} />}>
        Registrar trilha
      </Button>
      <Button {...args} variant="rounded" endIcon={<ArrowUpRight size={18} />}>
        Adicionar a primeira
      </Button>
      <Button {...args} variant="text" startIcon={<ArrowLeft size={18} />}>
        Voltar
      </Button>
    </Stack>
  ),
};

export const NavigationItems: Story = {
  render: () => (
    <>
      <Surface bgcolor="primary.background">
        <Stack direction="row" sx={{ gap: 0.5 }}>
          <Button variant="rounded" color="secondary" sx={{ gap: 0.9 }}>
            <Home size={18} />
            Minhas trilhas
          </Button>
          <Button variant="rounded" color="ghostOnDark" sx={{ gap: 0.9 }}>
            <Plus size={18} />
            Adicionar
          </Button>
        </Stack>
      </Surface>

      <Surface bgcolor="background.default">
        <Stack direction="row" sx={{ gap: 0.5 }}>
          <Button variant="rounded" color="primary" sx={{ gap: 0.9 }}>
            <Home size={18} />
            Minhas trilhas
          </Button>
          <Button variant="rounded" color="ghostOnLight" sx={{ gap: 0.9 }}>
            <Plus size={18} />
            Adicionar
          </Button>
        </Stack>
      </Surface>
    </>
  ),
};

export const AsLink: Story = {
  args: { variant: 'text', href: '/adicionar', children: 'Adicionar trilha' },
};
