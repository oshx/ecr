<script>
  import { QuestionList, SERVICE_NAME } from "../core/constants";
  import { convertAnswerToParam } from "../core/ecr";
  import { href, push } from "../router/helper";
  import { PATH_RESULT } from "../router/routes.config";
  import TopNavigation from "../components/TopNavigation.svelte";
  import InformationSheet from "../components/InformationSheet.svelte";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import ExperimentIndicator from "../components/ExperimentIndicator.svelte";
  import Message from "../components/Message.svelte";
  import Corset from "../components/layouts/Corset.svelte";

  let message = null;
  let answerList = Array(QuestionList.length).fill(0);

  function resolveMessage() {
    message = null;
  }

  function handleSelect(customEvent) {
    answerList[customEvent.detail[0]] = customEvent.detail[1];
  }

  function handleSubmit() {
    try {
      const result = convertAnswerToParam(answerList);
      return push(href(PATH_RESULT, { result }));
    } catch (error) {
      message = error.message;
    }
  }
</script>

<svelte:head>
  <title>검사 시작 - {SERVICE_NAME}</title>
</svelte:head>
<Corset>
  <form on:submit|preventDefault={handleSubmit}>
    <TopNavigation />
    <InformationSheet />
    <ExperimentSheet {answerList} on:select={handleSelect} />
    <ExperimentIndicator
      progress={answerList.filter((answer) => answer !== 0).length}
      total={answerList.length}
    />
    <Message {message} on:resolve={resolveMessage} />
  </form>
</Corset>
