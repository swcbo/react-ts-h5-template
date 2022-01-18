import { ProxyOptions } from 'vite';
/**
 * Generate proxy
 * @param list
 */
export default (target: string) => {
  const ProxyList: Record<string, string | ProxyOptions> = {
    '/api': {
      target,
      changeOrigin: true,
    },
  };
  return ProxyList;
};
