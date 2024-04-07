<script>
  import { beforeUpdate } from "svelte";
  import { convertParamToScore, convertScoreToResult } from "../core/ecr";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";

  export let params;

  let error = null;
  let scoreList = [];
  let result = { title: null, content: null };

  async function generateResult() {
    try {
      scoreList = convertParamToScore(params.result);
      result = convertScoreToResult(scoreList);
      error = null;
    } catch (parsingError) {
      error = parsingError;
    }
  }

  function handleRetry() {
    if (window.navigator.share) {
      window.navigator.share({

      })
    }
  }

  beforeUpdate(generateResult);
</script>

{#if error === null && result.title && result.content}
  <main class="result">
    <h1>{result.title}</h1>
    <p>{result.content}</p>
  </main>
  <div class="action">
    <button class="" on:click={handleRetry}>다시 검사하기</button>
  </div>
  <div class="answer">
    <h2>응답</h2>
    <ExperimentSheet answerList={scoreList} readonly={true} vertical={true}
    />
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
    border-bottom: 1px solid rgba(0, 0, 0, .12);
    color: #666;
  }

  .result p {
    font-size: 18px;
    line-height: 1.8;
    letter-spacing: -1px;
    text-indent: .5em;
    color: #333;
  }
</style>
