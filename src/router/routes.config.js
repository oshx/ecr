import * as PageExperiment from "~/src/pages/Experiment.page.svelte";
import * as PageResult from "~/src/pages/Result.page.svelte";
import * as PageNotFound from "~/src/pages/NotFound.page.svelte";

export const PATH_EXPERIMENT = "/";
export const PATH_RESULT = "/results/:result";

const routes = {
  [PATH_EXPERIMENT]: PageExperiment,
  [PATH_RESULT]: PageResult,
  "*": PageNotFound,
};

export default routes;
