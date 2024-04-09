<script>
  import { beforeUpdate } from "svelte";
  import { convertParamToScore, convertScoreToResult } from "../core/ecr";
  import { SERVICE_NAME } from "../core/constants";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import { PATH_EXPERIMENT } from "../router/routes.config";
  import { href, link } from "../router/helper";

  export let params;

  let error = null;
  let scoreList = [];
  let result = { title: null, content: null };
  let title = SERVICE_NAME;

  async function generateResult() {
    try {
      scoreList = convertParamToScore(params.result);
      result = convertScoreToResult(scoreList);
      title = `${result.title} - ${SERVICE_NAME}`;
      error = null;
    } catch (parsingError) {
      error = parsingError;
    }
  }

  function handleShare() {
    if (window.navigator.share) {
      window.navigator.share({
        title: `${result.title} - ${SERVICE_NAME}`,
        url: window.location.href,
      });
    }
  }

  beforeUpdate(generateResult);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if error === null && result.title && result.content}
  <main class="result">
    <h1>{result.title}</h1>
    <p>{result.content}</p>
  </main>
  <div class="action">
    <a class="action__trigger action__trigger--retry" href={href(PATH_EXPERIMENT)} use:link>다시 검사하기</a>
    <button class="action__trigger action__trigger--share" on:click={handleShare}>공유하기</button>
  </div>
  <div class="answer">
    <h2>응답</h2>
    <ExperimentSheet answerList={scoreList} readonly={true} vertical={true} />
  </div>
{:else}
  {error?.message}
{/if}

<style>
  .result {
    max-width: 960px;
    margin: 24px auto 0;
    padding: 8px 16px;
    word-break: keep-all;
  }

  .result h1 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    color: #666;
  }

  .result p {
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: -1px;
    text-indent: 0.5em;
    color: #333;
  }

  .action {
    overflow: hidden;
  }
  .action__trigger {
    text-decoration: none;
    font-style: normal;
    background: none transparent;
    border: 0 none;
    cursor: pointer;
  }
  .action__trigger--retry {
    color: #f00;
  }
  .action__trigger--share {
    color: #369;
  }
</style>
