import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierRecommendedConfig from 'eslint-plugin-prettier/recommended';

import generalConfig from './eslint/general.config.mjs';
import importSortConfig from './eslint/import.config.mjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettierRecommendedConfig,
  generalConfig,
  importSortConfig,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
