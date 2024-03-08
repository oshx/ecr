import PageHome from "../pages/Home.page.svelte";
import PageResult from "../pages/Result.page.svelte";
import PageTestingStep from "../pages/Step.page.svelte";
import PageNotFound from "../pages/NotFound.page.svelte";
import PageError from "../pages/Error.page.svelte";

export const PATH_HOME = "/";
export const PATH_STEP = "/steps/:step";
export const PATH_RESULT = "/results/:result";
export const PATH_ERROR = "/errors/:error";

const routes = {
  [ PATH_HOME ]: PageHome,
  [ PATH_STEP ]: PageTestingStep,
  [ PATH_RESULT ]: PageResult,
  [ PATH_ERROR ]: PageError,
  "*": PageNotFound,
};

export default routes;
