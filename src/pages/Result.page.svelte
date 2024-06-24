<script>
  import { beforeUpdate } from "svelte";
  import { convertParamToScore, convertScoreToResult } from "../core/ecr";
  import { SERVICE_NAME } from "../core/constants";
  import ExperimentSheet from "../components/ExperimentSheet.svelte";
  import { PATH_EXPERIMENT } from "../router/routes.config";
  import { href, link } from "../router/helper";

  export let params;

  const retryPath = href(PATH_EXPERIMENT);

  let error = null;
  let scoreList = [];
  let result = { title: null, content: null };
  let title = SERVICE_NAME;
  let unfoldFlag = false;

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
      return window.navigator.share({
        title: `${result.title} - ${SERVICE_NAME}`,
        url: window.location.href,
      });
    }
    try {
      window.navigator.clipboard.writeText(window.location.href);
      alert("주소가 복사되었습니다.");
    } catch (copyError) {
      alert("복사할 수 없습니다. \n오류가 발생했습니다.");
      console.error(copyError);
    }
  }

  function unfoldAnswer() {
    unfoldFlag = true;
  }

  function foldAnswer() {
    unfoldFlag = false;
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

    <div class="action">
      <a
        class="action__trigger action__trigger--retry"
        href={retryPath}
        use:link>다시 검사하기</a
      >
      <button
        class="action__trigger action__trigger--share"
        on:click={handleShare}>공유하기
      </button
      >
    </div>
    <div class="answer">
      <h2>응답했던 항목 다시보기</h2>
      <div
        class={"answer__review answer__review--unfold " + (unfoldFlag ? "" : "answer__review--show")}>
        <button class="answer__review-trigger" on:click={unfoldAnswer}>
          펼치기 +
        </button>
      </div>
      <div
        class={"answer__review answer__review--fold " + (unfoldFlag ? "answer__review--show" : "")}>
        <button class="answer__review-trigger" on:click={foldAnswer}>
          접기 -
        </button>
        <ExperimentSheet answerList={scoreList} readonly={true}
                         vertical={true} />
      </div>
    </div>
  </main>
{:else}
  {error?.message}
{/if}

<style>
  .result {
    max-width: 960px;
    margin: 24px auto 0;
    padding: 8px 16px;
    word-break: keep-all;
    text-align: center;
  }

  .result h1 {
    display: inline-block;
    padding: 8px 24px;
    font-size: 36px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    border: 6px double #ccc;
    box-shadow: inset 0 0 15px #fff;
    border-radius: 16px;
  }

  .result h1::before {
    content: "\201C";
    color: #999;
  }

  .result h1::after {
    content: "\201D";
    color: #999;
  }

  .result h2 {
    margin: 48px auto 0;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    color: #666;
    text-align: left;
  }

  .result p {
    font-size: 24px;
    line-height: 1.8;
    letter-spacing: -1px;
    text-indent: 0.5em;
    text-align: left;
    color: #333;
  }

  .action {
    overflow: hidden;
    text-align: center;
  }

  .answer__review {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: opacity 1s linear;
  }

  .answer__review--show {
    opacity: 1;
    height: auto;
  }

  .answer__review-trigger {
    margin: 24px auto 0;
  }

  a,
  button {
    display: inline-block;
    padding: 8px 24px;
    margin-right: 8px;
    background: none transparent;
    box-sizing: border-box;
    border: 1px solid #999;
    border-radius: 8px;
    text-decoration: none;
    font-style: normal;
    font-size: 24px;
    font-weight: 700;
    color: #333;
    line-height: 1;
    cursor: pointer;
    vertical-align: middle;
    transition: background-color .25s ease;
  }

  a:hover,
  button:hover,
  a:active,
  button:active,
  a:focus,
  button:focus {
    color: #000;
    background-color: #fff;
  }

  @media screen and (max-width: 960px) {
    .result h1 {
      font-size: 24px;
    }

    .result p {
      font-size: 18px;
    }

    .result .action__trigger {
      display: block;
      width: 100%;
      max-width: 160px;
      margin: 16px auto 0;
      font-size: 18px;
    }
  }
</style>
