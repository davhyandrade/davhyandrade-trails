import type { RenderOptions } from '@testing-library/react';
import { render as testingLibraryRender } from '@testing-library/react';
import type { PropsWithChildren, ReactElement } from 'react';

import MuiProvider from '@/shared/lib/mui/theme/providers/mui.provider';

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  test,
  vi,
} from 'vitest';

export function render(ui: ReactElement, options?: RenderOptions) {
  const CustomWrapper = options?.wrapper;

  function Wrapper({ children }: PropsWithChildren) {
    return (
      <MuiProvider>
        {CustomWrapper ? <CustomWrapper>{children}</CustomWrapper> : children}
      </MuiProvider>
    );
  }

  return testingLibraryRender(ui, { ...options, wrapper: Wrapper });
}
