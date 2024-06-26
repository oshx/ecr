import { parse, compile } from "path-to-regexp";
export * from "svelte-spa-router";
import { default as queryStringTool } from "query-string";
export { queryStringTool };

export const href = (path, params = {}, options = {}) => {
  const tokens = parse(path);
  const queries = ((query) => (query ? `?${query}` : ""))(
    queryStringTool.stringify(
      Object.keys(params).reduce((result, current) => {
        if (tokens.some((token) => token.name === current)) {
          return result;
        }
        result[current] = params[current];
        return result;
      }, {}),
      options
    )
  );
  const compiler = compile(path);
  return `${compiler(params)}${queries}`;
};
