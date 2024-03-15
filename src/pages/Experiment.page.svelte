<script>
  import { href, link } from "../router/helper";
  import { PATH_RESULT } from "../router/routes.config";
  import TopNavigation from "../components/TopNavigation.svelte";
  import InformationSheet from "../components/InformationSheet.svelte";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import { QuestionList, SERVICE_NAME } from "../core/constants";

  export let params;

  const result = Array(QuestionList.length);

  const handleSelect = (customEvent) => {
    result[customEvent.detail[0]] = customEvent.detail[1];
    console.log(result);
  };
</script>

<svelte:head>
  <title>검사 시작 - {SERVICE_NAME}</title>
</svelte:head>
<TopNavigation />
<InformationSheet />

<a href={href(PATH_RESULT, { result: 15 })} use:link>결과로 이동</a>
<ExperimentSheet on:select={handleSelect} />
