import PageExperiment from "../pages/Experiment.page.svelte";
import PageResult from "../pages/Result.page.svelte";
import PageNotFound from "../pages/NotFound.page.svelte";

export const PATH_EXPERIMENT = "/";
export const PATH_RESULT = "/results/:result";

const routes = {
  [PATH_EXPERIMENT]: PageExperiment,
  [PATH_RESULT]: PageResult,
  "*": PageNotFound,
};

export default routes;
