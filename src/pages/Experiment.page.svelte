<script>
  import { QuestionList, SERVICE_NAME } from "../core/constants";
  import { convertAnswerToParam } from "../core/ecr";
  import { href, push } from "../router/helper";
  import { PATH_RESULT } from "../router/routes.config";
  import TopNavigation from "../components/TopNavigation.svelte";
  import InformationSheet from "../components/InformationSheet.svelte";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import ExperimentIndicator from "../components/ExperimentIndicator.svelte";

  export let params;

  console.log(params);

  const answerList = Array(QuestionList.length).fill(0);

  const handleSelect = (customEvent) => {
    answerList[customEvent.detail[0]] = customEvent.detail[1];
  };
  const handleGoToResult = () => {
    push(href(PATH_RESULT, { result: convertAnswerToParam(answerList) }));
  };
</script>

<svelte:head>
  <title>검사 시작 - {SERVICE_NAME}</title>
</svelte:head>
<form on:submit|preventDefault={handleGoToResult}>
  <input type="hidden" value={} />
  <TopNavigation />
  <InformationSheet />
  <ExperimentSheet on:select={handleSelect} />
  <ExperimentIndicator progress={answerList.filter(answer => answer !== 0).length}
                       total={answerList.length} />
</form>
