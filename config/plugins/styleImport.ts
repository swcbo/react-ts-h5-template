import { createStyleImportPlugin } from 'vite-plugin-style-import';
export default () => {
  return createStyleImportPlugin({
    libs: [
      {
        libraryName: 'antd-mobile',
        esModule: true,
        resolveStyle: (name) => {
          return `antd-mobile/es/components/${name}/${name}.css`;
        },
      },
    ],
  });
};
