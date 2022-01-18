import fs from 'fs';
// @ts-ignore
import lessToJS from 'less-vars-to-js';
import path from 'path';

export const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './variables.less'), 'utf8'),
);
