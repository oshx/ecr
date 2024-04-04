<script>
  import { QuestionList, SERVICE_NAME } from "../core/constants";
  import { convertAnswerToParam } from "../core/ecr";
  import { href, push } from "../router/helper";
  import { PATH_RESULT } from "../router/routes.config";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import ProgressManager from "../components/ProgressManager.svelte";
  import Message from "../components/Message.svelte";
  import InformationSheet from "../components/InformationSheet.svelte";

  let message = null;
  let answerList = Array(QuestionList.length).fill(0);

  function resolveMessage() {
    message = null;
  }

  function handleSelect(customEvent) {
    answerList[customEvent.detail[0]] = customEvent.detail[1];
  }

  function filterNotZero(value) {
    return value !== 0;
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
<InformationSheet intro={true} />
<form on:submit|preventDefault={handleSubmit}>
  <ProgressManager
    progress={answerList.filter(filterNotZero).length}
    total={answerList.length}
  />
  <ExperimentSheet {answerList} on:select={handleSelect} />
  <Message {message} on:resolve={resolveMessage} />
</form>

<style>
  form {
    margin: 0;
    padding: 0;
  }
</style>
