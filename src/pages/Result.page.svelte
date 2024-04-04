<script>
  import { convertParamToScore, convertScoreToResult } from "../core/ecr";

  export let params;

  let score;
  let title;
  let content;
  let message;
  try {
    score = convertParamToScore(params.result);
    const result = convertScoreToResult(score);
    title = result.title;
    content = result.content;
  } catch (parsingError) {
    message = parsingError.message;
  }
</script>

<h1>Result {JSON.stringify(params)}</h1>
{JSON.stringify(score)}
<main>
  {message}
  <h2>{title}</h2>
  <p>{content}</p>
</main>
