import PageHome from "../pages/Home.page.svelte";
import PageResult from "../pages/Result.page.svelte";
import PageNotFound from "../pages/NotFound.page.svelte";

export const PATH_HOME = "/";
export const PATH_STEP = "/steps/:step";
export const PATH_RESULT = "/results/:result";
export const PATH_ERROR = "/errors/:error";

const routes = {
  [PATH_HOME]: PageHome,
  [PATH_RESULT]: PageResult,
  "*": PageNotFound,
};

export default routes;
