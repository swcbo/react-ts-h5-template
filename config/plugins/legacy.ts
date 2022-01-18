import legacy from '@vitejs/plugin-legacy';
export default () =>
  legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
  });
