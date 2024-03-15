<script>
  import { convertParamToScore, convertScoreToResult } from "../core/ecr";
  export let params;

  const score = convertParamToScore(params.result);
  const { title, content } = convertScoreToResult(score);
</script>

<h1>Result {JSON.stringify(params)}</h1>
{JSON.stringify(score)}
<h2>{title}</h2>
<p>{content}</p>
