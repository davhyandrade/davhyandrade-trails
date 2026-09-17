import InstallBanner from '@/app/_components/pwa-manager/install-banner/install-banner.component';
import type { InstallBannerProps } from '@/app/_components/pwa-manager/install-banner/install-banner.types';
import {
  beforeEach,
  expect,
  it,
  render,
  screen,
  userEvent,
  vi,
} from '@/shared/utils/testing/testing.utils';

const defaultProps: InstallBannerProps = {
  open: true,
  onInstall: vi.fn(),
  onClose: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
});

it('renders nothing when closed', () => {
  render(<InstallBanner {...defaultProps} open={false} />);

  expect(screen.queryByRole('complementary')).not.toBeInTheDocument();
});

it('renders the install notice when open', () => {
  render(<InstallBanner {...defaultProps} />);

  expect(
    screen.getByRole('complementary', {
      name: 'Instalar o aplicativo Minhas Trilhas',
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Minhas Trilhas' }),
  ).toBeInTheDocument();
  expect(screen.getByText('INSTALE O APP')).toBeInTheDocument();
});

it('calls onInstall when clicking the install button', async () => {
  render(<InstallBanner {...defaultProps} />);

  await userEvent.click(screen.getByRole('button', { name: 'Baixar' }));

  expect(defaultProps.onInstall).toHaveBeenCalledTimes(1);
  expect(defaultProps.onClose).not.toHaveBeenCalled();
});

it('calls onClose when clicking the close button', async () => {
  render(<InstallBanner {...defaultProps} />);

  await userEvent.click(
    screen.getByRole('button', { name: 'Fechar aviso de instalação' }),
  );

  expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  expect(defaultProps.onInstall).not.toHaveBeenCalled();
});
