import { compile } from 'path-to-regexp';
import queryString from 'query-string';

export const href = (path, params = {}, options = {}) => {
  const queries = ((query) => query ? `?${query}` : '')(queryString.stringify(params, options));
  const compiler = compile(path);
  console.debug(compiler);
  return `${compiler(params)}${queries}`;
};
