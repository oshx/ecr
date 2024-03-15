<script>
  import TestSheet from "../components/TestSheet.svelte";
  import {link} from "svelte-spa-router";
  import {href} from "../router/helper";
  import {PATH_STEP} from "../router/routes.config";
  import {QuestionList} from "../core/constants";

  export let params;

  const result = Array(QuestionList.length);
  const handleSelect = (customEvent) => console.log(customEvent.detail);
</script>

<section>
  <a href={href(PATH_STEP, { step: 1, answers: 2 })} use:link>Step1</a>
  <a href={href(PATH_STEP, { step: 2 })} use:link>Step2</a>
  <a href={href(PATH_STEP, { step: 3 })} use:link>Step3</a>
  <a href={href(PATH_STEP, { step: 4 })} use:link>Step4</a>
  <h1>Step.page.svelte</h1>
  <TestSheet on:select={handleSelect} step={params.step}/>
</section>
