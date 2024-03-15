<script>
  import TopNavigation from "../components/TopNavigation.svelte";
  import InformationSheet from "../components/InformationSheet.svelte";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import { QuestionList, SERVICE_NAME } from "../core/constants";
  import { convertAnswerToParam } from "../core/ecr";
  import { href, push } from "../router/helper";
  import { PATH_RESULT } from "../router/routes.config";

  export let params;

  const answerList = Array(QuestionList.length).fill(0).map((_, index) => Math.floor(index / 10 + 1));

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
<TopNavigation />
<InformationSheet />

<button on:click={handleGoToResult}>결과 보기</button>
<ExperimentSheet on:select={handleSelect} />
