<script>
  import TestSheet from "../components/TestSheet.svelte";
  import { link } from "svelte-spa-router";
  import {href} from "../router/helper";
  import {PATH_STEP} from "../router/routes.config";

  export let params;
</script>

<section>
  <a href={href(PATH_STEP, { step: 1, answers: 2 })} use:link>Step1</a>
  <a href={href(PATH_STEP, { step: 36 })} use:link>Step36</a>
  <a href={href(PATH_STEP, { step: 37 })} use:link>Step37</a>
  <h1>Step.page.svelte</h1>
  <TestSheet step={params.step - 1} />
</section>
